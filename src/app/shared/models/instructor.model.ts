import {Training} from "./training.model";

export class Instructor {
  constructor(
    public id: number,
    public phoneNumber: string,
    public name: string,
    public surname: string,
    public email: string,
    public isActivated: boolean,
    public isAdmin: boolean,
    public password: string,
    public trainings: Training[]
  ){}

}
