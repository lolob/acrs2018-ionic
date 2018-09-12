import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ApiAcrsProvider } from '../../providers/api-acrs/api-acrs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  regidsearch:string
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner,public acrs:ApiAcrsProvider,public modalCtrl: ModalController) {
  this.regidsearch = null
  }

  scanqrcode(){
    
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      //alert(barcodeData.text)
      this.getParticipantDetail(barcodeData.text)
     }).catch(err => {
         console.log('Error', err);
     });
    
  }

  getParticipantDetail(regid){
    let loader = this.acrs.presentLoading()
    this.acrs.participantDetails(regid).then(response=>{
      let result:any=response
      loader.dismiss()
      //alert(JSON.stringify(result[0].title))
      this.pageParticipantDetail(result[0])
    }, err => {
      alert(JSON.stringify(err))
      loader.dismiss()
    })

  }

  pageParticipantDetail(theResult){
    let modal = this.modalCtrl.create('ParticipantdetailPage', {item:theResult})
    modal.present();
  }

  pageParticipantDetail2(){
    let modal = this.modalCtrl.create('ParticipantdetailPage')
    modal.present();
  }

  searchregid(){
    let catchregid = "20189000" + this.regidsearch
    this.getParticipantDetail(catchregid)
  }

}
