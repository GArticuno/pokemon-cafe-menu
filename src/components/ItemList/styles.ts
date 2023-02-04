import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 130,
    width: '50%',
    marginVertical: 8,
  },
  itemImage: {
    flex: 1,
    resizeMode: 'contain',
    width: 100,
  },
  itemText: {
    maxWidth: 150,
    textAlign: 'center',
  }
});