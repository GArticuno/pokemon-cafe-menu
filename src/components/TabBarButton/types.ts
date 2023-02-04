import type { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

export type TabBarButtonProps = {
  zIndex: number;
  top?: number;
  isMiddle?: boolean; 
} & BottomTabBarButtonProps;