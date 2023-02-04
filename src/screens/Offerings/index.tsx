import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, ImageBackground, View } from "react-native";

import Kitchen from "../../assets/kitchen.png";
import { ItemList } from "../../components/ItemList";
import { RoutesOfferStack } from "../../routes/types";
import { api } from "../../services/api";

import { styles } from "./styles";
import type { OfferingProps, ResponseProps } from "./types";

export const Offerings = () => {
  const [data, setData] = useState<OfferingProps[]>([]);
  const { navigate } = useNavigation<NavigationProp<RoutesOfferStack>>()

  const getOfferings = async () => {
    try {
      const response = await api.get<ResponseProps>('/Offerings?order=name');
      setData(response.data.results);
    } catch(err) {
      console.log(err)
    }
  };

  const goToDetails = (offer: OfferingProps) => {
    navigate('offerDetails', {
      offer,
    })
  };

  useEffect(() => {
    getOfferings();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={Kitchen}>
        {data.length === 0 ? (
          <View style={{ height: '100%' }} />
        ) : (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            endFillColor="#ffffff"
            style={styles.offerList}
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