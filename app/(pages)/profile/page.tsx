import React from "react";
// import "./profile.css";
import Asside from "@/app/components/asside";

const Profile = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  console.log(searchParams);
  
  return (
    <div className="bg-[#F6F8FE]">
      <div className=" bg-[#F6F8FE] flex w-[90%] py-20 m-auto">
       <Asside/>
      </div>
    </div>
  );
};

export default Profile;
