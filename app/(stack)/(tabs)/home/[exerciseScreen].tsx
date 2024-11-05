import { router, useLocalSearchParams } from "expo-router";
import { Image, Pressable, StatusBar, Text, View } from "react-native";
import { styles } from "./styles";
import { theme } from "@/global/theme";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext, useEffect } from "react";
import { ExerciseType, GymContext } from "@/context/GymContext";
import PressableBtn from "@/components/pressable";

export default function ExerciseScreen(){

    const {exerciseScreen} = useLocalSearchParams()

    const {selectedGroup, setSubmit, submit, allExercises} = useContext(GymContext)

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "America/Sao_Paulo" 
        });
      };
    
      const currentTime = getCurrentTime(); 
      
    
        const groupToUse = allExercises.filter((item) => item.group === selectedGroup)

        console.log(groupToUse);

        const imgObject = groupToUse?.find(item => item.title === exerciseScreen)
        
        function teste(){
            setSubmit([...submit,{
                Exercicio: exerciseScreen,
                GrupoMuscular: selectedGroup,
                horario: currentTime
                }])
            router.back()

            }
            // console.log(submit)

    return(

        <View style={{flex:1, backgroundColor:'black'}}>

            <View style={{paddingHorizontal:20, paddingTop:32, height:120, backgroundColor:theme.colors.gray600, gap:12,}}>
                <StatusBar barStyle={"light-content"}/>

                    <Pressable onPress={router.back}>
                        <AntDesign name="arrowleft" size={26} color={theme.colors.green500} />
                    </Pressable>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{color:'#fff', fontSize:theme.fontSizes.xl, fontFamily:theme.fonts.heading}}>{exerciseScreen}</Text>
                    <Text style={{color:theme.colors.gray200, fontSize:theme.fontSizes.md, textTransform:"capitalize"}}>{selectedGroup}</Text>
                </View>
            </View>

            <Image
                source={imgObject?.image}
                style={{height:340, width:340, alignSelf:'center', marginTop:32}}
            />

            <View style={{width:340, height:140, backgroundColor:theme.colors.gray500, borderRadius:8, alignSelf:'center', justifyContent:"space-evenly", marginTop:12}}>
                
                <View style={{flexDirection:'row', justifyContent:'space-evenly',}}>

                    <View style={{flexDirection:'row', alignItems:'center', gap:4}}>
                        <Image source={require('@/assets/adds/dumbell.png')}/>
                        <Text style={{color:theme.colors.gray200, fontSize:theme.fontSizes.md}}>3 séries</Text>
                    </View>

                    <View style={{flexDirection:'row', alignItems:'center', gap:4}}>
                        <AntDesign name="retweet" size={24} color={theme.colors.green700} />
                        <Text style={{color:theme.colors.gray200, fontSize:theme.fontSizes.md}}>12 repetições</Text>
                    </View>

                </View>
                    

                <View style={{alignSelf:'center'}}>
                    <PressableBtn
                        bgColor={theme.colors.green700}
                        width={310}
                        borderRad={6}
                        butnTitle="Marcar como realizado"
                        textColor={'#fff'}
                        fontSize={ theme.fontSizes.md}
                        onPress={() => teste()}
                    />
                </View>
            </View>
            
        </View>
    )
}