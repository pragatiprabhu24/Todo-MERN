import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [todayDate, setTodayDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setTodayDate(formattedDate);
  }, []);

  return (
    <>
      <div class="">
        <section class="">
          <nav class="flex justify-between  text-white">
            <div class="px-5 xl:px-12 py-6 flex justify-between w-full items-center">
              <a
                class="text-xl font-normal font-heading underline text-white"
                href="#"
              >
                {todayDate}
              </a>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Navbar;
