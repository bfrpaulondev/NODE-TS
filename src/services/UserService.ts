import { Express, Request, Response } from "express";

const db = [{
    name:"bruno",
    email:"bfrpaulondev@gmail.com"
}]

export class UserService {
    
    createUser = (name: string , email: string) => {
        const user = {
            name,
            email,
        }
        db.push(user)
        console.log("db atualizado:", db)
    }

    returnAll = () =>{
        return db
    }
}