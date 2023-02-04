import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  listContainer: {
    alignItems: 'center',
  },
  offerList: {
    marginTop: 20,
    marginBottom: 30,
  },
  offer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 130,
    width: '50%',
    marginVertical: 8,
  },
  offerImage: {
    flex: 1,
    resizeMode: 'contain',
    width: 100,
  },
  offerText: {
    maxWidth: 150,
    textAlign: 'center',
  }
});