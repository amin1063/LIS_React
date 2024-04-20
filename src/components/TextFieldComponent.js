import { TextField } from '@mui/material'
import React from 'react'

const TextFieldComponent = (props) => {
    const { className, name,label,checkValidation,register,watch,errors, ...rest } = props

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
            // error={!!errors[name]} 
            // helperText={errors[name]?.message || ''}
            required
            
        />
    )
}

export default TextFieldComponent