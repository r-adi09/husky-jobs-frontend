import axios from "axios";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiList from "../lib/apiList";
import { SetPopupContext } from "../App";

const PublicProfile = () => {
  const { profileId } = useParams();
  const [profileDetails, setProfileDetails] = useState("");
  const setPopup = useContext(SetPopupContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`${apiList.user}/${profileId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProfileDetails(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        setPopup({
          open: true,
          severity: "error",
          message: "Error",
        });
      });
  };

  return <div>Make profile screen ui</div>;
};

export default PublicProfile;
