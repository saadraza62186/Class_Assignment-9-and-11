import React from "react";
import ChildComponent from "./components/ChildComponent";

export default function Home() {
  const cars = [
    { carImage: "/toyota.jpg", carName: "Toyota", carPrice: 5000000, carReviews: 20 },
    { carImage: "/civic.jpg", carName: "Civic", carPrice: 8000000, carReviews: 25 },
    { carImage: "/city1.jpg", carName: "City", carPrice: 3000000, carReviews: 20 },
    { carImage: "/alto.jpg", carName: "Alto", carPrice: 1000000, carReviews: 40 },
  ];

  return (
    <div className="sm:flex sm:justify-center gap-2 mt-[100px] md:gap-4 md:mr-8 lg:gap-[80px] ml-9">
      {cars.map((car, index) => (
        <ChildComponent
          key={index}
          carImage={car.carImage}
          carName={car.carName}
          carPrice={car.carPrice}
          carReviews={car.carReviews}
        />
      ))}
    </div>
  );
}
