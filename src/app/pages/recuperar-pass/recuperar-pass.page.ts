import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {

  //Variable Para recuperar contraseña
  correo: string;

  constructor(private router: Router, private usuarioService: UsuarioService ) { }

  ngOnInit() {
  }

  //Recuperar Contraseña
  recuperar(){
    var usuarioRecu = this.usuarioService.validarRecuperarPass(this.correo);

    //validar que al ingresar admin admin en el formulario, me diga hola:
    if (usuarioRecu != undefined) {
      alert('Correo Enviado Exitosamente!');
    }else{
      alert('Ingrese Un Correo Válido!');
    }
  }

}
