import TabHeader from "@/components/tabHeader";
import { FlatList, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import MuscleGroup from "@/components/muscleGroup";
import Exercise from "@/components/exercise";
import { theme } from "@/global/theme";
import { useContext, useState } from "react";
import { ExerciseType, GymContext } from "@/context/GymContext";
import { router } from "expo-router";

export default function Home(){

    const {selectedGroup, setSelectedGroup, muscleGroups, setMuscleGroups,allExercises } = useContext(GymContext)


    function navigat(item:ExerciseType){
        router.navigate(`/(stack)/(tabs)/home/${item.title}`)
    }

    const groupToUse = allExercises.find((item) => item.group === selectedGroup)

    
    function set(item:string){
        setSelectedGroup(item)
    }

    const backExercises = allExercises.filter(item=> item.group === 'Costas' )
    const bicepsExercises = allExercises.filter(item=> item.group === 'Bíceps' )
    const tricepsExercises = allExercises.filter(item=> item.group === 'Tríceps' )
    const shoulderExercises = allExercises.filter(item=> item.group === 'Ombro' )


    return(
        <View style={styles.container}>

            <TabHeader/>

            <View style={styles.cardView}>
        
                <FlatList
                    ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
                    contentContainerStyle={{paddingRight:20}}
                    horizontal
                    data={muscleGroups}

                    renderItem={({item}) =>(
                        <MuscleGroup
                            muscleGroup={item}
                            onPress={() => set(item)}
                            borderColor={selectedGroup === item ? theme.colors.green500 : undefined}
                            color={selectedGroup === item ? theme.colors.green500 : theme.colors.gray200}
                            borderWidth={1}
                        />
                    )}
                />


            </View>
                <View style={{marginLeft:20, marginRight:20,marginBottom:12, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{fontFamily:theme.fonts.heading, fontSize:theme.fontSizes.md, color:theme.colors.gray200}}>Exercícios</Text>
                    <Pressable onPress={()=>console.log(selectedGroup)}>
                        <Text style={{color:'#fff'}}>{allExercises.filter(item => item.group === selectedGroup).length}</Text>
                    </Pressable>
                </View>


            <View style={styles.flatListView}>

                {selectedGroup === 'Costas' &&(
                    <FlatList
                    ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                    data={backExercises}
                    renderItem={({item}) =>(
                        <Exercise
                            title={item.title}
                            subTitle={item.subTitle}
                            image={item.image}
                            onPress={() => navigat(item)}
                        />
                    )}
                />
                )}

                {selectedGroup === 'Bíceps' &&(
                    <FlatList
                    ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                    data={bicepsExercises}
                    renderItem={({item}) =>(
                        <Exercise
                            title={item.title}
                            subTitle={item.subTitle}
                            image={item.image}
                            onPress={() => navigat(item)}
                        />
                    )}
                />
                )}
                {selectedGroup === 'Tríceps' &&(
                    <FlatList
                    ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                    data={tricepsExercises}
                    renderItem={({item}) =>(
                        <Exercise
                            title={item.title}
                            subTitle={item.subTitle}
                            image={item.image}
                            onPress={() => navigat(item)}
                        />
                    )}
                />
                )}
                {selectedGroup === 'Ombro' &&(
                    <FlatList
                    ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                    data={shoulderExercises}
                    renderItem={({item}) =>(
                        <Exercise
                            title={item.title}
                            subTitle={item.subTitle}
                            image={item.image}
                            onPress={() => navigat(item)}
                        />
                    )}
                />
                )}
                
            </View>
        </View>
    )
}