import {Persona} from "./Persona";
import {Direccion} from "./Direccion";
import {Telefono} from "./Telefono";
import {Mail} from "./Mail";

const ResidenciaJose = new Direccion(
    'Calle Mariano Parra',
    77, 
    2,
    'A', 
    28011, 
    'Madrid', 
    'Madrid'
)

const MailJose = new Mail(
    'Trabajo', 
    'JoseLopez@gmail.com'
)

const TelefonoJose = new Telefono (
    'movil', 
    687654698
)
const PersonaJose = new Persona (
    'Jose', 
    'Lopez Garcia', 
    50, 
    '18554123L',
    new Date (1974,12,12),
    'azul',
    'Masculino',
    [ResidenciaJose], 
    [MailJose] , 
    [TelefonoJose],
    'Nada que añadir'
);

const ResidenciaLuisa = new Direccion (
    'Avenida Principe Pio',
    34, 
    5,
    'C', 
    28015, 
    'Madrid', 
    'Madrid'
)

const MailLuisa= new Mail(
    'Personal',
    'Luisa1998@hotmail.com'
)

const TelefonoLuisa = new Telefono (
    'movil',
    685236958
)

const PersonaLuisa = new Persona (
    'Luisa', 
    'Gerez Botella', 
    25, 
    '98562547Z',
    new Date (1998,2,5),
    'rojo',
    'Femenino',
    [ResidenciaLuisa], 
    [MailLuisa] , 
    [TelefonoLuisa],
    'Busca trabajo'
);

const ResidenciaDiogo = new Direccion(
    'Rua Martin Moniz',
    22, 
    1,
    'B', 
    1352, 
    'Lisboa', 
    'Lisboa'
)

const MailDiogo = new Mail(
    'trabajo',
    'DiogoCarvalho@gmail.com'
)

const TelefonoDiogo = new Telefono(
    'movil',
    915875632
)

const PersonaDiogo = new Persona(
    'Diogo', 
    'Carvalho', 
    33, 
    '316800849L',
    new Date (1990,10,9),
    'verde',
    'Masculino',
    [ResidenciaDiogo], 
    [MailDiogo] , 
    [TelefonoDiogo],
    'Teletrabaja desde Portugal'
);


console.log("Datos de la agenda");
console.log(PersonaJose);
console.log(PersonaLuisa);
console.log(PersonaDiogo);

const agenda: Array<Persona> = new Array (PersonaJose, PersonaLuisa, PersonaDiogo);

const DNIBuscar: string = "98562547Z";
const PersonaEditar : Persona = agenda.find (Persona => Persona.DNI === DNIBuscar) as Persona;
const NuevaDireccion = new Direccion (
    "Avenida Las flores",
    56,
    5,
    'C',
    52021,
    'Valencia',
    'Valencia'
);

const NuevoMail = new Mail (
    'personal',
    'LuisaGerez@gmail.com'
)
const NuevoTelefono = new Telefono (
    'trabajo',
   658745896
)

PersonaEditar.agregarNuevaDireccion (NuevaDireccion);
PersonaEditar.agregarNuevoMail(NuevoMail);
PersonaEditar.agregrarNuevoTelefono (NuevoTelefono);

console.log("Datos actualizados");
console.log(PersonaJose);
console.log(PersonaLuisa);
console.log(PersonaDiogo);


