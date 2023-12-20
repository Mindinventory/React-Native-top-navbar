import * as React from 'react';

import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Header } from 'rn-top-navbar';

export default function App() {
  return (
    <>
      <Header
        style={styles.headerContainer}
        statusBarBackground="#008080"
        barStyle="light-content"
      >
        <Header.Left style={styles.headerLeft}>
          <Text>Left</Text>
        </Header.Left>
        <Header.Body style={styles.headerBody}>
          <Text style={styles.titleText}>Header Title</Text>
        </Header.Body>
        <Header.Right style={styles.headerRight}>
          <Text>Right</Text>
        </Header.Right>
      </Header>
      <SafeAreaView style={styles.container}>
        <Text style={styles.content}>
          This is customizable{' '}
          <Text style={styles.boldText}>rn-top-navbar</Text> package, it is use
          for add header in your app, for both ios and android platform.
        </Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  headerContainer: {
    backgroundColor: '#009999',
  },
  headerLeft: {
    backgroundColor: '#009999',
    width: '15%',
  },
  headerBody: {
    backgroundColor: '#009999',
    width: '70%',
  },
  headerRight: {
    backgroundColor: '#009999',
    flexDirection: 'row',
    width: '15%',
  },
  titleText: {
    color: '#fff',
  },
  content: {
    marginHorizontal: 20,
    textAlign: 'justify',
    fontSize: 16,
    marginTop: 15,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
