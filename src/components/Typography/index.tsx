import { Text } from "react-native";
import { styles } from "./styles";
import { TypographyProps } from "./types";

export const Typography = ({
  children,
  variant,
  fontSize,
  color,
  ...props
}: TypographyProps) => (
  <Text
    {...props}
    style={[props.style, { ...styles[variant], fontSize, color }]}
  >
    {children}
  </Text>
);