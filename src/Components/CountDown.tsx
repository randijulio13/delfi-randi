import { useEffect, useState } from "react";
import Reveal from "./Reveal";

interface CountDown {
  days: Number;
  hours: Number;
  minutes: Number;
  seconds: Number;
}

const CountDown = () => {
  const calculateTimeLeft = (targetDate: String): CountDown => {
    const [day, month, year] = targetDate.split("-");
    const target = new Date(`${month}/${day}/${year}`).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    let timeLeft: CountDown = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [countDown, setCountDown] = useState<CountDown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown(calculateTimeLeft("20-10-2024"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <Reveal>
        <h1 className="title">Countdown</h1>
      </Reveal>
      <Reveal>
        <div className="date-wrapper">
          <div className="date">
            <span className="date-text">{countDown.days.toString()}</span>
            <span className="date-type">Hari</span>
          </div>
          <div className="date">
            <span className="date-text">{countDown.hours.toString()}</span>
            <span className="date-type">Jam</span>
          </div>
          <div className="date">
            <span className="date-text">{countDown.minutes.toString()}</span>
            <span className="date-type">Menit</span>
          </div>
          <div className="date">
            <span className="date-text">{countDown.seconds.toString()}</span>
            <span className="date-type">Detik</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CountDown;
