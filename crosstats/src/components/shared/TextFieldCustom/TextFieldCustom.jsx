import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const TextFieldCustom = props => {
    const color = props.color || 'white';
    const id = props.id || '';
    const label = props.label || '';
    const autoFocus = props.autoFocus || false;
    const type = props.type || 'text';

    const CssTextField = withStyles({
        root: {
            '& .MuiInputBase-input': {
                color
            },
            '& label.MuiInputLabel-root': {
                color,
                fontWeight: 'bold'
            },
            '& .MuiInput-underline:before': {
                borderBottomColor: color,
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: color,
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottomColor: color,
            },
        },
    })(TextField);

    return <CssTextField id={id} label={label} fullWidth={true} placeholder={'Jonh Doe'} autoFocus={autoFocus} type={type} />
};

export { TextFieldCustom };