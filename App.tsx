import { StatusBar, View } from "react-native";
import { Participantes } from "./src/Components/Participantes";
import { Home } from "./src/pages/Home";
import { styles } from "./src/pages/Home/styles";
 

export default function App() {
  return (
    <View style={styles.container}>
       <StatusBar barStyle="light-content" backgroundColor="#fff"    />
      <Home />
      
    </View>
  );
}




