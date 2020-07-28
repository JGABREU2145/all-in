import React from 'react';
import Button from '@material-ui/core/Button';

const Buttons = (props) => {
    return (
    <Button onClick = {props.getType()} >{props.type}</Button>
    )
}

export default Buttons;