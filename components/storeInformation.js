import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Box,VStack,Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';


export default function Storeinformation(props) {

    let people = 0;

    const navigation = useNavigation();

    return (

        <View style={styles.center}>
            <VStack space={4}>
                <Text style ={styles.center} style={styles.text}>{props.storeName} </Text>
                <Box style={styles.topBox}>

                    <Text style={styles.boxTopText}>Status</Text>
                    <Text style={styles.boxBottomText}>Closed</Text>
                    
                </Box>
                <Box style={styles.topBox}>

                    <Text style={styles.boxTopText}>Current Occupancy</Text>
                    <Text style={styles.boxBottomText}>{people} people</Text>

                </Box>
                <Box style={styles.bottomBox}>

                    <Text style={styles.boxTopText}>Location</Text>
                    <Text style={styles.boxAddressText}>{props.topAddress}</Text>
                    <Text style={styles.boxAddressText}>San Jose, CA 95112</Text>

                </Box>

                <Button onPress={() => navigation.navigate("Other")}>Hello</Button>
                

            </VStack>
            
        </View>
      
    
    )

}

const styles = StyleSheet.create({
      center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      boxTopText: {
        width: 247,
        height: 24,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.05,
      },
      boxBottomText: {
        width: 247,
        height: 29,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        letterSpacing: -0.05,
      },
      boxAddressText: {
        width: 247,
        height: 58,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        letterSpacing: -0.05,
        color: '#3F3F46',
      },
      topBox: {
        width: 279,
        height: 93,
        borderRadius: 8,
        boxShadow: 2,
        borderWidth: 2,
      },
      bottomBox: {
        width:279,
        height:122,
        borderRadius:8,
        boxShadow:2,
        borderWidth:2,
      },
      center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
  });