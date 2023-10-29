export class Sale {
    private _id: string;
    private saleDate: Date;
    private amount: number;
    private total: number;
    private idProduct: string;
    private idCampus: string;

    constructor(id: string, saleDate: Date, amount: number, total: number, idProduct: string, idCampus: string) {
        this._id = id;
        this.saleDate = saleDate;
        this.amount = amount;
        this.total = total;
        this.idProduct = idProduct;
        this.idCampus = idCampus;
    }

    public get_id(): string {
        return this._id;
    }

    public set_id(id: string) {
        this._id = id;
    }

    public getSaleDate(): Date {
        return this.saleDate;
    }

    public setSaleDate(saleDate: Date): void {
        this.saleDate = saleDate;
    }

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }

    public getTotal(): number {
        return this.total;
    }

    public setTotal(total: number): void {
        this.total = total;
    }

    public getIdProduct(): string {
        return this.idProduct;
    }

    public setIdProduct(idProduct: string): void {
        this.idProduct = idProduct;
    }

    public getIdCampus(): string {
        return this.idCampus;
    }

    public setIdCampus(idCampus: string): void {
        this.idCampus = idCampus;
    }
}