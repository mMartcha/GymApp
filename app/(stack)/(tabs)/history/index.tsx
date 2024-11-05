import AltHeader from "@/components/altHeader";
import HistoryHeader from "@/components/historyHeader";
import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import HistoryCard from "@/components/historyCard";
import { useContext } from "react";
import { GymContext } from "@/context/GymContext";
import EmptyComponent from "@/components/emptyComponent";

export default function History(){

    const { submit } = useContext(GymContext)

    
    return(
        <View style={styles.container}>
            <AltHeader
                title="Histórico de Exercícios"
            />
            <View style={{paddingHorizontal:20, marginTop:60}}>
                <FlatList
                    ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                    data={submit}
                    renderItem={({item})=>(
                        <HistoryCard
                            Exercicio={item.Exercicio}
                            GrupoMuscular={item.GrupoMuscular}
                            horario={item.horario}
                            
                        />
                        
                    )} ListEmptyComponent={<EmptyComponent/>}
                />
            </View>
        </View>
    )
}