import Logo from "@/components/logo";
import { Text, View } from "react-native";
import { theme } from "@/global/theme";
import SignIn from "./(stack)/sign";
import Home from "./(stack)/(tabs)/home";

export default function App(){
    return(
        <View style={{flex:1, backgroundColor:theme.colors.gray400}}>
            <Home/>
            {/* <SignIn/> */}
            
        </View>
    )
}