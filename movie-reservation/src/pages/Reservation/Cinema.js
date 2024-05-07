import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { reservationAction } from "../../store/reservation-slice";
import { useDispatch } from "react-redux";

const Cinema = (locationtheaters) => {
  const locationTheatersArray =
    locationtheaters.locationtheaters.locationTheaters;
  const selectmovie = useSelector((state) => state.reservation.selectmovie);
  const selectcinema = useSelector((state) => state.reservation.selectcinema);

  const moviecinema = locationTheatersArray?.filter(
    (element) => element.movie_name === selectmovie
  );

  const cinemalist = [];
  moviecinema?.forEach((item) => {
    if (!cinemalist.includes(item.cinema_name)) {
      cinemalist.push(item.cinema_name);
    }
  });

  const dispatch = useDispatch();

  const selectcinemahandler = (movie) => {
    dispatch(reservationAction.selectcinema(movie));
  };

  return (
    <div>
      {locationtheaters &&
        selectmovie &&
        cinemalist?.map((cinema) => (
          <div
            style={{
              backgroundColor:
                cinema === selectcinema ? "#D3D3D3" : "transparent",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => selectcinemahandler(cinema)}
          >
            {cinema}
          </div>
        ))}
    </div>
  );
};

export default Cinema;
