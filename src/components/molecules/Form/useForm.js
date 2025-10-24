/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import {useRef} from "react";
// eslint-disable-next-line no-unused-vars
import Styled from "styled-components";
import {setValues, getValue} from "./utils/valueUtil";

class FormStore {
    store = {};

    errors = {};

    rules = {};

    fieldEntities = [];

    initialValues = {};

    callbacks = {};

    getFieldValue = name => this.store[name];

    getFieldsValue = () => this.store;

    getFieldRules = name => this.rules[name] ?? [];

    getFieldsErrors = () => this.errors;

    getFieldError = name => this.errors?.[name]?.message || "";

    getFieldEntities = () => this.fieldEntities;

    validateFields = () => {
        if (this.store) {
            Object.entries(this.store).forEach(([key, value]) => {
                this.validateField(key, value);
            });
            this.store = setValues(this.store, this.store);
        }
        this.notifyObservers(this.store);
        return this.errors;
    };

    validateField = (_, __) => {
        const rules = this.getFieldRules(_);
        let value = __;
        const name = _;
        if (typeof value === "object") {
            if (!Object?.hasOwn(value, "place_id")) {
                value = value?.value ? value.value : value;
            }
        } else if (typeof value === "boolean") {
            value = value || false;
        } else value = typeof value === "string" ? String(value)?.trim() : value;

        let errors = [];
        rules.forEach(rule => {
            const error = {};
            switch (Object.keys(rule).filter(___ => ___ !== "message")[0]) {
                case "required":
                    if (rule.required) {
                        error.hasError = !value;
                        // error.message = error.hasError ? rule.message ?? `${name} is required` : '';
                        error.message = error.hasError ? rule.message ?? rule.message ?? " " : "";
                    }
                    break;
                case "min":
                    if (!Number.isNaN(value)) error.hasError = value.length < rule.min;
                    else error.hasError = value < rule.min;
                    error.message = error.hasError ? rule.message ?? `value must be grater then ${rule.min}` : "";
                    break;
                case "max":
                    if (!Number.isNaN(value)) {
                        error.hasError = value.length > rule.max;
                    } else {
                        error.hasError = value > rule.max;
                    }
                    error.message = error.hasError ? rule.message ?? `value must be less then ${rule.max}` : "";
                    break;
                case "email":
                    if (rule.email) {
                        error.hasError = !/^[A-Z0-9_+.-]+@[A-Z0-9][A-Z0-9-]*\.[A-Z]{2,}$/i.test(value);
                        error.message = error.hasError ? rule.message ?? `Enter a valid email.` : "";
                    }
                    break;
                case "password":
                    if (rule.password) {
                        error.hasError = !(
                            /(?=.*[a-z])/.test(value) &&
                            /(?=.*[A-Z])/.test(value) &&
                            value?.length >= 8 &&
                            /(?=.*\d)/.test(value)
                        );
                        error.message = error.hasError
                            ? rule.message ?? `8-64 chars, include, uppercase, lowercase, number, & symbol.`
                            : "";
                    }
                    break;
                case "pattern":
                    error.hasError = !rule.pattern.test(value);
                    error.message = error.hasError ? rule.message ?? `Enter a valid email` : "";

                    break;
                case "transform":
                    error.hasError = rule.transform(value);
                    error.message = error.hasError
                        ? rule.message ?? `this value does not satisfy the transform condition`
                        : "";
                    break;
                default:
                    break;
            }
            errors.push(error);
        });
        [errors] = errors.filter(({hasError}) => hasError);

        if (value === "" || value === null || value === undefined) {
            const [isRequired] = rules.filter(r => r?.required);
            if (!isRequired) {
                errors = undefined;
            }
        }
        this.setFieldsError({[name]: errors});
        return errors;
    };

    transformField = (_, __) => {
        const rules = this.getFieldRules(_);
        const value = __;
        const [regex] = rules.filter(r => r?.changeRegex);
        if ((typeof value !== "string" && typeof value !== "number") || !regex) {
            return value;
        }
        const formatedVaue = (___, type) => {
            if (type === "phone_number") {
                const cleanNum = ___.toString().replace(/\D/g, "");
                const match = cleanNum?.substr(0, 10)?.match(/^(\d{3})(\d{0,3})(\d{0,4})$/);
                if (match) {
                    return `${
                        match[1].trim().length === 3 && match[2].trim() ? `(${match[1].trim()}) ` : `${match[1].trim()}`
                    }${match[2].trim() && match[3].trim() ? `${match[2].trim()}-` : match[2].trim()}${match[3].trim()}`;
                }
                return cleanNum;
            }
            if (type === "sin") {
                const cleanNum = ___.toString().replace(/\D/g, "");
                const match = cleanNum?.substr(0, 9)?.match(/^(\d{3})(\d{0,3})(\d{0,3})$/);
                if (match) {
                    return `${match[1].trim() && match[2].trim() ? `${match[1].trim()}-` : `${match[1].trim()}`}${
                        match[2].trim() && match[3].trim() ? `${match[2].trim()}-` : `${match[2].trim()}`
                    }${match[3].trim()}`;
                }
                return cleanNum;
            }
            return ___;
        };
        return formatedVaue(value, regex.changeRegex);
    };

