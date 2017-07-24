import React from 'react';
import { Text } from 'react-native';

const ForecastTemp = (props) => (
    <Text style={styles.forecastTempStyle}>
        {props.highLow} { props.children } °F
    </Text>
);
    
const styles = {
    forecastTempStyle: {
        color: '#fff',
        fontSize: 24
    }
};    

export default ForecastTemp;
