import { Usuario } from './usuario';

export class Supervisor extends Usuario {

    public cuil : string;
    public perfil : string;

    constructor(nombre: string, apellido: string, dni: string, foto: string, activo: boolean, email: string,
        rol: string, id: string, cuil: string, perfil: string){
        super(nombre, apellido, dni, foto, activo, email, rol, id);
        this.cuil = cuil;
        this.perfil=perfil;
    }
}
