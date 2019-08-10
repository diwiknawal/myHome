import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { SplashscreenComponent } from "./splashscreen/splashscreen.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ItemsComponent } from "./items/items.component";




const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: SplashscreenComponent },
    { path: "registration", component: RegistrationComponent },
    { path: "items", component: ItemsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
