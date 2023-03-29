import React, { useState, useEffect } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const day = time.toLocaleDateString("en-US", { weekday: "long" });
  const date = time.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left">
            <p className="text-gray-400">
              &copy; 2023 Company Name. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-auto text-center">
            <ul className="flex justify-center md:justify-end">
              <li className="mx-2">
                <span className="text-gray-400 text-base">
                  {day}, {date} {hours}:{minutes < 10 ? "0" + minutes : minutes}
                  <span className="seconds">
                    {seconds < 10 ? "0" + seconds : seconds}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
