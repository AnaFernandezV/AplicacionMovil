import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //variables necesarias para el trabajo del CRUD:
  usuarios: any[] = [
    {
      rut: '11.111.111-1',
      nom_completo: 'Jaime Gonzalez',
      correo: 'jaime@gmail.com',
      fecha_nac: '1990-03-24',
      semestre: 1,
      password: 'jaime123',
      tipo_usuario: 'administrador'
    },
    {
      rut: '11.111.111-2',
      nom_completo: 'Jose Miguel',
      correo: 'miguelito@gmail.com',
      fecha_nac: '1990-03-24',
      semestre: 1,
      password: 'miguel123',
      tipo_usuario: 'alumno'
    }
  ];

  constructor() { }

  //métodos del CRUD:
  agregarUsuario(usuario): boolean{
    if ( this.obtenerUsuario(usuario.correo) == undefined ) {
      this.usuarios.push(usuario);
      return true;
    }
    return false;
  }
  eliminarUsuario(correo){
    this.usuarios.forEach((usu, index) => {
      if (usu.correo == correo) {
        this.usuarios.splice(index, 1);
      }
    });
  }
  modificarUsuario(usuario){
    var index = this.usuarios.findIndex(usu => usu.correo == usuario.correo);
    this.usuarios[index] = usuario;
  }
  obtenerUsuario(correo){
    return this.usuarios.find(usuario => usuario.correo == correo);
  }
  obtenerUsuarios(){
    return this.usuarios;
  }

  //MÉTODO CUSTOMER:
  //validar rut y contraseña: método que recibe rut y password y me entrega un JSON de un usuario
  validarRutPassword(rut, pass){
    return this.usuarios.find(u => u.rut == rut && u.password == pass);
  }
  validarCorreoPass(correo, pass){
    return this.usuarios.find(u => u.correo == correo && u.password == pass);
  }
  validarRecuperarPass(correo){
    return this.usuarios.find(u => u.correo == correo);
  }

}
