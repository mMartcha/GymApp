import { Text, View } from "react-native";
import { styles } from "./styles";
import { theme } from "@/global/theme";
import { useContext } from "react";
import { GymContext } from "@/context/GymContext";

type Props ={
    GrupoMuscular: string
    Exercicio: string
    horario?: string
}


export default function HistoryCard({Exercicio,GrupoMuscular,horario}:Props){

    const {selectedGroup, setSelectedGroup, backExercises, setBackExercises, muscleGroups, setMuscleGroups, setSubmit, submit} = useContext(GymContext)


    return(
        <View style={styles.container}>
            <View style={{alignItems:"baseline", justifyContent:'center', gap:6}}>
                <Text style={{color:"#fff", fontFamily:theme.fonts.heading, fontSize:theme.fontSizes.md, textTransform:"capitalize"}}>{GrupoMuscular}</Text>
                <Text style={{color:'#fff',fontSize:theme.fontSizes.md}}>{Exercicio}</Text>
            </View>

            <View style={{justifyContent:"center"}}>
                <Text style={{color:theme.colors.gray200}}>{horario}</Text>
            </View>
        </View>
    )
}