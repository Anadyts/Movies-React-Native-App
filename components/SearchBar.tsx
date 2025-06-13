import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props{
    placeholder: string;
    onPress?: () => void;
}
const SearchBar = ({placeholder, onPress}: Props) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundClip: 'rgb(17, 0, 40)'}}>
            <Image source={icons.search} style={{}}/>
            <TextInput 
                onPress={onPress}
                placeholder={placeholder}
                value=''
                onChange={() => {}}
                placeholderTextColor="#a8b5db"
                style={{flex: 1, marginLeft: 5}}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})