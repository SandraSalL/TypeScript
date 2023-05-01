export class Direccion{
    private _Calle: string; 
    private _Numero:number; 
    private _Piso: number | boolean; 
    private _Letra: string | boolean; 
    private _Codigo_Postal: number; 
    private _Poblacion: string; 
    private _Provincia: string; 

    constructor(Calle:string, Numero:number, Piso:number | boolean, Letra:string | boolean, Codigo_Postal:number, Poblacion:string, Provincia:string) {
        this._Calle = Calle; 
        this._Numero = Numero;
        this._Piso = Piso;
        this._Letra = Letra; 
        this._Codigo_Postal = Codigo_Postal;
        this._Poblacion= Poblacion; 
        this._Provincia = Provincia; 
    }

    get Calle(){
        return this._Calle;
    }
    set Calle(Calle:string){
        this._Calle=Calle;
    }

    get Numero(){
        return this._Numero;
    }
    set Numero(Numero:number){
        this._Numero=Numero;
    }

    get Piso(){
        return this._Piso;
    }
    set Piso(Piso:number | boolean){
        this._Piso=Piso;
    }

    get Letra(){
        return this._Letra;
    }
    set Letra(Letra:string | boolean){
        this._Letra=Letra;
    }

    get Codigo_Postal(){
        return this._Codigo_Postal;
    }
    set Codigo_Postal(Codigo_Postal:number){
        this._Codigo_Postal=Codigo_Postal;
    }

    get Poblacion(){
        return this._Poblacion;
    }
    set Poblacion(Poblacion:string){
        this._Poblacion=Poblacion;
    }

    get Provincia(){
        return this._Provincia;
    }
    set Provincia(Provincia:string){
        this._Provincia=Provincia;
    }
}