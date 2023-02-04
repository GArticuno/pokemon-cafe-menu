import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import * as Linking from 'expo-linking';

import Cafe from "../../assets/cafe.png";
import Meowth from "../../assets/meowth.png";
import Piplup from "../../assets/piplup.png";

import { Card } from "../../components/Card";
import { Typography } from "../../components/Typography";
import { styles } from "./styles";

export const Dev = () => {
  const goToGithub = async () => {
    await Linking.openURL('https://github.com/GArticuno');
  };

  const goToLinkedin = async () => {
    Linking.openURL('https://www.linkedin.com/in/mateus-rom%C3%A3o-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-557266165/');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Cafe} style={styles.image}>
          <Card style={styles.card}>
            <Typography
              variant="tertiary"
              fontSize={20}
              color="#A48466"
            >
              Dear user
            </Typography>
            <Typography
              variant="quaternary"
              fontSize={16}
              color="#A48466"
              style={{ marginTop: 10, textAlign: 'center' }}
            >
              I hope you like this app, the prototype was made by me at figma and all the art
               comes from the game "Pokémon Café ReMix", if you liked it please
                leave a star on Github.
            </Typography>
            <View style={styles.links}>
              <TouchableOpacity
                style={styles.link}
                activeOpacity={0.3}
                onPress={goToGithub}
              >
                <Image source={Meowth} style={{ height: 70}} resizeMode="contain" />
                <Typography
                  variant="tertiary"
                  fontSize={20}
                  color="#A48466"
                >
                  Github
                </Typography>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.link}
                activeOpacity={0.3}
                onPress={goToLinkedin}
              >
                <Image source={Piplup} style={{ height: 70}} resizeMode="contain" />
                <Typography
                  variant="tertiary"
                  fontSize={20}
                  color="#A48466"
                >
                  LinkedIn
                </Typography>
              </TouchableOpacity>
            </View>
          </Card>
      </ImageBackground>
    </View>
  );
};