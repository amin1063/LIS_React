import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const SelectFieldComponent = ({ menuOptions, name, label, register, watch, setValue }) => {

    return (
        <>
            {/* <FormControl fullWidth>
                <InputLabel id={name}>{label}</InputLabel>
                <Select
                    name={name}
                    labelId={name}
                    variant="outlined"
                    label={label}
                    value={watch(`${name}`)}
                    {...register(`${name}`)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                >
                    {menuOptions?.length && menuOptions.map((list) => {
                        return (
                            <MenuItem value={list.value}> {list.label} </MenuItem>
                        )
                    })}
                </Select>
            </FormControl> */}
            <Autocomplete
                name={name}
                disablePortal
                id="combo-box-demo"
                options={menuOptions}
                // sx={{ width: 300 }}
                defaultValue={watch(`${name}`)}
                {...register(`${name}`)}
                onChange={(event, value) => {
                    setValue(name, value?.value || 0)
                }}
                renderInput={(params) => <TextField {...params} label={label} />}
            />
        </>
    )
}

export default SelectFieldComponent