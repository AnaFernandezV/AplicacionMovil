import { Injectable } from '@angular/core';
import { Storage }  from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  //Variables a utilizar
  datos: any[] = [];
  dato: any;

  constructor(private storage: Storage) { 
    storage.create();
  }

  async agregarDato(key, dato){
    this.datos = await this.storage.get(key) || [];

    this.dato = await this.obtenerDato(key, dato.rut);
    if (this.dato == undefined) {
      this.datos.push(dato);
      await this.storage.set(key, this.datos)
      return true;
      
    }
    return false;
  }

  async obtenerDato(key, id){
    this.datos = await this.storage.get(key) || [];
    this.dato = this.datos.find(persona => persona.rut == id);
    return this.dato;

  }

  async obtenerDatos(key): Promise<any[]> {
    this.datos = await this.storage.get(key);
    return this.datos;

  }


  async eliminarDatos(key, dato) {
    this.datos = await this.storage.get(key) || [];
    this.datos.forEach((value, index) => {
      if (value.rut == dato) {
        this.datos.splice(index, 1);
        
      }
    });
    await this.storage.set(key, this.datos);

  }
  
  
  async actualizarDatos(key, dato){
    this.datos = await this.storage.get(key) || [];

    var index = this.datos.findIndex(persona => persona.rut == dato.rut);
    this.datos[index] = dato;
    await this.storage.set(key, this.datos);
  }




}
