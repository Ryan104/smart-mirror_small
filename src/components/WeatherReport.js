// Collect weather data periodically, send to child components do display

// City code 5419384

import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import CurrentTemp from './CurrentTemp';
import ForecastTemp from './ForecastTemp';
import { getWeatherApiKey } from '../../config';

const weatherAPIKey = getWeatherApiKey();
const currentWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?zip=80206,us&units=imperial&APPID=' + weatherAPIKey;
const forecastWeatherURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?zip=80206,us&units=imperial&cnt=2&APPID=' + weatherAPIKey;

//const getForecastWeatherTemp;

class WeatherReport extends Component {
    state = { currentTemp: 0, forecastHigh: 0, forecastLow: 0 };

    componentDidMount() {
        //Collect initial weather data
        this.getCurrentWeatherTemp();
        this.getForecastWeather();

        //Set update Invervals
        // current temp @ 15min = 900000ms
        this.currentTimerID = setInterval(() => (
            this.getCurrentWeatherTemp()
        ), 900000);
        // forcast temps @ 3hrs = 10800000ms
        this.forecastTimerID = setInterval(() => (
            this.getForecastWeather()
        ), 10800000);
        //this.getCurrentWeatherTemp();
        //this.getForecastWeather();
    }

    componentWillUnmount() {
        clearInterval(this.currentTimerID);
        clearInterval(this.forecastTimerID);
    }

    getCurrentWeatherTemp = () => {
        console.log('getting current temp');
        axios.get(
                currentWeatherURL
            ).then(
                result => 
                    this.setState({ currentTemp: result.data.main.temp })
            ).catch(
                (error) => console.log(error)
        );
    };

    getForecastWeather = () => {
        console.log('getting forecast temps');
        axios.get(
            forecastWeatherURL
        ).then(
            result => {
                console.log(result);
                return this.setState( 
                    {
                        forecastHigh: Math.round(result.data.list[0].temp.max),
                        forecastLow: Math.round(result.data.list[0].temp.min)
                    }
                ); 
            }
        ).catch(
            error => console.log(error)
        );
    };

    render() {
        return (
            <View style={styles.weatherReportStyle}>
                <CurrentTemp>{ Math.round(this.state.currentTemp) }</CurrentTemp>
                <View style={styles.forecastTempsStyle}>
                    <ForecastTemp highLow='&#x25B2;'>{ this.state.forecastHigh }</ForecastTemp>
                    <ForecastTemp highLow='&#x25BC;'>{ this.state.forecastLow }</ForecastTemp>
                </View>
            </View>
        );
    }
}

const styles = {
    weatherReportStyle: {
        
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    forecastTempsStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
};

export default WeatherReport;
