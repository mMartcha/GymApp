import Logo from "@/components/logo";
import { theme } from "@/global/theme";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import Input from "@/components/input";
import PressableBtn from "@/components/pressable";
import { router } from "expo-router";

export default function SignIn(){
    return(
        <View style={{flex:1, backgroundColor:theme.colors.gray500, paddingHorizontal:20, }}>

            <Logo/>
            <Image
                source={require('@/assets/adds/background.png')}
                resizeMode="cover"
                style={{position:"absolute"}}
            />
            <View style={{bottom:10}}>
                <View style={styles.middleTextView}>
                    <Text style={styles.middleText}>Acesse sua conta</Text>
                </View>

                <View style={styles.inputView}>
                    <Input
                        placeHolder="E-mail"
                        keyboardType="email-address"
                    />
                    <Input
                        placeHolder="Senha"
                        secureTextEntry
                    />
                </View>

                <View style={styles.pressableView}>
                    <PressableBtn
                        butnTitle="Acessar"
                        bgColor={theme.colors.green700}
                        textColor="#fff"
                        borderRad={6}
                    />
                </View>
            </View>

            <View style={styles.lowerPressableView}>
                <Text style={styles.lowerPressableViewText}>Ainda não tem acesso?</Text>
                <PressableBtn
                    butnTitle="Criar conta"
                    textColor={theme.colors.green700}
                    borderColor={theme.colors.green700}
                    borderWidth={1}
                    borderRad={6}
                    onPress={() => router.navigate('/(stack)/signUp')}
                />
            </View>


        </View>
    )
}