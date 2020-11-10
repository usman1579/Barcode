import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image , Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Container } from './Component/Styles';

const { width } = Dimensions.get('window')
const qrSize = width * 0.7

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate('ItemDetail',{type:type, data:data })

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={Container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

   <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.container]}>
        <Text style={styles.description}>Scan your QR code</Text>
        
        <View style={styles.qr}/>
    
        <Text
          onPress={() => navigation.pop()}
          style={styles.cancel}>
          Cancel
        </Text>
      </BarCodeScanner>

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      qr: {
        marginTop: '20%',
        marginBottom: '20%',
        width: qrSize,
        height: qrSize,
        borderWidth:1,
        borderColor:'white'
      },
      description: {
        fontSize: width * 0.05,
        marginTop: '10%',
        textAlign: 'center',
        width: '70%',
        color: 'white',
      },
      cancel: {
        fontSize: width * 0.05,
        textAlign: 'center',
        width: '70%',
        color: 'white',
      }
  });
  
