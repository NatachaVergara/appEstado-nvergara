
import { Button } from 'react-native-paper';
import React from 'react'

const ButtonModal = ({ styles, onClick,  btnText, disabled }) => {
    return (
        <Button style={styles} onPress={onClick} disabled={disabled}>
            { btnText}
        </Button>
    )
}

export default ButtonModal

