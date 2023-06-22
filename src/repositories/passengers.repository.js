import db from "../database/database.js"

export  function getPassangers(){
    return db.query(`SELECT * FROM passengers LIMIT 10;`)
}

export function getTravelsByPassengerId(passengerId){
    return db.query(`SELECT * FROM passenger_travels WHERE passengerId=$1;` , [passengerId])
}