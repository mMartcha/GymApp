import { Text, View } from "react-native";
import { styles } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from "@/global/theme";

export default function HistoryHeader(){

    return(

        <View style={styles.container}>
            <AntDesign name="arrowleft" size={24} color={theme.colors.green500} />
            <View>
                <Text></Text>
                <Text></Text>
            </View>
        </View>

    )
}