import { Component, OnInit } from '@angular/core';
import { Registration } from '../Shared/Model/Registration';
import * as appSettings from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registration:Registration; 
  constructor() { 
    this.registration=new Registration();
    this.registration.Phone=0;
  }

  ngOnInit() {
  }
  register(){
    appSettings.setString("userMobileNumber",this.registration.Phone.toString())
  }
}
