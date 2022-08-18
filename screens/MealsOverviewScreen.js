import { FlatList, View, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route }) => {
  const {
    params: { categoryId },
  } = route;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  const renderMealItem = (itemData) => {
    const {
      item: { title },
    } = itemData;

    return <MealItem title={title} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
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
