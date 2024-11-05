import { Image, ImageSourcePropType, Pressable, PressableProps, Text, View } from "react-native";
import { styles } from "./styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { theme } from "@/global/theme";

type Props = PressableProps & {
    title: string
    subTitle: string
    image: ImageSourcePropType 
}



export default function Exercise({title,subTitle, image, onPress}:Props){

   

    return(
        <Pressable style={styles.container} onPress={onPress}>
            <View style={{ height:60, width:60}}>
                <Image
                    source={(image)}
                    resizeMode="cover"
                    style={{height:65, width:65, borderRadius:8,  }}/>
            </View>

            <View style={styles.textView}>
                <Text style={{fontSize:theme.fontSizes.lg, fontFamily:theme.fonts.heading, color:'#fff'}}>{title}</Text>
                <Text style={{fontSize:theme.fontSizes.sm, color:theme.colors.gray100}}>{subTitle}</Text>
            </View>

            <MaterialIcons name="keyboard-arrow-right" size={32} color="grey"  />

        </Pressable>
    )
}