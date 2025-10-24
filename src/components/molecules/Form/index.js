import FieldForm from './Form';
import Item from './Field';
import useForm from './useForm';

const Form = FieldForm;
Form.Item = Item;
Form.useForm = useForm;

export { Item, useForm };

export default Form;
