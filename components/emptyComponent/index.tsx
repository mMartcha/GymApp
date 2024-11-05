import { theme } from "@/global/theme";
import { Text, View } from "react-native";

export default function EmptyComponent(){
    return(
        <View style={{alignItems:'center'}}>
            <Text style={{color:'#fff', fontSize:theme.fontSizes.md, fontFamily:theme.fonts.heading}}>A lista está vazia, adicione algo.</Text>
        </View>
    )
}