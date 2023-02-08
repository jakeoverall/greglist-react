import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js";

class CarsService {
  async editCar(formData, carId) {
    const res = await api.put(`api/cars/${carId}`, formData)
    console.log('[edit car]', res.data);
    let oldCarIndex = AppState.cars.findIndex(c => c.id == carId)
    AppState.cars.splice(oldCarIndex, 1, new Car(res.data))
  }

  async removeCar(carId) {
    const res = await api.delete('api/cars/' + carId)
    console.log('[removing car]', res.data);
    AppState.cars = AppState.cars.filter(car => car.id != carId)
  }

  async createCar(formData) {
    // NOTE                       VVV post request will create data on our api (hopefully)
    const res = await api.post('api/cars', formData)
    console.log('[create car]', res.data);
    let actualCar = new Car(res.data)
    AppState.cars.push(actualCar)
  }


  async getCars() {
    AppState.cars = []
    const response = await api.get('api/cars')
    // NOTE always log the response data
    console.log('[get cars]', response.data)
    AppState.cars = response.data.map(car => new Car(car))
  }

}

export const carsService = new CarsService()