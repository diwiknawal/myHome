import { Component, AfterViewInit } from '@angular/core';
import { View, Page } from 'tns-core-modules/ui/page/page';
import * as appSettings from "tns-core-modules/application-settings";
import { HashLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Registration } from '../Shared/Model/Registration';


@Component({
  selector: 'ns-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.css']
})



export class SplashscreenComponent implements AfterViewInit {

  view: View;
  showmessage: boolean=false;
  userMobileNumber:string; 
  registration:Registration; 

  constructor(private routerExtensions: RouterExtensions,private page: Page) {
   this.userMobileNumber = appSettings.getString("userMobileNumber");
  }
  
  ngAfterViewInit() {
   this.view = this.page.getViewById<View>("message");
    
}

  startBackgroundAnimation() {
    this.view.animate({
      scale: { x: 0.0, y: 0.0 },
      duration: 1000
    }).then(()=>{
      console.log(this.userMobileNumber)
    
     if(this.userMobileNumber==="" || this.userMobileNumber===undefined || this.userMobileNumber==="0"){
      this.routerExtensions.navigate(["/registration"]);
     }
     else{
      this.routerExtensions.navigate(["/items"]);
     }
    })
  }
}
