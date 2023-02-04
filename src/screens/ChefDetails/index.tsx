import { useCallback, useEffect, useState } from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import Background from "../../assets/background.png";
import { Card } from "../../components/Card";
import { Typography } from "../../components/Typography";
import type { RoutesChefStack } from "../../routes/types";
import { api } from "../../services/api";
import type { OfferingProps, ResponseProps } from "../Offerings/types";

import { styles } from "./styles";


export const ChefDetails = () => {
  const { goBack } = useNavigation<NavigationProp<RoutesChefStack>>();
  const { chef } = useRoute<RouteProp<RoutesChefStack, "chefDetails">>().params;

  const [offers, setOffers] = useState<OfferingProps[]>([]);
  const getOffers = useCallback(async () => {
    try {
      const response = await api.get<ResponseProps>(`/Offerings?where={"chef_id":{"__type":"Pointer","className":"Chefs","objectId":"${chef.objectId}"}}`);
      setOffers(response.data.results);
    } catch(err: any) {
      console.log(err.response);
    }
  }, [chef]);

  useEffect(() => {
    getOffers();
  }, [getOffers]);

  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.image}>
        <TouchableOpacity style={styles.back} onPress={goBack} activeOpacity={0.3}>
          <Ionicons name="arrow-back" size={30} color="#BD7E5B" />
        </TouchableOpacity>
        <Image source={{uri: chef.image.url }}  style={styles.chefImage} resizeMode="contain" />
        <Typography variant='primary' fontSize={36}>
          {chef.name}
        </Typography>
        <Card style={styles.card}>
          <Typography variant='secondary' fontSize={24}>
            Plates
          </Typography>
          <View style={styles.offerView}>
            {offers.map((offer) => (
              <Image
                source={{uri: offer.image.url }}
                key={offer.objectId}
                style={styles.offerImage}
                resizeMode="contain"
              />
            ))}
          </View>
        </Card>
      </ImageBackground>
    </View>
  );
};