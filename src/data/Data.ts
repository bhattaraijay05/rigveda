import React from "react";
import data from "./data.json";

export const getAllMandalam = () => {
  return data.mandalams.map((mandalam) => {
    return {
      name: mandalam.name,
      id: mandalam.id,
      aadhayaa: mandalam.aadhayaa,
    };
  });
};
