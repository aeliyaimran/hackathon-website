"use client";
import CarSection from "@/components/layout/CarSection";
import FilterSidebar from "@/components/layout/FilterSidebar";
import React from "react";
import ksg from "../../assets/cars/ksg.png";
import gtr from "../../assets/cars/gtr.png";
import suv from "../../assets/cars/suv.png";
import crv from "../../assets/cars/crv.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Details = () => {
  const router = useRouter();
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
      {/* write code like the left side is for sidebar and the right side will be the content */}
      <div className="p-4 md:p-8">
        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Car Details Section */}
          <div className="col-span-2 bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">
              Sports car with the best design and acceleration
            </h2>
            <p className="mt-2 text-gray-600">
              Safety and comfort while driving a futuristic and elegant sports
              car
            </p>
            <Image
              src={gtr}
              alt="Car"
              width={400}
              height={200}
              className="mt-4 rounded-lg"
            />
            {/* Thumbnails */}
            <div className="flex mt-4 gap-4">
              <Image
                src={gtr}
                alt="Thumbnail 1"
                width={100}
                height={80}
                className="rounded-lg border-2 border-blue-500"
              />
              <Image
                src={gtr}
                alt="Thumbnail 2"
                width={100}
                height={80}
                className="rounded-lg"
              />
              <Image
                src={gtr} // Replace with thumbnail paths
                alt="Thumbnail 3"
                width={100}
                height={80}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{carDetails.title}</h2>
            <p className="text-gray-500">{carDetails.reviewsCount} Reviewer</p>
            <p className="mt-2 text-gray-700">{carDetails.description}</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Type Car: {carDetails.type}</li>
              <li>Steering: {carDetails.steering}</li>
              <li>Capacity: {carDetails.capacity}</li>
              <li>Gasoline: {carDetails.gasoline}</li>
            </ul>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-2xl font-bold text-blue-600">
                {carDetails.price}
                <span className="ms-2 text-sm text-gray-500 line-through">
                  {carDetails.originalPrice}
                </span>
              </p>
              <button
                className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                onClick={() => router.push("rent")}
              >
                Rent Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">
            Reviews ({carDetails.reviews.length})
          </h3>
          <div className="mt-4 space-y-6">
            {carDetails.reviews.map((review, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-gray-100 rounded-lg shadow-md"
              >
                <Image
                  src={review.image}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.title}</p>
                  <p className="mt-2 text-gray-700">{review.comment}</p>
                  <p className="mt-2 text-sm text-gray-500">{review.date}</p>
                  <div className="flex mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
            Show All
          </button>
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
