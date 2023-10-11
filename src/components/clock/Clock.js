import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimezone, getClock } from "../../../src/redux/watchSlice";

const Clock = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState(null);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isStopped, setIsStopped] = useState(false);
  const dispatch = useDispatch();
  const allTimeZones = useSelector((state) => {
    return state.timezone.timeZones;
  });

  const currentTime = useSelector((state) => {
    return state.timezone.currentTime;
  });

  
  useEffect(() => {
    dispatch(getTimezone());
  }, []);
  useEffect(() => {
    if (selectedTimeZone) {
      setHour(currentTime[0]);
      setMin(currentTime[1]);
      setSec(currentTime[2]);
    }
  }, [currentTime]);
  const buttonHandler = () => {
    if (isStopped) {
      setIsStopped(false);
    } else {
      setIsStopped(true);
    }
  };
  //   const formattedTime = time.toLocaleTimeString();
  return (
    <React.Fragment>
      <div>
        <label htmlFor="selectTimeZone">Select Country</label>
        <select
          onChange={(e) => {
            setSelectedTimeZone(e.target.value);
            dispatch(getClock(e.target.value));
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
      <div>
        <button onClick={buttonHandler}>{isStopped ? "Start" : "Stop"}</button>
      </div>
      <div>
        {selectedTimeZone && (
          <div className="time">
            {hour} : {min} : {sec}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Clock;
