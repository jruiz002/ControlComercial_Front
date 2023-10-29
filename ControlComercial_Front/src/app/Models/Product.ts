export class Product {
    private _id: string;
    private name: string;
    private price: number;
    private amount: number;
    private nombreProveedor: string;
    private idCampus: string;

    constructor(_id: string, name: string, price: number, amount: number, nombreProveedor: string, idCampus: string) {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.nombreProveedor = nombreProveedor;
        this.idCampus = idCampus;
    }

    public get_id(): string {
        return this._id;
    }

    public set_id(id: string) {
        this._id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }

    public getNombreProveedor(): string {
        return this.nombreProveedor;
    }

    public setNombreProveedor(nombreProveedor: string): void {
        this.nombreProveedor = nombreProveedor;
    }

    public getIdCampus(): string {
        return this.idCampus;
    }

    public setIdCampus(idCampus: string): void {
        this.idCampus = idCampus;
    }


}