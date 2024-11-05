import { Text, View } from "react-native";
import { styles } from "./styles";
import { theme } from "@/global/theme";

type Props ={
    title: string
}


export default function AltHeader({title}:Props){
    return(
        <View style={styles.container}>
            <Text style={{color:'#fff', fontFamily:theme.fonts.heading, fontSize:theme.fontSizes.md}}>{title}</Text>
        </View>
    )
}