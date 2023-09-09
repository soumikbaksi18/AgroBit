import React, { useState, useEffect, useCallback, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import "../App.css";
import profile from "../assets/profile.svg";
import Logo from "../components/Logo";
import locator from "../assets/images/Location.svg";
import calendar from "../assets/images/Calendar.svg";
import cloudy from "../assets/images/cloudy.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import CityForm from "../wcomponents/CityForm";
import ForecastGraph from "../wcomponents/ForecastGraph";
import ForecastTabs from "../wcomponents/ForecastTabs";
import keys from "../secrets.json";
import "../App.css";

import CRS from "../components/CRS";
import Footer from '../components/Footer';

const SystemPage = () => {
    const cityInputRef = useRef();

    const submitHandler = (event) => {
      event.preventDefault();
      const enteredCity = cityInputRef.current.value;
      props.onSubmitHandler(enteredCity);
    };
  
    const { logout, currentUser } = useAuth();
    const [forecast, setForecast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("Kolkata, INDIA");
    const [chart, setChart] = useState({
      chartLabels: ["Now"],
      chartData: [],
      chartMin: "",
      chartMax: "",
    });
    const [isMobile, setIsMobile] = useState(false);
    const activeDay = 1;
  
    //choose the screen size
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
  
    const tabChangeHandler = (active) => {
      // update data for chart
      updateChart(active);
    };
    // create an event listener
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
    }, []);
  
    const fetchForecastHandler = useCallback(async () => {
      setIsLoading(true);
      setError(null);
  
      try {
        const currentData = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keys.key}&units=metric`
        ).then((response) => response.json());
        const forecastData = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${keys.key}&units=metric`
        ).then((response) => response.json());
  
        const c = new Date();
        //5:05 PM, Mon, Nov 23, 2020
        const currentTime = c.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          weekday: "short",
          month: "short",
          day: "numeric",
        });
  
        function addDays(date, days) {
          var result = new Date(date);
          result.setDate(result.getDate() + days);
          return result;
        }
        const timeUpdated = new Date();
  
        let time = [];
        let temp = [];
        let currentDate = timeUpdated.toLocaleString("en-US", {
          day: "numeric",
        });
        let nextDate = addDays(timeUpdated, 1);
        let prevDate;
        nextDate = nextDate.toLocaleString("en-US", {
          day: "numeric",
        });
        let transformedDays = [];
        let tempData = [];
        let j = 0;
        // add in our current time and temp
        temp.push(Math.round(currentData.main.temp));
        time.push("Now");
        for (let i = 0; i < forecastData.list.length; i++) {
          const fData = forecastData.list[i];
  
          const t = new Date(parseInt(fData.dt * 1000));
          const humanDateFormat = t.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
          });
          const hour = t.toLocaleString("en-US", {
            hour: "numeric",
          });
          currentDate = t.toLocaleString("en-US", {
            day: "numeric",
          });
          if (timeUpdated < t && j <= 6) {
            // get only 7 items
            time.push(hour);
            temp.push(Math.round(fData.main.temp));
            j++;
          }
  
          if (currentDate === nextDate) {
            transformedDays.push({ day: prevDate, forecast: tempData });
            nextDate = addDays(t, 1);
            nextDate = nextDate.toLocaleString("en-US", {
              day: "numeric",
            });
            tempData = [];
          }
          // add new day entry
          tempData.push({
            time: humanDateFormat,
            hour: hour,
            temp: Math.round(fData.main.temp),
            feels_like: Math.round(fData.main.feels_like),
            pressure: Math.round(fData.main.pressure),
            humidity: fData.main.humidity,
          });
          prevDate = humanDateFormat;
        }
  
        const transformedForecast = [
          {
            name: currentData.name,
            currentTime: currentTime,
            feels_like: Math.round(currentData.main.feels_like),
            temp: Math.round(currentData.main.temp),
            humidity: Math.round(currentData.main.humidity),
            wind: Math.round(currentData.wind.speed),
            days: transformedDays,
            current: {
              chartLabels: time,
              chartData: temp,
              chartMin: Math.min(...temp),
              chartMax: Math.max(...temp),
            },
          },
        ];
        setChart({
          chartLabels: time,
          chartData: temp,
          chartMin: Math.min(...temp),
          chartMax: Math.max(...temp),
        });
  
        setForecast(transformedForecast);
  
        if (!currentData.ok || !forecastData.ok) {
          throw new Error("Something went wrong!");
        }
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }, [city]);
    useEffect(() => {
      fetchForecastHandler();
    }, [fetchForecastHandler]);
  
    const addCityHandler = (city) => {
      setCity(city);
    };
  
    const updateChart = (active) => {
      if (active !== 0) {
        const activeForecast = forecast[0].days[active].forecast;
        let temp = activeForecast.map((day) => {
          return day.temp;
        });
        let hour = activeForecast.map((day) => {
          return day.hour;
        });
        setChart({
          chartLabels: hour,
          chartData: temp,
          chartMin: Math.min(temp),
          chartMax: Math.max(temp),
        });
      } else {
        setChart(forecast[0].current);
      }
    };
  
    let content = <p>No forecast available.</p>;
  
    if (error) {
      content = <p>Error: {error}</p>;
    }
  
    if (isLoading) {
      content = <p>Loading...</p>;
    }
  
    if (forecast.length > 0) {
      content = (
        <section className="main-inner box mx-10">
          <div className="left-widget white-box">
            <div className="cityTitle pt-4 pb-2">{forecast[0].name}</div>
            <div className="currentTime">{forecast[0].currentTime}</div>
  
            <div className="currentForecast mt-2">
              <img src={cloudy} alt="Cloudy" />
              <div className="flex">
                <span className="text-4xl font-semibold poppins">
                  {/* this should be the top level temp  */}
                  {forecast[0].temp}
                </span>
                <div className="sup">
                  <span className="deg">&deg;</span> C
                </div>
              </div>
            </div>
  
            <div className="textForecast">Cloudy</div>
            <div className="feelsLike">
              Feels Like {forecast[0].feels_like}&deg;C
            </div>
  
            <div className="row bottom-info mt-4">
              <div className="col">
                <h4 className="font-semibold">Humidity</h4>
                <p className="text-green-800 font-semibold">
                  {forecast[0].humidity}%
                </p>
              </div>
              <div className="col">
                <h4 className="font-semibold">Wind Speed</h4>
                <p className="text-green-800 font-semibold">
                  {forecast[0].wind} mph
                </p>
              </div>
            </div>
          </div>
  
          <div className="right-widget">
            <div className="right-widget-inner">
              <div className="chart-container mr-20">
                <ForecastGraph
                  chartLabels={chart.chartLabels}
                  chartData={chart.chartData}
                  chartMin={chart.chartMin}
                  chartMax={chart.chartMax}
                />
              </div>
            </div>
          </div>
        </section>
      );
    }
  

  return (
    <>
      <nav className="flex justify-between mt-5 mx-10">
        <div className="flex ">
          <Logo/>
          <h2 className="text-gray-500 flex items-center ml-4">
            Your Dashboard
          </h2>
        </div>
        <div className="flex ">
          <h2 className="flex items-center mr-2 font-semibold text-xl">
            Hello, {currentUser?.displayName ?? currentUser?.email}
          </h2>
          <button onClick={logout} className="mx-2">
            Logout
          </button>
          <img
            src={currentUser?.photoURL ?? profile}
            className="rounded-full object-cover w-10"
          />
        </div>
      </nav>

      {/* Weather-report-system */}
      <div className="weather-system">
        {/* Inputs */}
        <div className="flex mx-10 mt-10">
          {/* Location */}
          <div className="w-2/5 mr-8">
            <div className="box">
              <div className="flex ">
                <img src={locator} className="w-6 mr-2" />
                <h2 className="flex items-center text-lg font-semibold">
                  Location
                </h2>
              </div>

              <div className="mt-1">
                <CityForm onSubmitHandler={addCityHandler} />
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="w-3/5 ">
            <div className="season-select box">
              <div className="flex">
                <img src={calendar} className="w-6 mr-2" />
                <h2 className="flex content-center text-lg font-semibold ">
                  Select the Date
                </h2>
              </div>
              <ForecastTabs
                forecast={forecast[0]}
                onTabChange={tabChangeHandler}
              />
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div className="weather-chart">{content}</div>
      </div>

      {/* Crop-Recommendation System */}
      <div className="Crop-recomsystem ">
        <CRS/>
      </div>

      <div>
       <Footer/>
      </div>
     
      
    </>
  );
};

export default SystemPage;
