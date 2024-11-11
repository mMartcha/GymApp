import { theme } from "@/global/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    middleText:{
        color:'#fff',
        fontFamily:theme.fonts.heading,
        fontSize: theme.fontSizes.xl
    },
    middleTextView:{
        alignItems:'center',
        justifyContent:'center',
        top:140
    },
    inputView:{
        gap:16,
        top:180
        
    },
    pressableView:{
        top:200
    },
    lowerPressableView:{
        top:140,
    },
    lowerPressableViewText:{
        color:"#fff",
        alignSelf:'center'
    }
})