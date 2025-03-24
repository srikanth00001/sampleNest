/* eslint-disable */

import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsEmail()
    email :string;

    @IsNotEmpty()
    @MinLength(6,{message:'Password must be atleast 6 characters'})
    password :string;
}
