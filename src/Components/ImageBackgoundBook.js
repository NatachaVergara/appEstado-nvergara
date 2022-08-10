import React from 'react'
import { ImageBackground } from 'react-native'

const ImageBackgoundBook = (props) => {
    return (
        <ImageBackground
            {...props}
            style={props.style}
            source={props.source}
            resizeMode={props.resizeMode}
        >
           {props.children}

        </ImageBackground>
    )
}

export default ImageBackgoundBook