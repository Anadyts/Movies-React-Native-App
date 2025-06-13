import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useFetch from '@/services/useFetch'
import { fetchMoviesDetails } from '@/services/api'
import { useLocalSearchParams } from 'expo-router'
import { icons } from '@/constants/icons'

interface MovieInfoProps{
    label?: string;
    value?: string |  number | null;
}

const MovieInfo = ({label, value}: MovieInfoProps) => (
    <View  style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginTop: 10,
    }}>
        <Text style={{
            color:'rgb(204, 204, 204)'
        }}>{label}</Text>
        <Text style={{
            color:'rgb(204, 204, 204)'
        }}>{value}</Text>

    </View>
)
const MovieDetail = () => {
    const { id } = useLocalSearchParams()
    const {data: movie, loading} = useFetch(() => fetchMoviesDetails(id as string))
    return (
        <View style={{backgroundColor:'hsl(266, 100.00%, 7.30%)', flex:1}}>
            <ScrollView contentContainerStyle={{paddingBottom: 80}}>
                <View>
                    <Image source={{uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`}}
                        style={{
                            width: '100%',
                            height: 400,
                            borderRadius: 10,
                            

                        }}
                        resizeMode='stretch'
                    />
                </View>

                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start', 
                        justifyContent: 'center', 
                        marginTop: 10, 
                        paddingHorizontal: 10
                    }}
                >
                    <Text style={{color:'white', fontWeight:'bold', fontSize:17}}>{movie?.title}</Text>
                    <Text style={{color:'rgb(204, 204, 204)', marginTop:10}}>{movie?.release_date?.split('-')[0]}{' '} 
                        <Text style={{ color:'rgb(204, 204, 204)'}}> {movie?.runtime}m </Text>
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'rgb(54, 27, 72)',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderRadius: 10,
                        gap: 10,
                        marginTop: 10,
                    }}>
                        <Image source={icons.star} style={{}}/>
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold',
                        }}>
                            {movie?.vote_average.toFixed(1)}/10
                            ({movie?.vote_count} votes)
                        </Text>
                        
                    </View>
                    <MovieInfo label="Overview" value={movie?.overview}/>
                    <MovieInfo label="Genres" value={movie?.genres?.map((g) => g.name).join(' - ') || 'N/A'}/>
                    <View style={{flexDirection: 'row' , gap:50}}>
                        <MovieInfo label="Budget" value={`$${(movie?.budget || 'N/A') / 1_000_000} million`}/>
                        <MovieInfo label="Revenue" value={`$${(movie?.revenue || 'N/A') / 1_000_000} million`}/>
                    </View>
                    <MovieInfo label="Production Companies" value={movie?.production_companies.map((c => c.name)).join(' - ')}/>

                </View>
            </ScrollView>
        </View>
    )
}

export default MovieDetail

const styles = StyleSheet.create({})