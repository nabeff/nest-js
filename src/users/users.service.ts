export class UsersService {
    users: {id : number , name: string, age : number, gender:string, isMarried: boolean}[] = [
        {id : 1, name: ' Adam ', age : 25, gender : 'male', isMarried : false},
        {id : 1, name: ' Sara ', age : 25, gender : 'female', isMarried : true},
    ]

    getAllUsers(){
        return this.users;
    }

    getUserById(id: number){
        return this.users.find(x => x.id === id);
    }


    createUser(user: {id:number , name: string, age:number, gender:string, isMarried: boolean}){
        this.users.push(user)
    }
}