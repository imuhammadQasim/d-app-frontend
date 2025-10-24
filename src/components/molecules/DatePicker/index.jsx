/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
// eslint-disable-next-line no-unused-vars

import DatePickerHeader from '../DatePickerHeader';
import { StyledDateRange } from './DatePicker.styles';

function ReactDateRange({
  prefix,
  suffix,
  disabled,
  excludeDateIntervals,
  invalid,
  error,
  onChange,
  timeOnly,
  excludeTimes,
  startTime,
  endTime,
  ...props
}) {
    const today = new Date();
    return (
        <>
            {timeOnly ? (
                <>
                    <StyledDateRange
                        disabled={disabled}
                        prefix={prefix}
                        suffix={suffix}
                        invalid={invalid || error}
                        showTimeSelectOnly
                        showTimeSelect
                        selected={startTime}
                        startDate={startTime}
                        onChange={_ => {
                            onChange({target: {value: _, name: "startTime"}});
                        }}
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="HH:mm"
                        placeholderText="Select Start Time"
                        {...props}
                    />
                    <StyledDateRange
                        disabled={disabled}
                        prefix={prefix}
                        suffix={suffix}
                        invalid={invalid || error}
                        showTimeSelectOnly
                        showTimeSelect
                        selected={endTime}
                        endDate={endTime}
                        onChange={_ => {
                            onChange({target: {value: _, name: "endTime"}});
                        }}
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="HH:mm"
                        placeholderText="Select End Time"
                        {...props}
                    />
                </>
            ) : (
                <StyledDateRange
                    disabled={disabled}
                    excludeDateIntervals={excludeDateIntervals}
                    prefix={prefix}
                    suffix={suffix}
                    invalid={invalid || error}
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                    }) => (
                        <DatePickerHeader
                            date={date}
                            changeYear={changeYear}
                            changeMonth={changeMonth}
                            decreaseMonth={decreaseMonth}
                            increaseMonth={increaseMonth}
                            prevMonthButtonDisabled={prevMonthButtonDisabled}
                            nextMonthButtonDisabled={nextMonthButtonDisabled}
                        />
                    )}
                    minDate={today}
                    {...props}
                    onChange={_ => {
                        onChange({target: {value: _, name: props.name}});
                    }}
                />
            )}
        </>
    );
}

export default ReactDateRange;
