import { Image, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";
import { theme } from "@/global/theme";

export default function TabHeader(){
    return(
        <View style={styles.container}>
            <Image
                source={{uri:"https://media.licdn.com/dms/image/v2/D5603AQHJvThaubWfqg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709226276317?e=1736380800&v=beta&t=T3W2ohhcmujS2WUT3QLAXCichDH1SxIZ3NSQHBaiU8g"}}
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