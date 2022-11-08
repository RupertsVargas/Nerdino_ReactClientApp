import React from 'react';
import { useQuery } from 'react-query';

import { api } from '../utilities/api'

const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function convertDate(date){
    date.replace(' ', 'T');

    // forecast.date
    let newDate = new Date(date);
    let number = newDate.getDay();
    let nameDay = daysInWeek[number];
    
    // console.log(newDate);
    return nameDay;
}


function ForecastsTable({ forecasts }) {
    // const [WeatherForecast , setWeatherForecast ] = React.useState([]);
    // // setWeatherForecast(forecasts);
    
    // // const [items, setItems] = React.useState([]);
    // console.log(forecasts)
    // React.useEffect(() => {
    //     localStorage.setItem('WeatherForecast', JSON.stringify(forecasts));
    //     console.log(localStorage.getItem("WeatherForecast"));
    //     // localStorage.getItem('myCat');
    //     console.log(WeatherForecast);
    // }, [WeatherForecast]);
    let forecastAux =[];
    // forecasts = [];
    for (let i = 0; i < 5; i++) {
        forecastAux[i] = forecasts[i];
        
    }
    forecasts = forecastAux;
    // console.log(forecastAux)
    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map((forecast, index) =>
                    
                    <tr key={index}>
                        <td>{convertDate(forecast.date)}</td>
                        <td>{ (forecast.date).substr(0,10) }</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                    </tr>

                    
                )}
            </tbody>
        </table>
    );
}

function Weather() {
    
    const { isLoading, isError, isSuccess, data } = useQuery("weatherForecast", async () => {
        let api_ = api.get("weatherforecast/weatherforecasts.php"); 
       
        return api_;
    });
    
    

    // React.useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('WeatherForecast'));
    //     if (items) {
    //         setWeatherForecast(items);
    //     }

    //     console.log(WeatherForecast);
    // }, []);

    return (
        <div>
            <h1 id="tabelLabel" >Weather forecast</h1>
            <>
                {isLoading && <p><em>Loading...</em></p>}
                {isError && <p><em>Unable to retrieve data. Try again later.</em></p>}
                {isSuccess && 
                
                
                <ForecastsTable forecasts={data } 
                // {this.setWeatherForecast()}
                />}
            </>
        </div>
    );
}

export default Weather;
