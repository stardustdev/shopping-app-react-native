import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Header from '@src/components/Header';

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Shopping List'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
