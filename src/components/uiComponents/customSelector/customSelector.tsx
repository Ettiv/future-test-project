import React from 'react';
import { ICustomSelectorProps } from '../../../types/selectorsTypes';
import './customSelector.css';

const CustomSelector:React.FC<ICustomSelectorProps> = (props:ICustomSelectorProps) => {
    const { name, options, defaultValue, onChange, label, ...rest } = props;
    return (
        <div>
            {label? <label htmlFor={name} className='custom-selector-label-text'>{label}</label>:null}
            <select
                id={name}
                name={name}
                className='form-control custom-select'
                defaultValue={defaultValue}
                onChange={onChange}
                {...rest}
            >
                {
                    options.map(option => {
                        return (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        );
                    })
                }
            </select>
        </div>
    );
}

export default CustomSelector;