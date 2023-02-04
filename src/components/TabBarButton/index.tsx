import { Image, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import ButtonTab from "../../assets/button-tab.png";
import ButtonTabMiddle from "../../assets/button-tab-middle.png";
import { styles } from "./styles";
import { TabBarButtonProps } from "./types";

export const TabBarButton = ({ zIndex, top, isMiddle, ...props }: TabBarButtonProps) => {
  const { children, onPress } = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ ...styles.container, zIndex }}>
        <Image
          source={isMiddle ? ButtonTabMiddle : ButtonTab}
          style={{
            ...styles.image,
            top,
            left: isMiddle ? -20 : -10, 
          }}
        />
        <View style={styles.label}>
          {children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};