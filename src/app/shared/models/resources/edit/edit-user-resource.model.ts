export class EditUserResource {
  public byWho: string;
  public phoneNumber: string;
  public name: string;
  public surname: string;
  public email: string;
  public birthYear: number;
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


