import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IProps {
  addItem: (title: string) => void;
}

const AddItem: React.FC<IProps> = ({ addItem }: IProps): JSX.Element => {
  const [title, setTitle] = useState<string>('');

  const onChange = (text: string) => {
    setTitle(text);
  };

  const onPress = () => {
    addItem(title);
    setTitle('');
  };

  return (
    <View>
      <TextInput
        placeholder="Add Item ..."
        style={styles.input}
        onChangeText={onChange}
        value={title}
      />
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
