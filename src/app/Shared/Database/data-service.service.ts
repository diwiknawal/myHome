import { Injectable } from '@angular/core';
var Sqlite = require("nativescript-sqlite");

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private database: any;
  constructor() { 
    (new Sqlite("my.db")).then(db => {
      db.execSQL("CREATE TABLE IF NOT EXISTS ITEMS (ItemID INTEGER PRIMARY KEY AUTOINCREMENT, ItemName TEXT, ItemPrice NUMBER,ItemBuyDate Date)").then(id => {
          this.database = db;
          debugger
      }, error => {
        debugger
          console.log("CREATE TABLE ERROR", error);
      });
  }, error => {
    debugger
      console.log("OPEN DB ERROR", error);
  });
  }
}
