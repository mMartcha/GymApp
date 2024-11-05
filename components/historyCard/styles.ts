import { theme } from "@/global/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:theme.colors.gray600,
        height:80,
        borderRadius:8, 
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:12
    }
})