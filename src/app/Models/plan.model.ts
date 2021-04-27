export class Plan {

    Id: number;
    PlanName: string;
    CoverageAmount: Number;
    RegistrationDate: Date;
    Status: boolean;

    constructor(
    id: number,
    planName: string,
    coverageAmount: Number,
    registrationDate: Date,
    status: boolean
    ) {
        this.Id = id;
        this.PlanName = planName;
        this.CoverageAmount =  coverageAmount;
        this.RegistrationDate = registrationDate;
        this.Status = status;
    }

}
