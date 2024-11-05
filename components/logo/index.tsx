import { theme } from "@/global/theme";
import { Image, Text, View } from "react-native";

export default function Logo(){
    return(
        
        <View style={{alignItems:'center',zIndex: 1}}>
            <View style={{flexDirection:'row', alignItems:'center', gap:12, marginTop:60}}>
                <Image
                    source={require("@/assets/adds/Barbell.png")}
                />
                <Text style={{fontSize:theme.fontSizes.xxl, fontFamily:theme.fonts.heading, color:'#fff', }}>Ignite Gym</Text>
            </View>

            <Text style={{color:'#fff', }}>Treine sua mente e seu corpo</Text>

        </View>
    )
}