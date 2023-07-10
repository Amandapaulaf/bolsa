import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { Camera } from 'expo-camera';
import React, {useState, useEffect} from 'react';

export default function App() {
const [type, setType] = useState(Camera.Constants.Type.back);
const [permission, setPermission] = useState(null);

useEffect(()=>{

  (async() => {

  })();
  
},[])

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera:{
    flex: 1,
  },
});
