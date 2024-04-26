import { Request, Response } from "express"
import { UserService } from "../services/UserService"


export class UserController {
    createUser = 
        (request: Request, response: Response) =>{
            const userService = new UserService()
            const user =request.body

            if (!user.name) {
                return response.status(400).json({message: "Bad request: name Invalid"})
            }

             userService.createUser(user.name , user.email)

            return response.status(201).json({message:"Post Sucess"})
        }

        returnAll = (request: Request, response: Response) => {
            const userService = new UserService()
            const users = userService.returnAll()
            return response.status(200).json(users)
        }
    }


