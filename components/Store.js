import React from 'react';
import { StyleSheet,View,Text,Button } from 'react-native';
import { Box,VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';


export default function Store(props) {

    const navigation = useNavigation();

    return (
      
            <Box
                bg={props.backgroundColor}
                width={279}
                height={118}
                borderRadius={8}
                borderColor={props.borderColor}
                boxShadow={2}
                borderWidth={2}
                
            >
                <VStack space={3} flex={0.85} justifyContent="left" >
                    <Text style={styles.upperText}>
                        {props.title}
                    </Text>
                    <Text style={styles.middleText}>
                        {props.status}
                    </Text>
                    <Button style={styles.lowerText} onPress={() => navigation.navigate("Storepage")} title="View More ->"></Button>
                </VStack>
   
            </Box>
    )

}

const styles = StyleSheet.create({
    upperText: {
        paddingTop: 0,
        width: 183,
        height: 24,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.05,
    },
    middleText: {
        width: 155,
        height: 19,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: -0.05,
        flex: 0,
        flexGrow: 0,
        order: 1,
    },
    lowerText: {
        width: 99,
        height: 19,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: -0.05,
        flex: 0,
        flexGrow: 0,
        order: 2,
    }
  });