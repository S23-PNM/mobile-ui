import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Box,VStack,Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Topbox from './storeInformationTopBox';


export default function Storeinformation(props) {

    let people = 0;
    const navigation = useNavigation();

    return (

        <View style={styles.center}>
            <VStack space={4}>
                <Text style={[styles.titleText]}>{props.storeName} </Text>
                <Topbox populationStatus={props.populationStatus}/>
                <Box style={styles.topBox}>

                    <Text style={styles.boxTopText}>Current Occupancy</Text>
                    <Text style={styles.boxBottomText}>{people} people</Text>

                </Box>
                <Box style={styles.bottomBox}>

                    <Text style={styles.boxTopText}>Location</Text>
                    <Text style={styles.boxAddressText}>{props.topAddress}</Text>
                    <Text style={styles.boxAddressText}>San Jose, CA 95112</Text>

                </Box>


                <Button backgroundColor="#15803D" variant="outline" onPress={() => navigation.navigate("Other")}><Text color="#FFFFFF" style={styles.notificationButtonText}>Let me know when to go</Text></Button>
                <Button variant="outline" onPress={() => navigation.navigate("Other")}><Text style={styles.homeButtonText}>Return Home</Text></Button>
                

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
      emptytopBox: {
        width: 279,
        height: 93,
      },
      moderatetopBox: {
        width: 279,
        height: 93,
        borderRadius: 8,
        boxShadow: 2,
        borderWidth: 2,
      },
      crowdedtopBox: {
        width: 279,
        height: 93,
        borderRadius: 8,
        boxShadow: 2,
        borderWidth: 2,
      },
      closedtopBox: {
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      titleText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 24,
        paddingTop: 20,
      },
      homeButtonText:{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.05,
      },
      notificationButtonText:{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        letterSpacing: -0.05,
        color: '#FFFFFF',
      },
  });