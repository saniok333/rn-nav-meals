import { Text } from 'react-native';

const MealDetailsScreen = ({ route }) => {
  const {
    params: { mealId },
  } = route;
  return <Text>MealDetailsScreen - {mealId}</Text>;
};

export default MealDetailsScreen;
