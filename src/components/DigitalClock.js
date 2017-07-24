import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

//function used to generate date and time object for updating the state
const getNewTimeDate = () => (
    {
        time: moment().format('HH:mm:ss'),
        date: moment().format('dddd, MMMM Do')
    }
);

// Initialize timer ID
//let timerID;

class DigitalClock extends Component {
    // Initialize state with current date and time
    state = getNewTimeDate();

    componentDidMount() {
        //After component has rendered, update state with new date and time every second
        // setInterval NOT WORKING when chrome dubugger is open...
        this.timerID = setInterval(() => (
            this.setState(getNewTimeDate)
        ), 1000);
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        //Stop counting when app closes
        clearInterval(this.timerID);
        console.log('componentWillUnmount');
    }

    render() {
        // Is there a better way to use flexbox to get the date to center 
        //  beneath the time at the top-right of screen?
        return (
            <View style={styles.viewClockStyle}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.textClockStyle}>{this.state.time}</Text>
                    <View style={styles.viewDateStyle}>
                        <Text style={styles.textDateStyle}>{this.state.date}</Text>
                    </View>
                </View>
            </View>
        );   
    }
}

const styles = {
    viewClockStyle: {
        flex: -1,
        flexDirection: 'row'
    },
    textClockStyle: {
        fontSize: 75,
        color: '#fff'
    },
    viewDateStyle: {
        
    },
    textDateStyle: {
        fontSize: 20,
        color: '#fff',
        alignSelf: 'center'
    }
};

export default DigitalClock;
