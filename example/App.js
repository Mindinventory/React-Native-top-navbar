import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Header from '@mindinventory/rn-top-navbar';

const App = () => {
  return (
    <>
      <Header style={{ backgroundColor: '#ff6666' }} statusBarBackground='#ff6666' barStyle='light-content'>
        {/* <Header.Left style={{ backgroundColor: '#ff6666', width: "15%" }}>          
          <Icon name='arrow-left' style={{color: '#fff', fontSize: 18}} />          
        </Header.Left> */}
        <Header.Body style={{ backgroundColor: '#ff6666', width: "70%" }}>
          <Text style={{color: '#fff'}}>Header Title</Text>
        </Header.Body>
        {/* <Header.Right style={{ backgroundColor: '#ff6666', flexDirection: 'row', width: '15%' }}>
          <Icon name='bars' style={{color: '#fff', fontSize: 18}} />                    
        </Header.Right> */}
      </Header>
      <SafeAreaView style={styles.conatiner}>
        <Text style={{marginHorizontal: 20, textAlign: 'justify', fontSize: 16}}>This is customizable <Text style={{fontWeight: 'bold'}}>rn-top-navbar</Text> package,
        it is use for add header in your app, for both ios and android platform.        
        </Text>
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
