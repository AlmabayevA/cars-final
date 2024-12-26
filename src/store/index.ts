import {defineStore} from "pinia";

export const useCarStore = defineStore('carStore', {
    state: () => ({
        cars: [],
        rentedCars: []
    }),
    actions: {
        setCars(carsArray) {
            this.cars = carsArray
        },

        rentCarByIndex(index, startDate, endDate) {
            const carToRent = this.cars[index]
            if (!carToRent) return

            // Attach the rental period to the car object or store it in a new object
            const rentedCarWithDates = {
                ...carToRent,
                rentedFrom: startDate,
                rentedTo: endDate,
            }

            this.rentedCars.push(rentedCarWithDates)
        }
    },
    getters: {
        getAllCars: (state) => state.cars,
        getRentedCars: (state) => state.rentedCars
    }
})