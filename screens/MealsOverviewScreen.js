import { Text, View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = () => {
  const {
    params: { categoryId },
  } = useRoute();

  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen - {categoryId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
