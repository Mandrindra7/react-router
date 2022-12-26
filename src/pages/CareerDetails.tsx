import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Career } from "./Careers";

const CareerDetails = () => {
  const { id } = useParams();
  const career: Career = useLoaderData() as Career;
  return (
    <div className="carrer-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam
          assumenda quasi ipsa facilis laborum rerum voluptatem!
        </p>
      </div>
    </div>
  );
};

export default CareerDetails;

export const getCareerDetail = async (props: any) => {
  const { id } = props.params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  return res.json();
};
