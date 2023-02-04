import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    marginBottom: 30,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
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
  card: {
    position: 'relative',
    paddingHorizontal: 20,
  },
  offerImage: {
    flex: 1,
    marginTop: 30,
    resizeMode: 'contain',
    width: 150,
    height: 150,
  },
  categoryIcon: {
    position: 'absolute',
    resizeMode: 'contain',
    right: 10,
  },
  offerName: {
    marginVertical: 25,
    zIndex: 2,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryName: {
    marginLeft: 16,
  },
  description: {
    marginTop: 16,
    width: '100%',
  },
  chefImage: {
    marginTop: 16,
    height: 100,
    resizeMode: 'contain',
  },
});