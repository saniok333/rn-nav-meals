import { FlatList, View, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const MealsList = ({ displayedMeals }) => {
  const renderMealItem = (itemData) => {
    const {
      item: { id, title, imageUrl, duration, complexity, affordability },
    } = itemData;

    const mealItemProps = {
      id,
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

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
