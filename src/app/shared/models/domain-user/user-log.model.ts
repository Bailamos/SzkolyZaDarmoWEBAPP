export class UserLog {
  public static map:  {[id: string] : string;} = {
    ["PhoneNumber"]: "Numer telefonu",
    ["Name"]: "Imię",
    ["Surname"]: "Nazwisko",
    ["Email"]: "Email",
    ["MarketStatusId"]: "Status",
    ["AreaOfResidenceId"]: "Region zamieszkania",
    ["EducationId"]: "Wykształcenie",
    ["SexId"]: "Płeć",
    ["hasDisability"]: "Niepełnosprawność",
    ["CountyId"]: "Powiat",
    ["VoivodeshipId"]: "Wojewodztwo",
    ["BirthYear"]: "Rok urodzenia"
  }

  constructor(
    public propertyName: string,
    public changeDate: Date,
    public oldValue: string,
    public newValue: string,
    public byWho: string)
  {

  }
}
