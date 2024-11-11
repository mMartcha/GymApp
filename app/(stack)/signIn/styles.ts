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
        top:200
    },
    inputView:{
        gap:16,
        top:220
        
    },
    pressableView:{
        top:260
    },
    lowerPressableView:{
        top:310,
        gap:12
    },
    lowerPressableViewText:{
        color:"#fff",
        alignSelf:'center'
    }
})