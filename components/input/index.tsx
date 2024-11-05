import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { theme } from "@/global/theme";

type Props = TextInputProps & {
    placeHolder: string
}

export default function Input({placeHolder, keyboardType, secureTextEntry}:Props){
    return(
        <TextInput style={[styles.container,{color:"#fff"}]}
            cursorColor={'#fff'}
            placeholder={placeHolder}
            keyboardType={keyboardType}
            secureTextEntry
            placeholderTextColor={theme.colors.gray300}
            
        />
    )
}