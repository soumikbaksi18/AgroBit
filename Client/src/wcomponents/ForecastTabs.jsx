import { React , useState} from "react";
import styles from "./ForecastTabs.module.css";

const ForecastTabs = (props) => {
  const [active,setActive] = useState(0);  
  const forecastClickHandler = (active) => {
    setActive(active);
    props.onTabChange(active);
  }

  if (!props.forecast || !props.forecast.days) {
    return null; 
  }
  
  return (
    <div className={styles["forecast-tabs"]}>
      {props.forecast.days.slice(0, 4).map((day, i) => (
        <div
          key={i}
          className={`${styles["day-tab"]} ${i === active ? styles["active"] : ""}`}
          onClick={() => forecastClickHandler(i)}
        >
          <div className="day">{day.day}</div>
          <div className="text-forecast">
          </div>

        </div>
      ))}
    </div>
  );
};

export default ForecastTabs;