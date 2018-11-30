import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {AlertController} from 'ionic-angular';
import { ParseSourceFile } from '@angular/compiler';
import { HomePage } from '../home/home';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  home=HomePage;
  user = {
    mail: "",
    pass:""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
          public alertCtrl: AlertController,
          public storage: Storage) {
  
 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  clickregistro()
  {
    /*if(this.user.pass.length() > 7)
    {
      this.users.push({mail: this.mail, password: this.password,});
      this.navCtrl.push(this.home);
      console.log("mail");
      console.log("passwword");
    }*/

    this.navCtrl.push(this.home,this.user);
    /*else{
      console.log('la contraseña tiene que tener mínimo 8 caracteres');
      const alert = this.alertCtrl.create({
        title: 'Oos!',
        subTitle: 'La nota tiene 0 letras',
        buttons: ['OK']
      });
      alert.present();
    }
  }*/
}
}
