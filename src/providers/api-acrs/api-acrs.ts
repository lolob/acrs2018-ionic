import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';


/*
  Generated class for the ApiAcrsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiAcrsProvider {
 
  url:string = "http://192.168.0.17:8000"

  constructor(public http: HttpClient, public loadingCtrl:LoadingController) {
    console.log('Hello ApiAcrsProvider Provider');
  }

  participantDetails(regid){
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/get/' + regid + '/')
      .subscribe(result => {
        resolve(result)
      }, error => {
        reject(error)
      })
    } )
  }

  paymentverified(regid){
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/update/' + regid + '/')
      .subscribe(result => {
        resolve(result)
      }, error => {
        reject(error)
      })
    } )
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
      //duration: 3000
    });
    loader.present();

    return loader;
  }
}
