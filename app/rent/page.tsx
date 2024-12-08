import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";
// import { Label } from "@radix-ui/react-select";
import React from "react";
import gtr from "../../assets/cars/gtr.png";
import { Star } from "lucide-react";

export default function RentalForm() {
  return (
    <div className="container mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Section */}
      <div className="col-span-2 space-y-6">
        {/* Step 1: Billing Info */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Billing Info</h2>
            <p className="text-gray-500">Please enter your billing info</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Your name" />
              <Input placeholder="Phone number" />
              <Input placeholder="Address" />
              <Input placeholder="Town / City" />
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Rental Info */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Rental Info</h2>
            <p className="text-gray-500">Please select your rental date</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Pick-Up</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger className="w-48">
                      <span>Select your city</span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-york">New York</SelectItem>
                      <SelectItem value="san-francisco">
                        San Francisco
                      </SelectItem>
                      <SelectItem value="los-angeles">Los Angeles</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input type="date" />
                  <Input type="time" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Drop-Off</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger className="w-48">
                      <span>Select your city</span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-york">New York</SelectItem>
                      <SelectItem value="san-francisco">
                        San Francisco
                      </SelectItem>
                      <SelectItem value="los-angeles">Los Angeles</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input type="date" />
                  <Input type="time" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Payment Method */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Payment Method</h2>
            <p className="text-gray-500">Please enter your payment method</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="flex items-center">
                  <Checkbox name="payment" id="credit-card" className="mr-2" />
                  Credit Card
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <Input placeholder="Card number" />
                  <Input placeholder="Expiration date" />
                  <Input placeholder="Card holder" />
                  <Input placeholder="CVC" />
                </div>
              </div>
              <label className="flex items-center">
                <Checkbox name="payment" id="paypal" className="mr-2" />
                PayPal
              </label>
              <label className="flex items-center">
                <Checkbox name="payment" id="bitcoin" className="mr-2" />
                Bitcoin
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Step 4: Confirmation */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Confirmation</h2>
            <p className="text-gray-500">
              We are getting to the end. Just a few clicks and your rental is
              ready!
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <label className="flex items-center">
                <Checkbox className="mr-2" />I agree with sending marketing and
                newsletter emails. No spam, promised!
              </label>
              <label className="flex items-center">
                <Checkbox className="mr-2" />I agree with our terms and
                conditions and privacy policy.
              </label>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col">
              <Button variant="default" className="bg-blue-600 w-[200px]">
                Rent Now
              </Button>
              <p className="text-gray-500 mt-2 text-center">
                All your data are safe. We use advanced security to provide you
                the best experience ever.
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Right Section: Rental Summary */}
      <Card className="bg-gray-50">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Rental Summary</h2>
          <p className="text-gray-500">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-5">
            <Image
              src={gtr}
              width={0}
              height={0}
              objectFit="cover"
              alt={"gtr"}
              className="bg-blue-500 w-[150px] h-[110px] object-contain p-4 rounded ronded-lg"
            />
            <div className="flex flex-col">
              <h1 className="font-bold text-lg">Nissan GT - R</h1>
              <div className="flex">
                <Star fill="yellow" color="yellow" />
                <Star fill="yellow" color="yellow" />
                <Star fill="yellow" color="yellow" />
                <Star fill="yellow" color="yellow" />
                <Star fill="none" color="grey" />
                <p className="ml-2 text-sm text-slate-600 font-semibold">
                  440+ reviewers
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center border-b pb-2 mt-5">
            <span className="font-medium">Subtotal</span>
            <span className="font-semibold">$80.00</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-500">Tax</span>
            <span className="text-gray-500">$0</span>
          </div>
          <div className="mt-4">
            <Button variant="secondary" className="w-full">
              Apply promo code
            </Button>
          </div>
          <div className="flex justify-between items-center font-bold text-lg mt-4">
            <span>Total Rental Price</span>
            <span>$80.00</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
