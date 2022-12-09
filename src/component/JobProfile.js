import axios from "axios";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiList from "../lib/apiList";
import { SetPopupContext } from "../App";

const JobProfile = () => {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState("");
  const setPopup = useContext(SetPopupContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`${apiList.jobs}/${jobId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setJobDetails(response.data);
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

  return <div>Make job details ui</div>;
};

export default JobProfile;
