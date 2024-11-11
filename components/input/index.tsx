import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { theme } from "@/global/theme";

type Props = TextInputProps & {
    placeHolder: string
    errorMessage?: string | null
    isInvalid?: boolean
    borderColor?: string
}

export default function Input({placeHolder, keyboardType, secureTextEntry, value, onChangeText, errorMessage = null, isInvalid = false, borderColor}:Props){

    const invalid = !!errorMessage || isInvalid

    return(
        
            <TextInput 
            style={[styles.container,{color:"#fff", borderColor: borderColor }]}
            cursorColor={'#fff'}
            placeholder={placeHolder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={theme.colors.gray300}
            onChangeText={onChangeText}
            value={value}

            />
    )
}