import PropTypes from 'prop-types';
import React from "react";
import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { carsService } from "../services/CarsService.js";
import Pop from "../utils/Pop.js";
import './styles/CarCard.scss';

/**@param {{car:Car}} props */
export default function CarCard({ car }) {

  async function removeCar() {
    try {
      const yes = await Pop.confirm('Remove the car?')
      if (!yes) { return }
      await carsService.removeCar(car.id)
    } catch (e) {
      Pop.error(e)
    }
  }


  function setActiveCar() {
    AppState.car = car
  }

  return (
    <div className="card car-card">
      <img src={car.imgUrl} alt="" data-bs-toggle="modal" data-bs-target="#carModal" className="selectable" onClick={setActiveCar} />
      <div className="card-body">
        <div className="d-flex justify-content-between">

          <p><b>{car.make} {car.model}</b></p>
          <div className={AppState.car?.id == car.id ? "d-flex justify-content-between" : "d-none"} >
            <button className="btn ms-1" type="button" onClick={removeCar} title="Delete Car!"><span>✖️</span></button>
          </div>
        </div>
      </div>
    </div>
  )

}

CarCard.propTypes = {
  car: PropTypes.instanceOf(Car)
}
