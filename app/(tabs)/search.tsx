import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import { fetchMovies } from '@/services/api'
import MovieCard from '@/components/MovieCard'
import useFetch from '@/services/useFetch'
import SearchBar from '@/components/SearchBar'

const search = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const {data: movies, loading: moviesLoading, error: moviesError, refetch: loadMovies, reset} = useFetch(() => 
        fetchMovies({query: searchQuery}))

    const handleSearch = (text: string) => {
        setSearchQuery(text)
    }

    useEffect(() => {
        const timeOut = setTimeout(async () => {
            if (searchQuery.trim()) {
                await loadMovies()
            } else {
                reset() 
            }
        }, 500);

        return () => clearTimeout(timeOut)
    }, [searchQuery])
    
    return (
        <View style={{backgroundColor: 'rgb(25, 0, 46)', flex:1}}>
            <Image source={images.bg} style={{position: 'absolute', width: '100%'}}/>
            
            <FlatList
                numColumns={3}
                data={movies}
                renderItem={({item}) => <MovieCard {...item}/>}
                keyExtractor={(item) => item.id.toString()}
                style={{paddingHorizontal: 10}}
                columnWrapperStyle={{
                    justifyContent: 'center',
                    gap: 20,
                    paddingRight: 5,
                    marginBottom: 10,
                }}

                contentContainerStyle={{paddingBottom:100}}
                ListHeaderComponent={
                    <>
                        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:40, alignItems: 'center'}}>
                            <Image source={icons.logo} style={{marginHorizontal: 'auto', marginTop: 30}}/>
                        </View>

                        <View style={{marginVertical:10}}>
                            <SearchBar placeholder='Search for a Movies' 
                                value={searchQuery}
                                onChangeText={(text: string) => handleSearch(text)}
                            />
                        </View>

                        {moviesLoading && <ActivityIndicator size='large' color='#0000ff' style={{marginVertical: 10}}/>}
                        {moviesError && (
                            <Text style={{color: 'red', paddingHorizontal:20, marginVertical:10}}>{moviesError.message}</Text>
                        )}
                        {!moviesLoading && !moviesError && typeof searchQuery === 'string' && searchQuery.trim() && movies?.length > 0 && (
                            <>
                                <Text style={{color: 'white', fontWeight: 'bold', marginBottom: 10}}> Search Results for {' '}
                                    <Text style={{color:'rgb(230, 121, 255)', fontWeight: 'bold'}}>{searchQuery}</Text>
                                </Text>
                                
                            </>
                        )}
                    </>
                }
            />
        </View>
    )
}

export default search

const styles = StyleSheet.create({})