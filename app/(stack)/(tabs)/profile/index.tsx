import AltHeader from "@/components/altHeader";
import { useLocalSearchParams } from "expo-router";
import { Alert, Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Input from "@/components/input";
import { theme } from "@/global/theme";
import PressableBtn from "@/components/pressable";
import * as ImagePicker from 'expo-image-picker'
import { useContext, useState } from "react";
import { GymContext } from "@/context/GymContext";
import * as FileSystem from 'expo-file-system'


export default function Profile(){

    const {userPhoto,setUserPhoto} = useContext(GymContext)

    const {exerciseScreen} = useLocalSearchParams()

    
    async function handlePhotoSelect(){

        try{

            const profilePhoto = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality:1,
                aspect:[4,4],
                allowsEditing: true
            })
            
            if(profilePhoto.canceled){
                return
            }
            
            const photoUri = profilePhoto.assets[0].uri
            
            if(photoUri){
                const photoInfo = await FileSystem.getInfoAsync(photoUri) as {
                    size: number
                }
                
                if(photoInfo.size && photoInfo.size / 1024 / 1024 > 5){
                    return Alert.alert("Essa imagem é muito grande. Escolha uma de até 5MB")
                }
                
                console.log(photoInfo);
                
                setUserPhoto(photoUri)
            }
        } catch(error){
            console.log(error);
            
        }
    
        
    }
        return(
            <View style={styles.container}>
             <AltHeader
                title="Perfil"
                />
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: userPhoto}}
                    height={100}
                    width={100}
                    borderRadius={200}
                    
                />
                <Pressable onPress={ handlePhotoSelect}>
                    <Text style={{color:theme.colors.green500, fontFamily:theme.fonts.heading, fontSize:theme.fontSizes.md}}>Alterar foto</Text>
                </Pressable>

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