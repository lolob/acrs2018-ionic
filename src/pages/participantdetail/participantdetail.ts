import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ApiAcrsProvider } from '../../providers/api-acrs/api-acrs';

/**
 * Generated class for the ParticipantdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-participantdetail',
  templateUrl: 'participantdetail.html',
})
export class ParticipantdetailPage {
  participant:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public apiAcrs:ApiAcrsProvider) {

    let participantData = this.navParams.get('item')
    this.participant = participantData
    //alert(JSON.stringify(this.participant))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantdetailPage');
  }

  close(){
    this.viewCtrl.dismiss()

  }

  markpaymentverified(){
    let loader = this.apiAcrs.presentLoading()
    this.apiAcrs.paymentverified(this.participant.registrationid).then(response => { 
      this.apiAcrs.participantDetails(this.participant.registrationid).then(response2 => {
        let result:any = response2
        loader.dismiss()
        this.participant = result[0]
      },err =>{
        alert(JSON.stringify(err))
        loader.dismiss()
      })
    },err=>{
      alert(JSON.stringify(err))
      loader.dismiss()
    })
  }

}
