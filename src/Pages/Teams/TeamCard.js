import { Card } from "flowbite-react";
import React from "react";

export default function TeamCard({team}) {


    console.log(team);
    const {name, title, description, image} = team;
  return (
    <Card className="max-w-sm my-7">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt={name}
          height="96"
          src={image}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </span>
        <p className="text-center mt-5">{description}</p>
      </div>
    </Card>
  );
}
