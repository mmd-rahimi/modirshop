import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-col justify-center items-center gap-3 w-full px-6">
        <div className="flex flex-row justify-center items-center w-full text-white gap-6 text-xs sm:text-sm md:text-lg lg:text-xl">
            <span>راه های ارتباطی:</span>
            <span className="underline hover:text-gray-300 duration-200"><a target="_blank" href="https://www.linkedin.com/in/mohammad-rahiami-ab881036a/">Linkedin</a></span>
            <span className="underline hover:text-gray-300 duration-200"><a target="_blank" href="https://rahimi-portfolio.netlify.app/">Portfolio</a></span>
            <span className="hover:text-gray-300 duration-200">mohamad8rahimi3@gmail.com</span>
            <span className="hover:text-gray-300 duration-200">09306262923</span>
        </div>
          <p className="text-gray-300">© {new Date().getFullYear()} Mohamad Mahdi Rahimi Dev</p>
      </div>
    </footer>
  );
};

export default Footer;