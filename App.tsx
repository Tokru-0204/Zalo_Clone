import { SafeAreaView, Text } from "react-native";
import StackNavigator from "./src/navigations/StackNavigator";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <StackNavigator />

    </SafeAreaView>
  );
};

export default App;
