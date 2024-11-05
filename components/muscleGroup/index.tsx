import { Pressable, PressableProps, Text, View } from "react-native";
import { styles } from "./styles";
import { theme } from "@/global/theme";

type Props = PressableProps & {
    muscleGroup: string
    borderWidth?: number
    borderColor?: string
    color?: string
}

export default function MuscleGroup({borderWidth, color, borderColor, muscleGroup, onPress}:Props){
    return(

        <Pressable style={[styles.container,{backgroundColor:theme.colors.gray600,borderWidth:borderWidth, borderColor:borderColor}]} onPress={onPress}>
            <Text style={{fontFamily:theme.fonts.body, color:color, textTransform:"uppercase" }}>{muscleGroup}</Text>
        </Pressable>
    )
}