    notifyObservers = prevStore => {
        this.getFieldEntities().forEach(entity => {
            const {onStoreChange} = entity;
            onStoreChange(prevStore, this.getFieldsValue());
        });
    };

    setFieldsError = curErrors => {
        if (curErrors) {
            this.errors = setValues(this.errors, curErrors);
            this.notifyObservers(this.store);
        }
    };

    setFieldsValue = curStore => {
        // eslint-disable-next-line no-undef
        const {onTouched = () => {}} = this.callbacks;
        const prevStore = this.store;
        if (curStore) {
            Object.entries(curStore).forEach(([key, value]) => {
                curStore[key] = this.transformField(key, value);
                this.validateField(key, curStore[key]);
            });
            this.store = setValues(this.store, curStore);
        }
        onTouched(curStore);
        this.notifyObservers(prevStore);
    };

    registerField = entity => {
        this.fieldEntities.push(entity);
        this.rules[entity.props.name] = entity.props.rules;
        return () => {
            this.fieldEntities = this.fieldEntities.filter(item => item !== entity);
            delete this.store[entity.props.name];
            delete this.rules[entity.props.name];
        };
    };

    submit = () => {
        const {onSubmit = () => {}, onError = () => {}} = this.callbacks;
        const values = {};
        Object.keys(this.rules ?? {}).forEach(_ => {
            values[_] = this.transformField(_, this.getFieldValue(_)) ?? "";
        });
        const errors = Object.entries(values)
            .map(_ => this.validateField(_[0], _[1]))
            .filter(_ => _);

        if (!errors.length) {
            onSubmit(this.getFieldsValue());
        } else {
            onError(this.getFieldsErrors());
            this.notifyObservers(this.getFieldsValue());
        }
    };

    getInitialValue = namePath => getValue(this.initialValues, namePath);

    setInitialValues = (initialValues, init) => {
        this.initialValues = initialValues;
        if (init) {
            Object.entries(initialValues ?? {}).forEach(([key, value]) => {
                initialValues[key] = this.transformField(key, value);
                this.validateField(key, initialValues[key]);
            });
            this.initialValues = initialValues;
            this.store = setValues(this.store, initialValues);
            this.notifyObservers(this.store);
        }
    };

    setFieldRules = (fieldName, rules) => {
        this.rules[fieldName] = rules;
    };

    removeFieldError = fieldName => {
        if (this.errors[fieldName]) {
            delete this.errors[fieldName];
            this.notifyObservers(this.store);
        }
    };

    hasFieldError = name => {
        const error = this.getFieldError(name);
        return !!error;
    };

    setCallbacks = callbacks => {
        this.callbacks = callbacks;
    };

    resetForm = () => {
        const initialValues = this.getFieldsValue();
        if (initialValues) {
            const resetValues = {};
            Object.keys(initialValues).forEach(key => {
                resetValues[key] = this.transformField(key, this.getInitialValue(key));
            });
            this.setFieldsValue(resetValues);
        }
        Object.keys(this.errors).forEach(key => {
            this.removeFieldError(key);
        });
    };

    getForm = () => ({
        validateFields: this.validateFields,
        getFieldsErrors: this.getFieldsErrors,
        setFieldsError: this.setFieldsError,
        getFieldError: this.getFieldError,
        getFieldValue: this.getFieldValue,
        getFieldsValue: this.getFieldsValue,
        setFieldsValue: this.setFieldsValue,
        registerField: this.registerField,
        setFieldRules: this.setFieldRules,
        hasFieldError: this.hasFieldError,
        removeFieldError: this.removeFieldError,
        resetForm: this.resetForm,
        submit: this.submit,
        getInternalHooks: () => ({
            setInitialValues: this.setInitialValues,
            setCallbacks: this.setCallbacks,
        }),
    });
}

export default function useForm(form) {
    const formRef = useRef();
    if (!formRef.current) {
        if (form) {
            formRef.current = form;
        } else {
            const formStore = new FormStore();
            formRef.current = formStore.getForm();
        }
    }
    return [formRef.current];
}
