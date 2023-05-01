import {Direccion} from './Direccion';
import { Mail} from './Mail';
import { Telefono } from './Telefono';

export  class Persona{
    private _Nombre:string;
    private _Apellidos:string;
    private _Edad:number;
    private _DNI:string;
    private _Cumpleaños: Date;
    private _Color_favorito:string;
    private _Sexo:string;
    private _Direcciones:Array <Direccion>;
    private _Mails:Array<Mail>;
    private _Telefonos: Array<Telefono>;
    private _Notas:string;

    constructor(Nombre:string, Apellidos:string, Edad:number, DNI: string, Cumpleaños: Date, Color_favorito :string, Sexo:string, Direcciones: Array<Direccion>, Mails:Array<Mail>, Telefonos:Array<Telefono>, Notas:string) {
        this._Nombre = Nombre;
        this._Apellidos = Apellidos;
        this._Edad = Edad;
        this._DNI =DNI; 
        this._Cumpleaños = Cumpleaños;
        this._Color_favorito = Color_favorito;
        this._Sexo = Sexo; 
        this._Direcciones = Direcciones; 
        this._Mails = Mails; 
        this._Telefonos = Telefonos;
        this._Notas = Notas;
    }
    get Nombre(){
        return this._Nombre;
    }
    set Nombre(Nombre:string){
        this._Nombre=Nombre;
    }

    get Apellidos(){
        return this._Apellidos;
    }
    set Apelidos(Apellidos:string){
        this._Apellidos=Apellidos;
    }

    get Edad(){
        return this._Edad;
    }
    set Edad(Edad:number){
        this._Edad=Edad;
    }

    get DNI(){
        return this._DNI;
    }
    set DNI (DNI:string){
        this._DNI=DNI;
    }

    get Cumpleaños(){
        return this._Cumpleaños;
    }
    set Cumpleaños(Cumpleaños:Date){
        this._Cumpleaños=Cumpleaños;
    }

    get Color_favorito(){
        return this._Color_favorito;
    }
    set Color_favorito(Color_favorito:string){
        this._Color_favorito=Color_favorito;
    }

    get Sexo(){
        return this._Sexo;
    }
    set Sexo(Sexo:string){
        this._Sexo=Sexo;
    }

    get Direcciones(){
        return this._Direcciones;
    }
    set Direcciones(Direcciones:Array<Direccion>){
        this._Direcciones=Direcciones;
    }

    get Mails(){
        return this._Mails;
    }
    set Mails(Mails:Array<Mail>){
        this._Mails=Mails;
    }

    get Telefonos(){
        return this._Telefonos;
    }
    set Telefonos(Telefonos:Array<Telefono>){
        this._Telefonos=Telefono;
    }

    get Notas(){
        return this._Notas;
    }
    set Notas(Notas:string){
        this._Notas=Notas;
    }
}



