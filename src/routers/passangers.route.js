import { Router } from "express";
import { getPassengerTravels } from "../controllers/passangers.controllers.js";

const passengerRouter = Router()

passengerRouter.get("/passengers/travels" , getPassengerTravels)

export default passengerRouter