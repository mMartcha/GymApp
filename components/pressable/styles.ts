import { theme } from "@/global/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        height:55,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center'
    },
    pressableText:{
        fontFamily:theme.fonts.heading
    }
})