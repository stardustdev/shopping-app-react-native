import React, { useState } from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { v4 as uuid } from 'uuid';

import Header from '@src/components/Header';
import ListItem from '@src/components/ListItem';
import AddItem from '@src/components/AddItem';
import { Item } from '@src/models';

const App: React.FC<{}> = (): JSX.Element => {
  const [items, setItems] = useState<Array<Item>>([
    { id: uuid(), title: 'Milk' },
    { id: uuid(), title: 'Eggs' },
    { id: uuid(), title: 'Bread' },
    { id: uuid(), title: 'Juice' },
  ]);

  const deleteItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addItem = (title: string) => {
    if (!title) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'Ok' }]);
    } else {
      setItems((prevItems) => [...prevItems, { id: uuid(), title }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
