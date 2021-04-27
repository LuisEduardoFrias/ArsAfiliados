
export class Affiliate {

    Id: number;
    IdentificationCard: string;
    Name : string;
    LastName : string;
    DateTime: Date;
    Nacionality: string;
    Sex: string;
    SocialSecurityNumber:  string;
    RegistrationDate: Date;
    AmountConsumed: number;
    Status: boolean;
    PlanId: number
    PlanName: string;
    MontoCobertura: number;

    constructor(
        id: number,
        identificationCard: string,
        name : string,
        lastName : string,
        dateTime: Date ,
        nacionality: string,
        sex: string,
        socialSecurityNumber:  string,
        registrationDate: Date,
        amountConsumed: number,
        status: boolean,
        planId: number,
        planName: string,
        montoCobertura: number) {
        
        this.Id = id;
        this.IdentificationCard = identificationCard ;
        this.Name  = name;
        this.LastName = lastName;
        this.DateTime = dateTime;
        this.Nacionality = nacionality ;
        this.Sex = sex;
        this.SocialSecurityNumber = socialSecurityNumber;
        this.RegistrationDate = registrationDate;
        this.AmountConsumed = amountConsumed;
        this.Status = status;
        this.PlanId = planId;
        this.PlanName = planName;
        this.MontoCobertura = montoCobertura;
    }

}
