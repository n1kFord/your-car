import { ICar } from "../../../types/car";
import { Car } from "../../components/Car";

const testCar: ICar = {
  name: "Audi S3 Car",
  mileage: "10k",
  thumbnailSrc:
    "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
  dailyPrice: 70,
  monthlyPrice: 1600,
  gearType: "Auto",
  gas: "Petrol",
};

const testCar2: ICar = {
  name: "HONDA cITY 5 Seater Car",
  mileage: "20k",
  thumbnailSrc:
    "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
  dailyPrice: 50,
  monthlyPrice: 1500,
  gearType: "Auto",
  gas: "Petrol",
};

const testCar3: ICar = {
  name: "BMW 5 Series",
  mileage: "24k",
  thumbnailSrc: "https://imgd.aeplcdn.com/0x0/n/gz3dpra_1422148.jpg",
  dailyPrice: 80,
  monthlyPrice: 1740,
  gearType: "Auto",
  gas: "Petrol",
};

export const cars = [
  <Car {...testCar} />,
  <Car {...testCar2} />,
  <Car {...testCar3} />,
  <Car {...testCar2} />,
  <Car {...testCar} />,
  <Car {...testCar2} />,
];
