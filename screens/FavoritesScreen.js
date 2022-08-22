import { StyleSheet, View, Text } from 'react-native';
import { useContext } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

const FavoritesScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext);

  const displayedMeals = MEALS.filter((meal) =>
    favoriteMealsContext.ids.includes(meal.id)
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList displayedMeals={displayedMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
