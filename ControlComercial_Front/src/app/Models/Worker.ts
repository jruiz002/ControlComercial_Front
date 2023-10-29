import { User } from "./User";

export class Worker extends User{
    private salary: number;
    private idSede: string;
    
    constructor(_id: string, username: string, password: string, phone: string, role: string, salary: number, idSede: string){
        super(_id, username, password, phone, role);
        this.salary = salary;
        this.idSede = idSede;
    }
    
    public getSalary(): number {
        return this.salary;
    }
    
    public setSalary(salary: number): void {
        this.salary = salary;
    }
    
    public getIdSede(): string {
        return this.idSede;
    }
    
    public setIdSede(idSede: string): void {
        this.idSede = idSede;
    }

}