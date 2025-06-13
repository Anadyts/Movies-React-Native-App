import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props{
    placeholder: string;
    onPress?: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
}
const SearchBar = ({placeholder, onPress, value, onChangeText}: Props) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundClip: 'rgb(17, 0, 40)'}}>
            <Image source={icons.search} style={{}}/>
            <TextInput 
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#a8b5db"
                style={{flex: 1, marginLeft: 5, color: 'white', fontWeight: 'bold'}}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})