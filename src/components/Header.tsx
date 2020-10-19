import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  title: string;
}

const Header: React.FC<IProps> = ({ title }: IProps): JSX.Element => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
