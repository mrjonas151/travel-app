import { IsString, IsEmail, IsNotEmpty } from "class-validator";
import { Trips } from "../utils/types/trip";

class User {
    @IsString({ message: "Id must be String" })
    @IsNotEmpty({ message: "Id must be not empty" })
    id: string;


    @IsString({ message: "Email must be String" })
    @IsNotEmpty({ message: "Email must be not null" })
    @IsEmail({}, { message: "Invalid Email" })
    email: string;

    @IsString({ message: "Name must be String" })
    name: string;

    @IsString({ message: "Name must be String" })
    lastName: string;


    trips: Trips;

    dateOfInclude: string;

    updatedAt: string;

    constructor(payload: User){
        this.id = payload.id;
        this.email = payload.email;
        this.name = payload.name;
        this.lastName = payload.lastName;
        this.trips = payload.trips;
        this.dateOfInclude = payload.dateOfInclude;
        this.updatedAt = payload.updatedAt;
    }
}

class UserRegister {

    @IsString({ message: "Id must be String" })
    @IsNotEmpty({ message: "Id must be not empty" })
    id: string;

    @IsString({ message: "Name must be String" })
    name: string;

    @IsString({ message: "Last Name must be String" })
    last_name: string;
  
    @IsEmail({}, { message: "Invalid Email" })
    @IsNotEmpty({ message: "Email must be not null " })
    @IsString({ message: "Email must be String" })
    email: string;
  
    trips?: Trips;
  
    constructor(payload: UserRegister) {
        this.id = payload.id;
        this.email = payload.email;
        this.name = payload.name;
        this.last_name = payload.last_name;
        this.trips = payload.trips;
    }
}

export { User, UserRegister };