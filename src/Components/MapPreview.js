import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { API_MAPS_KEY } from '../Constants/database';

const MapPreview = props => {
    console.log('MAP PREVIEW', props.location)

    const mapPreviewUrl = props?.location ? `https://maps.googleapis.com/maps/api/staticmap?center=${props?.location.lat},${props?.location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${props?.location.lat},${props?.location.lng}&key=${API_MAPS_KEY}`
        : '';

    return (
        <View style={{ ...styles.mapPreview, ...props.style }}>
            {props.location
                ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
                : (props.children)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapImage: {
        width: 300,
        height: '100%',
    },
})

export default MapPreview;