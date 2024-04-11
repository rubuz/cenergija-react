import { useState, useEffect } from "react";

const useCurrentTimePeriod = () => {
  const [timePeriod, setTimePeriod] = useState({
    month: new Date().getMonth(),
    dayOfWeek: new Date().getDay(),
    dayOfMonth: new Date().getDate(),
    isAM: new Date().getHours() < 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimePeriod({
        month: now.getMonth(),
        dayOfWeek: now.getDay(),
        dayOfMonth: now.getDate(),
        isAM: now.getHours() < 12,
      });
    }, 1000 * 10); // Update every minute

    return () => {
      clearInterval(timer);
    };
  }, []);

  return timePeriod;
};

export default useCurrentTimePeriod;
