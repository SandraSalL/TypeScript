export class Mail{
   private  _Tipo_Mail: string;
   private  _Direccion_Mail: string;

    constructor(Tipo_Mail:string, Direccion_Mail:string){
        this._Tipo_Mail = Tipo_Mail ;
        this._Direccion_Mail = Direccion_Mail;
    }

    get Tipo_Mail(){
        return this._Tipo_Mail;
    }
    set Tipo_Mail(Tipo_Mail:string){
        this._Tipo_Mail=Tipo_Mail;
    }

    get Direccion_Mail(){
        return this._Direccion_Mail;
    }
    set Direccion_Mail(Direccion_Mail:string){
        this._Direccion_Mail=Direccion_Mail;
    }
}
