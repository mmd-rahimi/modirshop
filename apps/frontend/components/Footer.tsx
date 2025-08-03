import React from "react";

const Footer = () => {
  return (
    <footer className="footer">

        <div className="flex flex-row justify-center items-center text-white gap-4 text-xs sm:text-sm md:text-lg lg:text-xl">
            <span>راه های ارتباطی</span>
            <span>راه های ارتباطی</span>
            <span>راه های ارتباطی</span>
        </div>

      <div className="copyright-box">
        <div className="container-footer">
          <p>© {new Date().getFullYear()} Mohamad Mahdi Rahimi Dev</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;