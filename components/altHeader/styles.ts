import { theme } from "@/global/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container:{
        flexDirection:'row',
        alignItems:'center',
        height:90,
        backgroundColor:theme.colors.gray600,
        paddingHorizontal:20,
        justifyContent:'center'
    }
})