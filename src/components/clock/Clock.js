import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimezone, getClock } from "../../../src/redux/watchSlice";
import "./Clock.css";

const Clock = () => {
  const Ref = useRef();
  const [selectedTimeZone, setSelectedTimeZone] = useState(null);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isStopped, setIsStopped] = useState(false);
  const [isDisabled , setIsDisabled] = useState(true)
  const dispatch = useDispatch();
  const allTimeZones = useSelector((state) => {
    return state.timezone.timeZones;
  });
  const currentTime = useSelector((state) => {
    return state.timezone.currentTime;
  });

  useEffect(() => {
    dispatch(getTimezone());
    Ref.current = setInterval(() => {
      setSec((old) => {
        return old + 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (selectedTimeZone) {
      setHour(parseInt(currentTime[0]));
      setMin(Number(currentTime[1]));
      setSec(Number(currentTime[2]));
    }
  }, [currentTime]);

  if (sec >= 59) {
    setSec(0);
    setMin((old) => {
      return old + 1;
    });
  }
  if (min >= 59 && sec >= 59) {
    setMin(0);
    setHour((old) => {
      return old + 1;
    });
  }
  if (hour >= 23 && min >= 59 && sec >= 59) {
    setHour(0);
  }

  const buttonHandler = () => {
    if (isStopped) {
      setIsStopped(false);
      Ref.current = setInterval(() => {
        setSec((old) => {
          return old + 1;
        });
      }, 1000);
    } else {
      setIsStopped(true);
      clearInterval(Ref.current);
    }
  };

  return (
    <React.Fragment>
      <div className="div1">
        <div className="select">
          <label htmlFor="selectTimeZone" className="label">
            Select Country :
          </label>
          <select
            className="option"
            onChange={(e) => {
              setSelectedTimeZone(e.target.value);
              dispatch(getClock(e.target.value));
              setIsStopped(false);
              setIsDisabled(false)
            }}
            id="selectTimeZone"
          >
            <option value="">Select One</option>
            {allTimeZones.map((zone, i) => {
              return (
                <option key={i} value={zone}>
                  {zone}
                </option>
              );
            })}
          </select>
        </div>
        <div className="time">
          {selectedTimeZone && (
            <div className="time">
              {hour < 10 ? `0${hour}` : `${hour}`}:{" "}
              {min < 10 ? `0${min}` : `${min}`} :{" "}
              {sec < 10 ? `0${sec}` : `${sec}`}
            </div>
          )}
        </div>
        <div>
          <button
            onClick={buttonHandler}
            disabled={isDisabled}
            className="btn"
            style={{ backgroundColor: `${isStopped ? 'green' : 'red'}` }}
          >
            {isStopped ? "Start" : "Stop"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Clock;
