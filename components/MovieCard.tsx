import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard = ({id, poster_path, title, vote_average, release_date}: Movie) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity style={{width: '30%'}}>
                <Image
                    source={{
                        uri: poster_path? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : 'https://placholder.co/600x400/1a1a1a/ffffff.png'
                    }}
                    resizeMode='cover'
                    style={{width: '100%', borderRadius: 10, height: 150}}
                />
                <Text style={{fontWeight: 'bold', color: 'white'}} numberOfLines={1}>{title}</Text>
                
                <View style={{flexDirection: 'row', alignItems: 'center', columnGap:'0.25rem'}}>
                    <Image source={icons.star} />
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                        {(vote_average/2).toFixed(1)}
                    </Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard

const styles = StyleSheet.create({})