import { ColorValue, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type Props = PressableProps & {
    butnTitle?: string
    textColor?: string
    bgColor?: ColorValue | undefined
    fontSize?: number
    borderRad?: number
    borderColor?: ColorValue
    borderWidth?: number
    width?: number
}

export default function PressableBtn({width, butnTitle, textColor, bgColor, fontSize, borderRad, borderColor, borderWidth, onPress }: Props){
    return(
        <Pressable style={[styles.container, {backgroundColor: bgColor, borderRadius:borderRad, borderColor:borderColor, borderWidth:borderWidth, width:width}]}
            onPress={onPress}
        > 
            <Text style={[styles.pressableText,{color:textColor, fontSize:fontSize}]}>{butnTitle}</Text>
        </Pressable>
    )
}