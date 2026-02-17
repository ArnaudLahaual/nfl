// src/hooks/useGet.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../../api/axiosConfig";
import { setPlayersList } from "../../redux/Players/players";

export const useGetPlayers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const resp = await axiosInstance.get("/players");
        dispatch(setPlayersList(resp.data));
      } catch (err) {
        console.error("Erreur lors de la récupération des joueurs :", err);
      }
    };

    getPlayers();
  }, [dispatch]);
};
