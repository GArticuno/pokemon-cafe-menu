import type { TextProps, TextStyle } from "react-native";

export type TypographyProps = {
  fontSize?: number;
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  color?: string;
} & TextProps;