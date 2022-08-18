import { FlatList, Text } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const {
      item: { title, color },
    } = itemData;

    const onPressHandler = () => {
      navigation.navigate('MealsOverview');
    };

    return (
      <CategoryGridTile title={title} color={color} onPress={onPressHandler} />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
