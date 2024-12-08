import React from "react";
import CarCard from "../ui/CarCard";

const CarSection = ({ title, cars }:any) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <a href="#" className="text-blue-600 text-sm">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car: any, index: number) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
  );
};

export default CarSection;
