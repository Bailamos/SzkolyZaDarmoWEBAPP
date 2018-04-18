export class SaveUserResource {
  public phoneNumber: string;
  public name: string;
  public surname: string;
  public email: string;
  public birthDay: Date;
  public marketStatusId: number;
  public areaOfResidenceId: number;
  public educationId: number;
  public sexId: number;
  public countyId: number;
  public voivodeshipId: number;
  public hasDisability: boolean;
  public note : {description: string};
  public entry: { trainingId: number; };
}


