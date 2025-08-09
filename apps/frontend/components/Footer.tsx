import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-col justify-center items-center gap-3 w-full px-6">
        <div className="flex flex-row justify-center items-center w-full text-white gap-6 text-xs sm:text-sm md:text-lg lg:text-xl">
            <span>راه های ارتباطی:</span>
            <span>linkedin</span>
            <span>portfolio</span>
            <span>gmail</span>
            <span>phone</span>
        </div>
          <p className="text-gray-300">© {new Date().getFullYear()} Mohamad Mahdi Rahimi Dev</p>
      </div>
    </footer>
  );
};

export default Footer;