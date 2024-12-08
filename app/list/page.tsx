import CarSection from "@/components/layout/CarSection";
import FilterSidebar from "@/components/layout/FilterSidebar";
import React from "react";
import ksg from "../../assets/cars/ksg.png";
import gtr from "../../assets/cars/gtr.png";
import suv from "../../assets/cars/suv.png";
import crv from "../../assets/cars/crv.png";
import PickOrDropCard from "../../components/layout/PickOrDropCard";

const Details = () => {
  const popularCars = [
    {
      image: ksg,
      name: "Koenigsegg",
      type: "Sport",
      price: 99,
      specs: [
        { label: "90L", icon: <i>🏎️</i> },
        { label: "Manual", icon: <i>⚙️</i> },
        { label: "2 People", icon: <i>👥</i> },
      ],
      liked: true,
    },
    {
      image: gtr,
      name: "Nissan GT – R",
      type: "Sport",
      price: 80,
      oldPrice: 100,
      specs: [
        { label: "80L", icon: <i>🏎️</i> },
        { label: "Manual", icon: <i>⚙️</i> },
        { label: "2 People", icon: <i>👥</i> },
      ],
      liked: false,
    },
    {
      image: ksg,
      name: "Koenigsegg",
      type: "Sport",
      price: 99,
      specs: [
        { label: "90L", icon: <i>🏎️</i> },
        { label: "Manual", icon: <i>⚙️</i> },
        { label: "2 People", icon: <i>👥</i> },
      ],
      liked: true,
    },
    {
      image: gtr,
      name: "Nissan GT – R",
      type: "Sport",
      price: 80,
      oldPrice: 100,
      specs: [
        { label: "80L", icon: <i>🏎️</i> },
        { label: "Manual", icon: <i>⚙️</i> },
        { label: "2 People", icon: <i>👥</i> },
      ],
      liked: false,
    },
  ];
  const recommendationCars = [
    {
      image: crv,
      name: "CR – V",
      type: "SUV",
      price: 80,
      specs: [
        { label: "80L", icon: <i>🚗</i> },
        { label: "Manual", icon: <i>⚙️</i> },
        { label: "6 People", icon: <i>👥</i> },
      ],
      liked: true,
    },
    {
      image: suv,
      name: "All New Rush",
      type: "SUV",
      price: 72,
      specs: [
        { label: "70L", icon: <i>🚗</i> },
        { label: "Manual", icon: <i>⚙️</i> },
        { label: "6 People", icon: <i>👥</i> },
      ],
      liked: false,
    },
    {
      image: crv,
      name: "CR – V",
      type: "SUV",
      price: 80,
      specs: [
        { label: "80L", icon: <i>🚗</i> },
        { label: "Manual", icon: <i>⚙️</i> },
        { label: "6 People", icon: <i>👥</i> },
      ],
      liked: true,
    },
    {
      image: suv,
      name: "All New Rush",
      type: "SUV",
      price: 72,
      specs: [
        { label: "70L", icon: <i>🚗</i> },
        { label: "Manual", icon: <i>⚙️</i> },
        { label: "6 People", icon: <i>👥</i> },
      ],
      liked: false,
    },
  ];
  return (
    <div className="flex">
      <FilterSidebar />
      <div className="p-4 md:p-8">
        <div className="grid py-10 md:grid-cols-1 lg:grid-cols-2 place-items-center">
          <PickOrDropCard title="Drop-off" />
          <PickOrDropCard />
        </div>

        <div className="p-8 bg-gray-100 min-h-screen mt-10">
          <CarSection title="Popular Car" cars={popularCars} />
          <CarSection title="Recommendation Car" cars={recommendationCars} />
        </div>
      </div>
    </div>
  );
};

export default Details;
