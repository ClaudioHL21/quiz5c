import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  registro = RegistroPage;
  mail = '';
  password = '';
  users = [];
  user = "";


  constructor(public navCtrl: NavController, 
    public alertCtrl:AlertController, 
    public storage: Storage) {

      this.storage.keys()
      .then(keys=>{
        if(keys.some(key => key == 'users')){
          this.storage.get('users')
          .then(users =>{
            this.users = JSON.parse("usuarios");
          })
        }

      });

  }

  clickRegistrar()
  {
    this.navCtrl.push(this.registro, {users: this.users});
  }

}
