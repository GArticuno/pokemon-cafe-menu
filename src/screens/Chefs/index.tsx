import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, ImageBackground, View } from "react-native";

import Background from "../../assets/background.png";
import { ItemList } from "../../components/ItemList";
import type { RoutesChefStack } from "../../routes/types";
import { api } from "../../services/api";

import { styles } from "./styles";
import type { ChefProps, ResponseProps } from "./types";

export const Chefs = () => {
  const { navigate } = useNavigation<NavigationProp<RoutesChefStack>>(); 
  const [data, setData] = useState<ChefProps[]>([]);

  const getChefs = async () => {
    try {
      const response = await api.get<ResponseProps>('/Chefs?order=name');
      setData(response.data.results);
    } catch(err: any) {
      console.log(err?.response)
    }
  };

  const goToDetails = (chef: ChefProps) => {
    navigate('chefDetails', {
      chef
    });
  };

  useEffect(() => {
    getChefs();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={Background}>
        {data.length === 0 ? (
          <View style={{ height: '100%' }} />
        ): (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            endFillColor="#ffffff"
            style={styles.chefList}
            keyExtractor={(item) => item.objectId}
            numColumns={2}
            renderItem={({ item }) => (
              <ItemList imageUrl={item.image.url} name={item.name} onPress={() => goToDetails(item)} />
            )}
          />
        )}
      </ImageBackground>
    </View>
  );
};