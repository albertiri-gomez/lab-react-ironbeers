import React from "react";
import axios from "axios";

const beersApi = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com"
});

export const beersList = async () => {
  const res = await beersApi.get(`/beers`);
  return res.data;
};

export const beerDetail = async id => {
  const res = await beersApi.get(`/beers/${id}`);
  return res.data;
};