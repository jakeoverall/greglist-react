import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { AppState } from "../AppState.js";
import CarCard from "../components/CarCard.jsx";
import CarForm from "../components/CarForm.jsx";
import { Car } from "../models/Car.js";
import { carsService } from "../services/CarsService.js";
import Pop from "../utils/Pop.js";

function HomePage() {

  async function getCars() {
    try {
      await carsService.getCars()
    } catch (e) {
      Pop.error(e)
    }
  }

  function createCar() {
    AppState.car = new Car({})
  }


  let cars = (AppState.cars.map(c => {
    return (
      <div className="col-md-4 my-3" key={c.id}>
        <CarCard car={c} />
      </div>
    )
  }))



  useEffect(() => {
    getCars()
  }, [])


  return (
    <section className="home-page">

      <div className="container my-3">
        <div className="row">
          {cars}
        </div>
        <div className="row sticky-bottom">
          <div className="col-12 text-end">
            <button className="btn btn-dark" title="Sell Car" onClick={createCar} data-bs-toggle="modal" data-bs-target="#carModal">
              <span className="display-6">🏎️</span>
            </button>
          </div>
        </div>
      </div>

      <div className="modal fade" id="carModal" tabIndex={-1} aria-labelledby="carModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Car</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              {AppState.car ? <CarForm /> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default observer(HomePage)