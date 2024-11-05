import { theme } from "@/global/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        height:80,
        backgroundColor:theme.colors.gray400,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:12,
        
        paddingLeft:6,
        paddingRight:6,
        
    },
    textView:{
        flex:1,
        gap:6
    }
})