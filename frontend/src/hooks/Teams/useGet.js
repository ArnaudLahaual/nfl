// src/hooks/useGet.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../../api/axiosConfig";
import { setTeamsList } from "../../redux/Teams/teams";

export const useGet = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTeams = async () => {
      try {
        const resp = await axiosInstance.get("/teams");
        console.log("resp", resp);

        dispatch(setTeamsList(resp.data));
      } catch (err) {
        console.error("Erreur lors de la récupération des équipes :", err);
      }
    };

    getTeams();
  }, [dispatch]);
};
