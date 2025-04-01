// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState({});

  //   useEffect(() => {
  //     async function fetchUserData() {
  //       try {
  //         let response = await fetch("https://api.github.com/users/surajkr97");
  //         let data = await response.json();
  //         setData(data);
  //         console.log("User Data: ", data);
  //       } catch (error) {
  //         console.log("Error fetching data: ", error);
  //       }
  //     }
  //     fetchUserData();
  //   }, []);

  return (
    <div className="lg:p-22 px-3 py-12">
      <h1 className="flex mx-auto justify-center text-2xl bg-gray-600 text-white rounded-lg w-fit px-4 py-2 mb-6"><FaGithub className="h-7 w-7"/>&nbsp; Live Github Data</h1>
      <div className="flex mx-auto justify-center p-4 gap-6">
        <img
          className="max-w-37 h-full rounded-xl"
          src={data.avatar_url}
          alt="Profile Picture"
        />
        <div className="align-middle">
          <p>Username: {data.login}</p>
          <p>Name: {data.name}</p>
          <p>Github Followers: {data.followers}</p>
          <p>Github Following: {data.following}</p>
          <p className="hidden sm:block">Location: {data.location}</p>
          <p>Bio: {data.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  let response = await fetch("https://api.github.com/users/surajkr97");
  return response.json();
};
