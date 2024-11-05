import Input from "@/components/input";
import Logo from "@/components/logo";
import PressableBtn from "@/components/pressable";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { theme } from "@/global/theme";
import { router } from "expo-router";

export default function Create(){
    return(
        <View style={{flex:1, backgroundColor:theme.colors.gray500, paddingHorizontal:20, }}>

            <Logo/>
            <Image
                source={require('@/assets/adds/background.png')}
                resizeMode="cover"
                style={{position:"absolute"}}
            />
            <View style={{bottom:80}}>
                <View style={styles.middleTextView}>
                    <Text style={styles.middleText}>Crie sua conta</Text>
                </View>

                <View style={styles.inputView}>
                    <Input
                        placeHolder="Nome"
                    />
                    <Input
                        placeHolder="E-mail"
                    />
                    <Input
                        placeHolder="Senha"
                    />
                    <Input
                        placeHolder="Confirme a senha"
                    />
                </View>

                <View style={styles.pressableView}>
                    <PressableBtn
                        butnTitle="Criar e acessar"
                        bgColor={theme.colors.green700}
                        textColor="#fff"
                        borderRad={6}
                    />
                </View>
            </View>

            <View style={styles.lowerPressableView}>
                <PressableBtn
                    butnTitle="Voltar para o login"
                    textColor={theme.colors.green700}
                    borderColor={theme.colors.green700}
                    borderWidth={1}
                    borderRad={6}
                    onPress={() => router.navigate('/(stack)/sign')}
                />
            </View>


        </View>
    )
}