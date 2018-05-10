import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new',
  templateUrl: 'add-new.html',
})
export class AddNewPage {

  countryArray = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPage');

    let url = "http://localhost:8888/app/index.php/api/country/all";

    this.http.get(url)
             .subscribe(
               (result:any) => {
                  console.log(result);
                  this.countryArray = result;
               }
             );
  }

  public add(vesselName, countryID) {

    let data = {
      Name: vesselName,
      Country_ID: countryID
    };

    console.log('ข้อมูลที่จะส่งไปให้ Web API:')
    console.log(data);

    let url = "http://localhost:8888/app/index.php/api/fishingvessel/create";

    this.http.post(url, data)
             .subscribe(
               (result:any) => {
                 console.log('ข้อมูลที่ส่งกลับมาจาก web api');
                 console.log(result);

                 if(result.result_info == true){
                   this.navCtrl.pop();
                 } 
                 else {
                   alert('ไม่สามารถเพิ่มข้อมูลได้ ลองใหม่อีกครั้ง');
                 }
               }
             );

  }

  public cancel() {
    this.navCtrl.pop();
  }

}
