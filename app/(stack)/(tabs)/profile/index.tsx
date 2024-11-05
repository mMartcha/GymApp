import AltHeader from "@/components/altHeader";
import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import Input from "@/components/input";
import { theme } from "@/global/theme";
import PressableBtn from "@/components/pressable";

export default function Profile(){

    const {exerciseScreen} = useLocalSearchParams()

    
    return(
        <View style={styles.container}>
             <AltHeader
                title="Perfil"
            />
            <View style={styles.imageContainer}>
                <Image
                    source={{uri:"https://media.licdn.com/dms/image/v2/D5603AQHJvThaubWfqg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709226276317?e=1736380800&v=beta&t=T3W2ohhcmujS2WUT3QLAXCichDH1SxIZ3NSQHBaiU8g"}}
                    height={100}
                    width={100}
                    borderRadius={200}
                    
                />
            </View>

            <View style={styles.inputContainer}>
                
                <View style={{gap:10,paddingBottom:40}}>
                    <Input
                        placeHolder="Nome"
                    />
                    <Input
                        placeHolder="Email"
                    />
                </View>

                <Text style={{color:theme.colors.gray200, paddingBottom:16}}>Alterar senha</Text>

                <View style={{gap:10, paddingBottom:40}}>
                    <Input
                        placeHolder="Senha antiga"
                    />
                    <Input
                        placeHolder="Nova senha"
                    />
                </View>

                <PressableBtn
                    bgColor={theme.colors.green500}
                    borderRad={6}
                    textColor="#fff"
                    fontSize={theme.fontSizes.md}
                    butnTitle="Atualizar"
                />
            </View>


        </View>
    )
}