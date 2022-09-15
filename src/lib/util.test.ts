import { createOrUpdateCar, fetchCar, fetchCarsList } from './util';
import { CarStatus } from './types'

describe("API Calls", () => {
    describe("fetchCars", () => {
        it("should succeed with valid path", async() => {
            const res = await fetchCarsList()
            const len = res.length
            expect(len).toBeGreaterThan(0)
            expect(res.every(car => car.id)).toBe(true)
        })
    })

    describe("fetch a single car", () => {
        it("should succeed with valid ID", async() => {
            const id = 12345
            const res = await fetchCar(id)
            expect(res.id).toEqual(id)
        })

        it("should throw 404 if no car found", async() => {
            const id = Math.round(Math.random() * 1000000000)

            try {
                await fetchCar(id)
            } catch(e:any) {
                expect(e.message).toEqual("Not Found. Go Fish!")
            }
        })

        it("should throw 400 if id contains letters", async() => {
            const id = "123abc"
            try {
                await fetchCar(id)
            } catch(e:any) {
                expect(e.message).toEqual("Bad Request")
            }
        })
    })

    describe("Create Asset", () => {
        it("should succeed with valid ID", async() => {
            const randomId = () => Math.round(Math.random() * 1000000000)
            const id = randomId()
            const res = await createOrUpdateCar({
                id, 
                brand: 'Corvette',
                licensePlate: "VROOM VROOM",
                status: 'available'
            })
            expect(res.id).toEqual(id)
            expect(res.manufacturer).toBeFalsy()
        })

        // // BREAKS TESTING because argument "id" does not match type "Car"
        // it("should throw 400 with invalid id", async() => {
        //     const id = "123abc"
        //     try {
        //         await createOrUpdateCar({
        //             id, 
        //             brand: 'Corvette',
        //             licensePlate: "SEE ME FLY",
        //         })
        //     } catch (e:any) {
        //         expect(e.message).toBe("Bad Request")
        //     }
        // })

        // // BREAKS TESTING because argument "status" does not match type "Car"
        // it("should throw 400 with invalid status", async() => {
        //     const id = Math.round(Math.random() * 1000000000)
        //     try {
        //         await createOrUpdateCar({
        //             id, 
        //             brand: 'Corvette',
        //             licensePlate: "SEE ME FLY",
        //             status: "vroom vroom"
        //         })
        //     } catch (e:any) {
        //         expect(e.message).toBe("Bad Request")
        //     }
        // })
    })
})
