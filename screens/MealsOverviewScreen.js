import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

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

  return <MealsList displayedMeals={displayedMeals} />;
};

export default MealsOverviewScreen;
