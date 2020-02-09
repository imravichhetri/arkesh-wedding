import React, {
  useState
} from 'react'
import PropTypes from 'prop-types'

import "./countdown.scss";

function makeTimer() {

  let endTime = new Date("04 May 2020 20:00:00 GMT+05:30");
  endTime = (Date.parse(endTime) / 1000);

  let now = new Date();
  now = (Date.parse(now) / 1000);

  let timeLeft = endTime - now;

  let days = Math.floor(timeLeft / 86400);
  let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
  let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

  if (hours < "10") { hours = "0" + hours; }
  if (minutes < "10") { minutes = "0" + minutes; }
  if (seconds < "10") { seconds = "0" + seconds; }

  return {
    days,
    hours,
    minutes,
    seconds
  }
  // $("#days").html(days + "<span>Days</span>");
  // $("#hours").html(hours + "<span>Hours</span>");
  // $("#minutes").html(minutes + "<span>Minutes</span>");
  // $("#seconds").html(seconds + "<span>Seconds</span>");

}

const Countdown = props => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  setTimeout(() => {
    const { days, hours, minutes, seconds } = makeTimer();
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, 1000);

  return (
    <div
      className="flex_display countdown_container"
      >
      <div className="time_span">
        {days} <span>Days</span>
      </div>
      <div className="time_span">
        {hours} <span>Hours</span>
      </div>
      <div className="time_span">
        {minutes} <span>Minutes</span>
      </div>
      <div className="time_span">
        {seconds} <span>Seconds</span>
      </div>
    </div>
  )
}

Countdown.propTypes = {

}

export default Countdown

