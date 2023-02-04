import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";

const Routes = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
};

export default Routes;