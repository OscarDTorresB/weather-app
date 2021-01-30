import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useWithReactComponent from "sweetalert2-react-content";

import { removeCity } from "../actions/actions";
import { useDispatch } from "react-redux";

export default function Card({ min, max, name, img, id }) {
  const dispatch = useDispatch();

  const MySwal = useWithReactComponent(Swal);

  const removePopUp = () =>
    MySwal.fire({
      title: "Are you sure?",
      text: `Are you sure you want to delete ${name}!`,
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, leave it!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeCity(id));
        MySwal.fire({
          icon: "success",
          titleText: `${name} was Deleted.`,
          text: `You still can add ${name} through the search bar.`,
          padding: "0.75rem",
          showConfirmButton: false,
          timer: "3500",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        MySwal.fire({
          icon: "success",
          titleText: `I'll keep it.`,
          text: `${name} was not removed and it's still on your page.`,
          padding: "0.75rem",
          showConfirmButton: false,
          timer: "3500",
        });
      }
    });

  return (
    <div className="shadow hover:shadow-lg mt-5 mx-2 px-6 py-2 bg-white">
      <div id="closeIcon" className="float-right">
        <button onClick={removePopUp} className="">
          X
        </button>
      </div>
      <Link to={`/weather-app/City/${id}`}>
        <div className="">
          <h5 className="font-bold text-xl text-green-500">{name}</h5>
          <div className="flex mt-5">
            <div>
              <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-300 text-center">
                Min
              </p>
              <p className="font-semibold text-center">{min}° ❄</p>
            </div>
            <div className="pl-8">
              <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 text-center">
                Max
              </p>
              <p className="font-semibold text-center">{max}° 🌡</p>
            </div>
            <div>
              <img
                src={"https://openweathermap.org/img/wn/" + img + "@2x.png"}
                width="80"
                height="80"
                alt=""
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
