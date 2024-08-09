import React from "react";

interface InfoCardProps {
  title: string;
  number: string | number;
  icon: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, number, icon }) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-2xl max-w-sm h-36 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <h2 className="text-base font-bold top-0 left-0">{title}</h2>
        <img src={icon} alt={`${title} icon`} className="h-16 w-16" />
      </div>

      <div className="text-5xl font-bold px-4 mb-4 top-0">{number}</div>
    </div>
  );
};

export default InfoCard;
