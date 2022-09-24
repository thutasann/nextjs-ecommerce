import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const InputBox = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label>
                {label}
            </label>
            <input
                {...field} {...props}
                autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} className="text-red-500"/>
        </div>
    )
}