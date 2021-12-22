import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { COLORS } from './constants';

export default function Spinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={COLORS.lightGrey} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
  },
});
