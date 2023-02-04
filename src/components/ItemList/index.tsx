import { Image, TouchableOpacity } from "react-native";
import { Typography } from "../Typography";
import { styles } from "./styles";
import { ItemListProps } from "./types";

export const ItemList = ({ imageUrl, name, onPress }: ItemListProps) => (
  <TouchableOpacity style={styles.item} activeOpacity={0.3} onPress={onPress}>
    <Image source={{uri: imageUrl }} style={styles.itemImage} resizeMode="contain" />
    <Typography variant="primary" fontSize={20} style={styles.itemText}>{name}</Typography>
  </TouchableOpacity>
);