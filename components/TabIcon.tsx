import { Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'

interface TabIconProps {
    focused: boolean,
    icon: ImageSourcePropType,
    title: string,

}

const TabIcon = (props: TabIconProps) => {
        if(props.focused){
            return (
                <>
                    <ImageBackground source={images.highlight} style={styles.tabImage} resizeMode="cover">
                        <Image source={props.icon} style={styles.imageIcon} tintColor='#000000' />
                        <Text style={{fontWeight: 'bold'}}>{props.title}</Text>
                    </ImageBackground>
                </>
            )
        }
    
        return (
            <>
                <View style={styles.notFocused}>
                    <Image source={props.icon} style={styles.imageIcon} tintColor='#8fffff'/>
                </View>
            </>
        )
}
export default TabIcon

const styles = StyleSheet.create({
    tabImage: {
        minWidth: 105,
        minHeight: 60,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 50,
        flexDirection: 'row',
        
    
    },

    notFocused:{
        minWidth: 112,
        minHeight: 50,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    imageIcon: {
        marginRight: 10,
    }
})