import { UpdateAffiliate } from "./update-affiliate.model";

export class UpdateAmountAffiliateDto extends UpdateAffiliate {

    NewAmount: number;
    
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
        newAmount: number) {
        
        super(id, identificationCard, name, lastName, dateTime, nacionality, sex, socialSecurityNumber,
            registrationDate, amountConsumed, status, planId)
        
            this.NewAmount =  newAmount;
        
    }
}
