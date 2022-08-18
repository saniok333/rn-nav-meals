import { Text, View, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route }) => {
  const {
    params: { categoryId },
  } = route;

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
