import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler';
import AppNavigation from "./src/navigations/AppNavigation.jsx";

function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation/>
    </SafeAreaProvider>
  )
}

export default App;
