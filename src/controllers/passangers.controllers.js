import { getPassangers , getTravelsByPassengerId} from "../repositories/passengers.repository.js";

export async function getPassengerTravels(req , res) {

    try {
        const allPassengers = await getPassangers()
        
        const travels = allPassengers.rows.map( (p) => {
            getTravelsByPassengerId(p.id)
        })

        return res.send(allPassengers.rows)
        
    } catch (error) {
        console.error(500)
    }
}