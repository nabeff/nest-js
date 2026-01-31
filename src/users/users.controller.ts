import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersControllers{

    @Get()
    getUser(@Query() query: any){
       const userservice = new UsersService();
       if(query.gender){
        return userservice.getAllUsers().filter(u => u.gender === query.gender)
       }
       return userservice.getAllUsers()

    }

    @Get(':id')
        getUserById(@Param('id') id: any){
            const userservice = new UsersService();
            return userservice.getUserById(+id)
    }

    @Post()
    createUser(){
        const user = {id:3 , name: "john", age:28, gender:"male", isMarried: true};
        const userservice = new UsersService();
        userservice.createUser(user);
        return "user created";

    }
}