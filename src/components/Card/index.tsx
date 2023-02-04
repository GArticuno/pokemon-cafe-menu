import { Image, View } from "react-native";

import BorderTop from "../../assets/border-top.png";
import BorderBottom from "../../assets/border-bottom.png";

import { styles } from "./styles";
import { CardProps } from "./types";

export const Card = ({ children, style }: CardProps) => (
  <View style={styles.container}>
    <Image source={BorderTop} style={styles.image} resizeMode="contain" />
    <View style={style}>
      {children}
    </View>
    <Image source={BorderBottom} style={styles.image} resizeMode="contain" />
  </View>
);