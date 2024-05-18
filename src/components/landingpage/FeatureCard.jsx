import React from "react";

const FeatureCard = ({ title, description }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-6 bg-teal-500">
    <div className="font-bold font-serif text-xl mb-2">{title}</div>
    <p className="text-gray-700 font-serif text-base">{description}</p>
  </div>
);

export default FeatureCard;
