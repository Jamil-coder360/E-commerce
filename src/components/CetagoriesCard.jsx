import React from "react";
import { v4 as uuidv4 } from 'uuid';
import MobileIcon from "../components/Icons/MobileIcon";
import MonitorIcon from "../components/Icons/MonitorIcon"
import CameraIcon from "./Icons/CameraIcon";
import WatchIcon from "../components/Icons/WatchIcon"
import HeadphoneIcon from "../components/Icons/HeadphoneIcon"
import GamepadeIcon from "../components/Icons/GamepadeIcon"

const CetagoriesCard = () => {
  const cardData = [
    {
      id: uuidv4(),
      title: "Phones",
      icon: <MobileIcon />,
    },
    {
      id: uuidv4(),
      title: "Computers",
      icon: <MonitorIcon />,
    },
    {
      id: uuidv4(),
      title: "SmartWatch",
      icon: <WatchIcon />,
    },
    {
      id: uuidv4(),
      title: "Camera",
      icon: <CameraIcon />,
    },
    {
      id: uuidv4(),
      title: "HeadPhones",
      icon: <HeadphoneIcon />,
    },
    {
      id: uuidv4(),
      title: "Gaming",
      icon: <GamepadeIcon/>,
    },
  ];

  return (
    <div className="flex gap-4">
      {cardData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center hover:bg-secondary group p-4 w-[170px] h-[135px] border border-border rounded hover:bg-black transition"
        >
          <div className=" group-hover:stroke-[#F5F5F5] stroke-black transition">
            {item.icon}
          </div>

          <span className="block mt-2 group-hover:text-[#F5F5F5] transition">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CetagoriesCard;