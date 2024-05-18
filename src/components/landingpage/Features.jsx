// src/Features.js
import React from 'react';
import FeatureCard from "./FeatureCard";

const Features = () => (
  <div className="bg-indigo-400 py-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="mt-2 text-3xl font-mono leading-8 font-extrabold  text-black sm:text-4xl">Our Banking Services</p>
        <p className="mt-4 max-w-2xl font-mono font-extrabold text-xl text-black lg:mx-auto">Everything you need to manage your finances efficiently.</p>
      </div>
      <div className="mt-10">
        <div className="flex flex-wrap justify-center">
          <FeatureCard title="Secure Banking" description="Experience top-notch security for all your transactions." />
          <FeatureCard title="Easy Loans" description="Get loans at competitive rates with minimal hassle." />
          <FeatureCard title="24/7 Support" description="We're here to help you anytime, anywhere." />
        </div>
      </div>
    </div>
  </div>
);

export default Features;
