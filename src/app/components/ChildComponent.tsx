import React from "react";

// Props ke liye type define karein
interface CarProps {
  carImage: string;
  carName: string;
  carPrice: string | number;
  carReviews: string | number;
}

const ChildComponent: React.FC<CarProps> = ({ carImage, carName, carPrice, carReviews }) => {
  return (
    <div className="car-card">
      <img src={carImage} alt={carName} className="mt-5" />
      <div className="flex flex-col justify-center items-center mt-5">
      <h3>{carName}</h3>
      <p>Price: {carPrice}</p>
      <p>Reviews: {carReviews}</p>
      </div>
    </div>
  );
};

export default ChildComponent;
