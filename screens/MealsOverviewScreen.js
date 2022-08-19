import { useLayoutEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

import { MEALS, CATEGORIES } from '../data/dummy-data';

const MealsOverviewScreen = ({ route, navigation }) => {
  const {
    params: { categoryId },
  } = route;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const { title: categoryTitle } = CATEGORIES.find(
      (category) => category.id === categoryId
    );

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const renderMealItem = (itemData) => {
    const {
      item: { title, imageUrl, duration, complexity, affordability },
    } = itemData;

    const mealItemProps = {
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
    };

    return <MealItem {...mealItemProps} />;
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
