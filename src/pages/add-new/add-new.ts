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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPage');

    let url = "";


    this.http.get(url)
              .subscribe(
                (result:any) => {
                  this.countryArray = result;
                }
              )
  }

  public save(vesselName, countryID) {
    let data = {
      Name: vesselName
      , Country_ID: countryID
    };

    let url = "http://localhost:8888/app-admin/api/fishingvessel/create";

    this.http.post(url, data)
      .subscribe(
        (result:any) => {
          alert('insert_id: ' + result.insert_id);
          this.navCtrl.pop();
        }
      );
  }

  public cancel() {
    this.navCtrl.pop();
  }

}
