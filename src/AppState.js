import { action, makeAutoObservable } from "mobx"
import { isValidProp } from "./utils/isValidProp.js"


class ObservableAppState {

  user = null
  /** @type {import('./models/Account.js').Account | null} */
  account = null

  /** @type {import('./models/Car.js').Car[]} */
  cars = []

  /** @type {import('./models/Car.js').Car} */
  car = null

  posts = []
  newer = null
  older = null
  profile = null

  constructor() {
    makeAutoObservable(this)
  }

}

// eslint-disable-next-line no-undef
export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    action(() => {
      // where the reactive magic happens
      target[prop] = value
    })()
    return true
  }
})