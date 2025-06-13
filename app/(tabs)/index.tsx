import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { Link, useRouter} from "expo-router";
import { ScrollView, Text, View, Image, StyleSheet, ActivityIndicator, FlatList} from "react-native";

export default function Index() {
  const router = useRouter()

  const {data: movies, loading: moviesLoading, error: moviesError} = useFetch(() => fetchMovies({
    query: ''
  }))


  return (
    
      <View style={{backgroundColor: 'rgb(25, 0, 46)', flex:1}}>
        <Image source={images.bg} style={{position: 'absolute', width: '100%'}}/>

        
        <ScrollView style={{flex:1, paddingHorizontal: 20 }}>
          <Image source={icons.logo} style={{marginHorizontal: 'auto', marginTop: 70}}/>
          {moviesLoading 
          ? (
            <ActivityIndicator
              size='large'
              color='#0000ff'
              style={{marginTop: 40, alignSelf: 'center'}}
            />
          )
          : moviesError? <Text>Error: {moviesError?.message}</Text>
          : (
            <View style={{flex: 1, marginTop: 20 }}>
              <SearchBar onPress={() => router.push('/search')} placeholder="Search for a movies"/>
              
              <>
                <Text style={{fontWeight: 'bold', color:'white', marginTop:10}}>Latest Movies</Text>

                <FlatList
                  data={movies}
                  renderItem={({item}) => (
                    <MovieCard
                      {...item}
                    
                    />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={3}
                  columnWrapperStyle={{
                    justifyContent: 'flex-start',
                    gap: '20',
                    paddingRight: 5,
                    marginBottom: 10,
                  }}
                  style={{marginTop: 10, paddingBottom: 40}}
                />
              </>
            
            </View>

            
          )
          }
          
        </ScrollView>
      </View>
    
  );
}
