export class Campus {
    private _id: string;
    private name: string;
    private idOwner: string;
    private totalDailySales: number;

    constructor(_id: string, name: string, idOwner: string, totalDailySales: number) {
        this._id = _id;
        this.name = name;
        this.idOwner = idOwner;
        this.totalDailySales = totalDailySales;
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

    public setName(name: string) {
        this.name = name;
    }

    public getIdOwner(): string {
        return this.idOwner;
    }

    public setIdOwner(idOwner: string) {
        this.idOwner = idOwner;
    }

    public getTotalDailySales(): number {
        return this.totalDailySales;
    }

    public setTotalDailySales(totalDailySales: number) {
        this.totalDailySales = totalDailySales;
    }

}