import express, { Request, Response, request, response } from "express"
import { router } from "./routes";
const server = express();
server.use(express.json())
server.use(router)
server.get("/", (request: Request, response: Response) => {
    return response.status(200).json({ message: "ok API" })
})
server.listen(5000, () => {
    console.log("server online update")
})