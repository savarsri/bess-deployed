import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Countdown = ({ targetDate, children }) => {
  const [showCountdown, setShowCountdown] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const countdownDate = new Date(targetDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = countdownDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setShowCountdown(false); // Website will render only now
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!showCountdown) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary-purple-dark text-white text-center px-4">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-80 sm:w-80 md:w-96 lg:w-[32rem] xl:w-[32rem] mb-2"
      />

      {/* Countdown */}
      <div className="flex space-x-6 sm:space-x-10 text-4xl sm:text-5xl md:text-6xl font-mono font-bold">
        <div>
          <p>{timeLeft.days.toString().padStart(2, "0")}</p>
          <span className="text-sm sm:text-base uppercase">Days</span>
        </div>
        <div>
          <p>{timeLeft.hours.toString().padStart(2, "0")}</p>
          <span className="text-sm sm:text-base uppercase">Hours</span>
        </div>
        <div>
          <p>{timeLeft.minutes.toString().padStart(2, "0")}</p>
          <span className="text-sm sm:text-base uppercase">Minutes</span>
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-8 text-lg sm:text-xl md:text-2xl text-primary-orange font-semibold max-w-lg">
        WE TURN A NEGATIVE INTO A POSITIVE...
      </p>
    </div>
  );
};

export default Countdown;
