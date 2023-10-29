export class User{
    private _id: string;
    private username: string;
    private password: string;
    private phone: string;
    private role: string;
  
    constructor(_id: string, username: string, password: string, phone: string, role: string) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.role = role;
    }

    public getId(): string {
        return this._id;
    }

    public setId(id: string) {
        this._id = id;
    }
    
    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string) {
        this.username = username;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string) {
        this.password = password;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(phone: string) {
        this.phone = phone;
    }

    public getRole(): string {
        return this.role;
    }

    public setRole(role: string) {
        this.role = role;
    }

}