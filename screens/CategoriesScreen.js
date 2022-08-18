import { FlatList, Text } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';

const renderCategoryItem = (itemData) => {
  const {
    item: { title, color },
  } = itemData;
  return <CategoryGridTile title={title} color={color} />;
};

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;
