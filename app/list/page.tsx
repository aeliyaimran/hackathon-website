import CarSection from "@/components/layout/CarSection";
import FilterSidebar from "@/components/layout/FilterSidebar";
import React from "react";
import ksg from "../../assets/cars/ksg.png";
import gtr from "../../assets/cars/gtr.png";
import suv from "../../assets/cars/suv.png";
import crv from "../../assets/cars/crv.png";
import PickOrDropCard from "../../components/layout/PickOrDropCard";

const Details = () => {
  const carDetails = {
    title: "Nissan GT – R",
    description:
      "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the 'race track'.",
    type: "Sport",
    steering: "Manual",
    capacity: "2 Person",
    gasoline: "70L",
    price: "$80.00",
    originalPrice: "$100.00",
    rating: "4.5",
    reviewsCount: "440+",
    reviews: [
      {
        name: "Alex Stanton",
        title: "CEO at Bukalapak",
        date: "21 July 2022",
        comment:
          "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        rating: 5,
        image: "/user1.jpg", // Replace with your image path
      },
      {
        name: "Skylar Dias",
        title: "CEO At Amazon",
        date: "20 July 2022",
        comment:
          "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        rating: 5,
        image: "/user2.jpg", // Replace with your image path
      },
    ],
  };
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
