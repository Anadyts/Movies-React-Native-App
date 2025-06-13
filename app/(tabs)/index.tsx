import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link, useRouter} from "expo-router";
import { ScrollView, Text, View, Image, StyleSheet} from "react-native";

export default function Index() {
  const router = useRouter()
  return (
    
      <View style={{backgroundColor: 'rgb(25, 0, 46)', flex:1}}>
        <Image source={images.bg} style={{position: 'absolute', width: '100%'}}/>

        
        <ScrollView style={{flex:1, paddingHorizontal: 20 }}>
          <Image source={icons.logo} style={{marginHorizontal: 'auto', marginTop: 70}}/>
          <View style={{flex: 1, marginTop: 20 }}>
            <SearchBar onPress={() => router.push('/search')} placeholder="Search for a movies"/>
          </View>
        </ScrollView>
      </View>
    
  );
}
