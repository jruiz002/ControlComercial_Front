import { User } from "./User";

export class Owner extends User{
    private suppliers: [];

    constructor(_id: string, username: string, password: string, phone: string, role: string, suppliers: []){
        super(_id, username, password, phone, role);
        this.suppliers = suppliers;
    }

    public getSuppliers(){
        return this.suppliers;
    }

    public setSuppliers(suppliers: []): void{
        this.suppliers = suppliers;
    }
    
}