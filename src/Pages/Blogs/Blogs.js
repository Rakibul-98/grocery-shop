import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import NavBar from "../Shared/Navbar/NavBar";
import Foot from "../Shared/Footer/Foot";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://grocery-shop-server.onrender.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <NavBar />
      <div className="w-11/12 mx-auto grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-5 my-10">
        {blogs.map((blog, i) => (
          <div key={i}>
            <Card className="max-w-sm my-3">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog.title}
              </h5>
              <img className="h-56" src={blog.image} alt="" />
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {blog.shortDescription}
              </p>
              <Button>
                <a target="_blank" rel="noopener noreferrer" href={blog.link}>Read More</a>
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Card>
          </div>
        ))}
      </div>
      <Foot />
    </>
  );
}
