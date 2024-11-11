import {useForm, Controller} from 'react-hook-form'
import PressableBtn from "@/components/pressable";
import { Image, Text, View } from "react-native";
import { theme } from "@/global/theme";
import Input from "@/components/input";
import { router } from "expo-router";
import Logo from "@/components/logo";
import { styles } from "./styles";
import { useState } from "react";
import  * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


type FormDataProps = {
    name: string;
    email: string
    password: string
    password_confirm: string
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o e-mail').email('E-mail invalido'),
    password: yup.string().required('Informe a senha').min(6, 'A senha dever ter 6 digitos no mínimo'),
    password_confirm: yup.string().required('Confirme a senha')
    .oneOf([yup.ref("password"), ""], "A confirmação da senha não confere."),
})


export default function Create(){


    const {control, handleSubmit, formState:{errors}} = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)

    })

    function handleSignUp({email,name,password,password_confirm}: FormDataProps){
        console.log({email,name,password,password_confirm});

    }

    return(
        <View style={{flex:1, backgroundColor:theme.colors.gray500, paddingHorizontal:20, }}>

            <Logo/>

            <Image
                source={require('@/assets/adds/background.png')}
                resizeMode="cover"
                style={{position:"absolute"}}
            />
            <View style={{bottom:100}}>
                <View style={styles.middleTextView}>
                    <Text style={styles.middleText}>Crie sua conta</Text>
                </View>

                <View style={styles.inputView}>

                <View>
                    <Controller
                        control={control}
                        name='name'
                        render={({field:{onChange, value}}) => (
                        <Input
                        placeHolder="Nome"
                        onChangeText={onChange}
                        value={value}
                        />
                    )}
                    />
                            <Text style={{color:"red"}}>{errors.name?.message}</Text>
                </View>

                
                <View>
                    <Controller
                        control={control}
                        name='email'
                        render={({field:{onChange, value}}) => (
                            <Input
                            placeHolder="E-mail"
                            onChangeText={onChange}
                            value={value}
                            />
                        )}
                        />
                            <Text style={{color:"red"}}>{errors.email?.message}</Text>
                </View>
                        
                <View>

                    <Controller
                        control={control}
                        name='password'
                        render={({field:{onChange, value}}) => (
                            <Input
                            placeHolder="Senha"
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry/>
                            )}
                            />
                            <Text style={{color:"red"}}>{errors.password?.message}</Text>
                    </View>

                    <View>
                    
                    <Controller
                        control={control}
                        name='password_confirm'
                        render={({field:{onChange, value}}) => (
                            <Input
                            placeHolder="Confirme a senha"
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry
                            onSubmitEditing={handleSubmit(handleSignUp)}
                            returnKeyType="send"
                            />
                            )}
                        />
                            <Text style={{color:"red"}}>{errors.password_confirm?.message}</Text>
                    </View>                        
                    
                </View>

                <View style={styles.pressableView}>
                    <PressableBtn
                        butnTitle="Criar e acessar"
                        bgColor={theme.colors.green700}
                        textColor="#fff"
                        borderRad={6}
                        onPress={handleSubmit(handleSignUp)}
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
                    onPress={() => router.navigate('/(stack)/signIn')}
                />
            </View>

        </View>
    )
}