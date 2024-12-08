import Image from "next/image";
import React from "react";
import ads1 from "../../../assets/ads/Ads 1.png";
import ads2 from "../../../assets/ads/Ads 2.png";
import PickOrDropCard from "@/components/layout/PickOrDropCard";
import CarSection from "@/components/layout/CarSection";
import ksg from "../../../assets/cars/ksg.png";
import gtr from "../../../assets/cars/gtr.png";
import suv from "../../../assets/cars/suv.png";
import crv from "../../../assets/cars/crv.png";

const Main = () => {
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
    <>
      <div className="grid py-10 md:grid-cols-1 lg:grid-cols-2 place-items-center">
        <div className="col-span-2 md:col-span-1">
          <Image
            src={ads1}
            alt="Advertisement 1"
            width={0}
            height={0}
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Image
            src={ads2}
            alt="Advertisement 2"
            width={0}
            height={0}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="grid py-10 md:grid-cols-2 place-items-center">
        {/* Pick or Drop Section */}
        <PickOrDropCard title="Drop-off" />
        <PickOrDropCard />
      </div>
      <div className="p-8 bg-gray-100 min-h-screen">
        <CarSection title="Popular Car" cars={popularCars} />
        <CarSection title="Recommendation Car" cars={recommendationCars} />
      </div>
      <div className="p-8 bg-gray-100 ">
        <CarSection title="Recommendation Car" cars={popularCars} />
      </div>
    </>
  );
};

export default Main;
