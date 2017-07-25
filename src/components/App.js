import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import DigitalClock from './DigitalClock';
import WeatherReport from './WeatherReport';

class App extends Component {
    // class components must contain a render method that returns some jsx
    render() {
        return (
            <View style={styles.appContainerStyle}>
                <StatusBar hidden />
                <DigitalClock />
                <WeatherReport />
                <KeepAwake />
            </View>
        );
    }
}

const styles = {
    appContainerStyle: {
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
};

export default App;
