import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebook, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="w-full mx-auto font-serif bg-black text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl font-serif mb-3">Download our Nidhi app</h3>
          <p  className="font-mono fotn-bold"> Stay Use Our Services making banking more accessible and convenient for customers. All day, Every day.</p>
          <div className="flex justify-center my-10">
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8"
                alt="Google Play Store"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                className="w-7 md:w-8"
                alt="Apple Store"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex gap-5 flex-wrap flex-col md:flex-row  items-center md:justify-center text-sm text-white-400">
          <div className=" ">
            <span className="px-3 font-serif font-bold">About us</span>
            <span className="px-3 border-l font-serif font-bold">
              Contact us
            </span>
            <span className="px-3 border-l font-serif font-bold">
              Privacy Policy
            </span>
          </div>
          <div className="text-center font-serif font-bold text-white py-4">
             NidhiBank . &copy; 2024 All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
