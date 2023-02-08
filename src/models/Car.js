export class Car {
  constructor(data = {}) {
    this.id = data.id || ''
    this.createdAt = data.createdAt || ''
    this.description = data.description || ''
    this.imgUrl = data.imgUrl || ''
    this.make = data.make || ''
    this.model = data.model || ''
    this.price = data.price || 0
    this.year = data.year || 0
  }
}