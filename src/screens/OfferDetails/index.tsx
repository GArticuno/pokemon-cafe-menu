import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, TouchableOpacity, View } from "react-native";

import Kitchen from "../../assets/kitchen.png";
import { Card } from '../../components/Card';
import { Typography } from '../../components/Typography';
import type { RoutesOfferStack } from "../../routes/types";
import { api } from '../../services/api';
import { offerCategory } from '../../utils/offerCategory';
import type { ChefProps } from '../Chefs/types';

import { styles } from "./styles";

export const OfferDetails = () => {
  const { goBack } = useNavigation<NavigationProp<RoutesOfferStack>>();
  const { offer } = useRoute<RouteProp<RoutesOfferStack, "offerDetails">>().params;
  const category = offerCategory(offer.category);
  const [chef, setChef] = useState<ChefProps | null>(null);
  const getChef = useCallback(async () => {
    try {
      const response = await api.get<ChefProps>(`/Chefs/${offer.chef_id.objectId}`);
      setChef(response.data);
    } catch(err: any) {
      console.log(err.response);
    }
  }, [offer]);

  useEffect(() => {
    getChef();
  }, [getChef]);

  return (
    <View style={styles.container}>
      <ImageBackground source={Kitchen} style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center' }}
        >
          <TouchableOpacity style={styles.back} onPress={goBack} activeOpacity={0.3}>
            <Ionicons name="arrow-back" size={30} color="#BD7E5B" />
          </TouchableOpacity>
          <Image source={{uri: offer.image.url }} style={styles.offerImage} />
          <Card style={styles.card}>
            <Image source={category.icon} style={styles.categoryIcon} />
            <Typography variant='secondary' fontSize={20} style={styles.offerName}>
              {offer.name}
            </Typography>
            <View style={styles.category}>
              <Typography variant='secondary' fontSize={16}>Category:</Typography>
              <Typography
                variant='tertiary'
                color='#BD7E5B'
                fontSize={20}
                style={styles.categoryName}
              >
                {category.name}
              </Typography>
            </View>
            <Typography variant='quaternary' fontSize={16} color='#BD7E5B' style={styles.description}>
              {offer.description}
            </Typography>
            <Image source={{ uri: chef?.image.url }} style={styles.chefImage} />
          </Card>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};