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
           

        </ImageBackground>
    )
}

export default ImageBackgoundBook