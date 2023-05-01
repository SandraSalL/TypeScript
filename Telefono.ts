export class Telefono{
    private _Tipo_Telefono: string;
    private _Numero_Telefono:number; 

    constructor(Tipo_Telefono:string, Numero_Telefono:number){
        this._Tipo_Telefono = Tipo_Telefono ;
        this._Numero_Telefono = Numero_Telefono;
    }

    get Tipo_Telefono(){
        return this._Tipo_Telefono;
    }
    set Tipo_Telefono(Tipo_Telefono:string){
        this._Tipo_Telefono=Tipo_Telefono;
    }

    get Numero_Telefono(){
        return this._Numero_Telefono;
    }
    set Numero_Telefono(Numero_Telefono:number){
        this._Numero_Telefono=Numero_Telefono;
    }
}
