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
                class="text-xl font-bold font-heading underline text-gray-300"
                href="#"
              >
                {todayDate}
              </a>

              <a class="flex items-center hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Navbar;
