import { TextField } from '@mui/material'
import React from 'react'

const TextFieldComponent = (props) => {
    const { className, name,label,checkValidation,register,watch, ...rest } = props

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
            // required
        />
    )
}

export default TextFieldComponent