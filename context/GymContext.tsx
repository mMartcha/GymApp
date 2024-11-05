import { createContext, ReactNode, useState } from "react";
import { ImageSourcePropType } from "react-native";


type GymContextProviderProps ={
    children: ReactNode
}

type GymContextProps = {
    selectedGroup: string
    setSelectedGroup: React.Dispatch<React.SetStateAction<string>>
    muscleGroups:string[]
    setMuscleGroups:React.Dispatch<React.SetStateAction<string[]>>
    submit: SubmitExercise[]
    setSubmit: React.Dispatch<React.SetStateAction<SubmitExercise[]>>
    allExercises: ExerciseType[]
    setAllExercises: React.Dispatch<React.SetStateAction<ExerciseType[]>>
    // backExercises:ExerciseType[]
    // setBackExercises:React.Dispatch<React.SetStateAction<ExerciseType[]>>
    // bicepsExercises: ExerciseType[]
    // setBicepsExercises: React.Dispatch<React.SetStateAction<ExerciseType[]>>
    // tricepsExercises: ExerciseType[]
    // setTricepsExercises: React.Dispatch<React.SetStateAction<ExerciseType[]>>
    // shoulderExercises: ExerciseType[]
    // setShoulderExercises: React.Dispatch<React.SetStateAction<ExerciseType[]>>
}

 export type ExerciseType ={
    id: string
    title: string
    subTitle: string
    image: ImageSourcePropType
    group: string 
}

export type SubmitExercise ={
    GrupoMuscular: string
    Exercicio: string | string[]
    horario?: string
}

export const GymContext = createContext({} as GymContextProps)

export function GymContextProvider ({children}: GymContextProviderProps){

    const data:ExerciseType[] = [
        {
            id:'1',
            title:"Puxada frontal",
            subTitle:'3 séries x 12 repetições',
            image: require('@/assets/adds/PuxadaFrontal.png'),
            group: 'Costas'
        
           },
           {
            id:'2',
            title:"Remada curvada",
            subTitle:'3 séries x 12 repetições',
            image: require('@/assets/adds/RemadaCurvada.png'),
            group: 'Costas'

           },
           {
            id:'3',
            title:"Remada unilateral",
            subTitle:'3 séries x 12 repetições',
            image: require('@/assets/adds/RemadaUnilateral.png'),
            group: 'Costas'

           },
           {
            id:'4',
            title:"Levantamento terra",
            subTitle:'3 séries x 12 repetições',
            image:require('@/assets/adds/LevantamentoTerra.png'),
            group: 'Costas'

        },
        {
            id:'5',
            title:"Rosca Direta",
            subTitle:'3 séries x 12 repetições',
            image: require('@/assets/adds/RoscaDireta.png'),
            group: 'Bíceps'
        
           },
           {
            id:'6',
            title:"Banco Scott",
            subTitle:'3 séries x 12 repetições',
            image: require('@/assets/adds/BancoScott.png'),
            group: 'Bíceps'
   
           },
           {
            id:'7',
            title:"Triceps Polia",
            subTitle:'3 séries x 12 repetições',
            image: require('@/assets/adds/TricepsPolia.png'),
            group: 'Tríceps'
        
           },
           {
            id:'',
            title:"Elevação Lateral",
            subTitle:'3 séries x 12 repetições',
            image: require('@/assets/adds/ElevacaoLateral.png'),
            group: 'Ombro'
        
           }
    ]

    const [selectedGroup, setSelectedGroup] = useState("Costas")

    const [muscleGroups, setMuscleGroups] = useState(["Costas","Bíceps","Tríceps","Ombro"])

    const [allExercises, setAllExercises] = useState(data)
    
    const [submit, setSubmit] = useState<SubmitExercise[]>([])
    

    return(
        <GymContext.Provider value={{
            selectedGroup,setSelectedGroup,
            muscleGroups,setMuscleGroups,
            submit, setSubmit,
            allExercises, setAllExercises
        }}>
            {children}
        </GymContext.Provider>
    )
}
            // const [backExercises, setBackExercises] = useState<ExerciseType[]>([
            //        {
            //         id:'1',
            //         title:"Puxada frontal",
            //         subTitle:'3 séries x 12 repetições',
            //         image: require('@/assets/adds/PuxadaFrontal.png'),
            //         group: 'Costas'
                
            //        },
            //        {
            //         id:'2',
            //         title:"Remada curvada",
            //         subTitle:'3 séries x 12 repetições',
            //         image: require('@/assets/adds/RemadaCurvada.png'),
            //         group: 'Costas'
        
            //        },
            //        {
            //         id:'3',
            //         title:"Remada unilateral",
            //         subTitle:'3 séries x 12 repetições',
            //         image: require('@/assets/adds/RemadaUnilateral.png'),
            //         group: 'Costas'
        
            //        },
            //        {
            //         id:'4',
            //         title:"Levantamento terra",
            //         subTitle:'3 séries x 12 repetições',
            //         image:require('@/assets/adds/LevantamentoTerra.png'),
            //         group: 'Costas'
        
            //     }   
            // ])
            // const [bicepsExercises, setBicepsExercises] = useState<ExerciseType[]>([
            //     {
            //      id:'1',
            //      title:"Rosca Direta",
            //      subTitle:'3 séries x 12 repetições',
            //      image: require('@/assets/adds/RoscaDireta.png'),
            //      group: 'Bíceps'
             
            //     },
            //     {
            //      id:'2',
            //      title:"Banco Scott",
            //      subTitle:'3 séries x 12 repetições',
            //      image: require('@/assets/adds/BancoScott.png'),
            //      group: 'Bíceps'
        
            //     }
            // ])
            // const [tricepsExercises, setTricepsExercises] = useState<ExerciseType[]>([
            //     {
            //      id:'1',
            //      title:"Triceps Polia",
            //      subTitle:'3 séries x 12 repetições',
            //      image: require('@/assets/adds/TricepsPolia.png'),
            //      group: 'Tríceps'
             
            //     },
               
            // ])
            // const [shoulderExercises, setShoulderExercises] = useState<ExerciseType[]>([
            //     {
            //      id:'1',
            //      title:"Elevação Lateral",
            //      subTitle:'3 séries x 12 repetições',
            //      image: require('@/assets/adds/ElevacaoLateral.png'),
            //      group: 'Ombro'
             
            //     }
               
            // ])