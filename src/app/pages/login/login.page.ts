import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //vamos a crear las variables necesarias:
  correo: string;
  password: string;

  constructor(private alertController: AlertController, private router: Router, 
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    
  }

  //método para ingresar a home:
  login(){
    var usuarioLogin = this.usuarioService.validarCorreoPass(this.correo);

    //validar que ingrese los distintos tipos de usuarios
    if (usuarioLogin != undefined) {
      if(usuarioLogin.tipo_usuario == 'administrador'){
        this.router.navigate(['/home']);
      }else if(usuarioLogin.tipo_usuario == 'docente'){
        this.router.navigate(['/docente'])
      }else {
        this.router.navigate(['/alumno'])
      }

    }else{
      this.alertaNovalido();
    }
  }

  //Alertas
  async alertaNovalido() {
    const alert = await this.alertController.create({
      subHeader: 'Importante Usuario!',
      message: 'Correo o Contraseña Incorrectos',
      buttons: ['OK'],
    });

    await alert.present();
  }


}
