import { TextField } from '@mui/material'
import React from 'react'

const TextFieldComponent = (props) => {
    const { className, name,label,checkValidation,register,watch,errors,disable, ...rest } = props;

    return (
        <TextField
            {...rest}
            name={name}
            label={label}
            placeholder={label}
            {...register(name)}
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            fullWidth
            disabled={disable}
            error={!!errors[name]} 
            helperText={errors[name]?.message}
            // required
            
        />
    )
}

export default TextFieldComponent