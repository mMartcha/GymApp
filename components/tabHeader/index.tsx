import { Image, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";
import { theme } from "@/global/theme";
import { useContext } from "react";
import { GymContext } from "@/context/GymContext";

export default function TabHeader(){

    const {userPhoto,setUserPhoto} = useContext(GymContext)


    return(
        <View style={styles.container}>
            <Image
                source={{uri:userPhoto}}
                height={50}
                width={50}
                borderRadius={100}
            />          
            <View style={{ flex:1, marginLeft:6}}>
                <Text style={{color:'#fff', fontSize:theme.fontSizes.md}}>Olá,</Text>
                <Text style={{color:'#fff', fontFamily:theme.fonts.heading, fontSize:theme.fontSizes.md}}>Marcello Stefenon Filho</Text>
            </View>
        
            <View style={{}}>
                <Ionicons name="exit-outline" size={32} color="#fff"  />
            </View>
        </View>
    )
}