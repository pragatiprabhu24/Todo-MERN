import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4">
      <p className="flex items-center gap-2 text-sm text-white font-bold">
        Made with{" "}
        <img
          src="https://www.freeiconspng.com/thumbs/heart-png/heart-png-15.png"
          className="w-5"
          alt="heart icon"
        />{" "}
        by Pragati Prabhu
      </p>
    </div>
  );
};

export default Footer;
