import React from 'react';
import { Text } from 'react-native';

const CurrentTemp = (props) => (
        <Text style={styles.currentTempStyle}>
            { props.children } °F
        </Text>
);

const styles = {
    currentTempStyle: {
        fontSize: 60,
        color: '#fff'
    }
};

export default CurrentTemp;
