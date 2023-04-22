import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Box,VStack,Button } from 'native-base';

export default function Topbox(props) {

    let styles = StyleSheet.create();

    if(props.populationStatus = "Crowded") {
        styles = {
            topBox: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 16,
                marginVertical: 8,
                width: 279,
                height: 93,
                backgroundColor: '#FEF2F2',
                borderWidth: 2,
                borderColor: '#FECACA',
                borderRadius: 8,
                flex: 0,
                order: 1,
                flexGrow: 0,
            },
            textColor: {
                color: '#B91C1C',
            },
        }
    } else if(props.populationStatus = "Moderate") {
        styles = {
            topBox: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 16,
                marginVertical: 8,
                width: 279,
                height: 93,
                position: 'absolute',
                left: 20,
                top: 137,
                backgroundColor: '#FFF7ED',
                borderWidth: 2,
                borderColor: '#FED7AA',
                borderRadius: 8,
            },
            textColor: {
                color: '#C2410C',
            },
        }
    }else if(props.populationStatus = "Empty") {
        styles = {
            topBox: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 16,
                marginVertical: 8,
                width: 279,
                height: 93,
                backgroundColor: '#EFF6FF',
                borderWidth: 2,
                borderColor: '#BFDBFE',
                borderRadius: 8,
                flex: 0,
                order: 1,
                flexGrow: 0,
            },
            textColor: {
                color: '#1D4ED8',
            },
        }
    }else if(props.populationStatus = "Closed") {
        styles = {
            topBox: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 16,
                marginVertical: 8,
                width: 279,
                height: 93,
                backgroundColor: '#FEF2F2',
                borderWidth: 2,
                borderColor: '#FECACA',
                borderRadius: 8,
                flex: 0,
                order: 1,
                flexGrow: 0,
            },
            textColor: {
                color: '#B91C1C',
            },
        }
    }

    return (

        <Box style={styles.topBox}>
            <Text style={styles.textColor}>Status</Text>
            <Text style={styles.textColor}>{props.populationStatus}</Text>
        </Box>

    )


}