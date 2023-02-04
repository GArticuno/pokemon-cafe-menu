import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    paddingTop: 30,
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
    width: 45,
    height: 45,
    backgroundColor: '#FFEEDE',
    borderRadius: 100,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 2,
    shadowColor: "#000000",
    shadowOpacity: 1,
  },
  chefImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  card: {
    alignItems: 'center',
  },
  offerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  offerImage: {
    width: 75,
    height: 75,
    marginHorizontal: 8,
  },
});