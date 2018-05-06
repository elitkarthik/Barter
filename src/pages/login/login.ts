import { Component } from '@angular/core';

@Component({
    selector: 'pages-login',
    templateUrl: './login.html'
})
export class Login{
    constructor(){

    }

    ionViewDidLoad() {
        this.segmentLoginSelected = true;
        this.segmentRegisterSelected = false;

    }

    action = 'login';

    segmentLoginSelected : boolean;
    segmentRegisterSelected : boolean;

    segmentChanged(event: any){
       //debugger;
        if (this.action =='login')
        {
            this.segmentLoginSelected = true;
            this.segmentRegisterSelected = false;
        }
        else{
            this.segmentLoginSelected = false;
            this.segmentRegisterSelected = true;
        }
    }
}