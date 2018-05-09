import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AddNewPage } from '../add-new/add-new';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  vessels = [];
  vesselName;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    
  }

  public loadData(vesselName){
    // this.vessels.push(vesselName);
    // this.vesselName = "";

    let url = "http://localhost:8888/app/index.php/api/fishingvessel/all_ship";


    this.http.get(url)
             .subscribe(
               (result:any) => {
                 console.log(result);
                 this.vessels = result;
               }
             );

  }

  public openNewVesselForm()
  {
    this.navCtrl.push(AddNewPage);
  }
  

}
