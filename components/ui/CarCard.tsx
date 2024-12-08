"use client";
import React from "react";
import { Button } from "./button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CarCard = ({ image, name, type, price, oldPrice, specs, liked }: any) => {
  const router = useRouter();
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "red" : "none"}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.518 6.518 0 0116.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>
      <p className="text-sm text-gray-500">{type}</p>
      <Image
        src={image}
        alt={name}
        className="w-full h-36 object-contain my-4"
      />
      <div className="flex items-center text-sm text-gray-500 space-x-4">
        {specs.map((spec: any, index: number) => (
          <span key={index} className="flex items-center space-x-1">
            {spec.icon}
            <span>{spec.label}</span>
          </span>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-lg font-bold text-gray-800">${price}/day</p>
          {oldPrice && (
            <p className="text-sm text-gray-400 line-through">
              ${oldPrice}/day
            </p>
          )}
        </div>
        <Button
          variant="default"
          className="bg-blue-600 text-white"
          onClick={() => router.push("details")}
        >
          Rent Now
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
