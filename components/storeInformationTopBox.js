import React from 'react';
import { StyleSheet,View,Text,useState } from 'react-native';
import { Box,VStack,Button } from 'native-base';

export default function Topbox(props) {

    if(props.populationStyling == "Crowded") {

        console.warn("population staus is Crowded");

        return (

            <Box style={styles.crowded}>
                <Text color="#B91C1C" style={[ styles.toptextCrowded ]}>Status</Text>
                <Text style={styles.bottomtextClosed}>{props.populationStyling}</Text>
            </Box>

    
        )

    } else if(props.populationStyling == "Moderate") {

        console.warn("population staus is Moderate");

        return (

            <Box style={styles.moderate}>
                <Text style={styles.toptextModerate}>Status</Text>
                <Text style={styles.bottomtextModerate}>{props.populationStyling}</Text>
            </Box>
    
        )

    }else if(props.populationStyling == "Closed") {

        console.warn("population staus is Moderate");

        return (

            <Box style={styles.closed}>
                <Text style={styles.toptextClosed}>Status</Text>
                <Text style={styles.bottomtextClosed}>{props.populationStyling}</Text>
            </Box>
    
        )

    }else if(props.populationStyling == "Empty") {

        console.warn("population staus is Moderate");

        return (

            <Box style={styles.empty}>
                <Text style={styles.toptextEmpty}>Status</Text>
                <Text style={styles.bottomtextEmpty}>{props.populationStyling}</Text>
            </Box>
    
        )

    }


}

const styles = StyleSheet.create ({
    empty: {
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
    closed: {
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
    moderate: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 16,
        marginVertical: 8,
        width: 279,
        height: 93,
        backgroundColor: '#FFF7ED',
        borderWidth: 2,
        borderColor: '#FED7AA',
        borderRadius: 8,
        flex: 0,
        order: 1,
        flexGrow: 0,
    },
    crowded: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 16,
        marginVertical: 8,
        width: 279,
        height: 93,
        backgroundColor: '#FAF5FF',
        borderWidth: 2,
        borderColor: '#E9D5FF',
        borderRadius: 8,
        flex: 0,
        order: 1,
        flexGrow: 0,
    },
    closed: {
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
    statusText: {
        width: 247,
        height: 24,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.05,
        flex: 0,
        order: 0,
        flexGrow: 0,
    },
    toptextEmpty: {
        width: 247,
        height: 24,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.05,
        color: '#1D4ED8',
        flex: 0,
        flexGrow: 0,
        order: 0,
    },
    bottomtextEmpty: {
        width: 247,
        height: 29,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        letterSpacing: -0.05,
        color: '#1D4ED8',
        flex: 0,
        flexGrow: 0,
        order: 1,
    },
    toptextModerate: {
        width: 247,
        height: 24,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.05,
        color: '#C2410C',
        flex: 0,
        flexGrow: 0,
        order: 0,
        alignSelf: 'stretch',
    },
    bottomtextModerate: {
        width: 247,
        height: 29,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        letterSpacing: -0.05,
        color: '#C2410C',
        flex: 0,
        flexGrow: 0,
        order: 1,
        alignSelf: 'stretch',
    },
    toptextCrowded: {
        width: 247,
        height: 24,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.05,
        color: '#7E22CE',
        flex: 0,
        alignSelf: 'stretch',
        flexGrow: 0,
    },
    bottomtextCrowded: {
        width: 247,
        height: 24,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.05,
        color: '#7E22CE',
        flex: 0,
        alignSelf: 'stretch',
        flexGrow: 0,
    },
    toptextClosed: {
        width: 247,
        height: 24,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.05,
        color: '#B91C1C',
        flex: 0,
        order: 0,
        flexGrow: 0,
    },
    bottomtextClosed: {
        width: 247,
        height: 29,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        letterSpacing: -0.05,
        color: '#B91C1C',
        flex: 0,
        order: 1,
        flexGrow: 0
    }

})