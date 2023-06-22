import express from "express";
import httpStatus from "http-status";
import passengerRouter from "./routers/passangers.route.js"

const app = express();
const port = process.env.PORT || 5000;

app.get("/health", (req, res) => res.sendStatus(httpStatus.OK));
app.use(passengerRouter)

app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})