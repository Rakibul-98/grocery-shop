import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import { Card } from "flowbite-react";
import NavBar from "../Shared/Navbar/NavBar";
import Foot from "../Shared/Footer/Foot";
import TeamDetails from "./TeamDetails";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://grocery-shop-server.onrender.com/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  // Destructure with default values to avoid errors
  const firstTeam = teams[0] || {};
  const { name = "", title = "", description = "", image = "" } = firstTeam;

  return (
    <>
      <NavBar />
      <div className="w-11/12 mx-auto my-10">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 md:col-span-1">
            <TeamDetails />
          </div>
          <div className="flex justify-center">
            <Card className="max-w-sm">
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
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {teams.slice(1).map((team, i) => (
            <div key={i} className="flex justify-center">
              <TeamCard team={team} />
            </div>
          ))}
        </div>
      </div>
      <Foot />
    </>
  );
}
