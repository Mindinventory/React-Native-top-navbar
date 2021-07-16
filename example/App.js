import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
// import Header from '../src/Header'
import Header from '@mindinventory/rn-top-navbar'

const App = () => {
  return (
    <>
      <Header style={{ backgroundColor: '#009999' }} statusBarBackground='#008080' barStyle='light-content'>
        <Header.Left style={{ backgroundColor: '#009999', width: "15%" }}>
          <Text>Left</Text>
        </Header.Left>
        <Header.Body style={{ backgroundColor: '#009999', width: "70%" }}>
          <Text>Header Title</Text>
        </Header.Body>
        <Header.Right style={{ backgroundColor: '#009999', flexDirection: 'row', width: '15%' }}>
          <Text>Right</Text>
        </Header.Right>
      </Header>
      <SafeAreaView style={styles.conatiner}>
        <Text>App component</Text>
      </SafeAreaView>
    </>

  )
}

export default App

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3'
  }
})
