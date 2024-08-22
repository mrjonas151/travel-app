import prisma from "../prisma/prismaClient";
import { UserRegister } from "../models/userModel";

class UserService {
  static async createUserService({id, email, name, last_name}: UserRegister) {

    const userAlreadyExists = await prisma.user.findFirst({
        where:{
            email: email
        }
    })

    if(userAlreadyExists){
        return;
    }

    const newUser = await prisma.user.create({
      data: {
        id,
        email,
        name,
        last_name
      },
      select:{
            id: true,
            email: true,
            name: true,
            last_name: true
        }
    });

    return newUser;
  }
}

export { UserService };