import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "CodeSandbox";
  count = 0;
  text = '';
  name = 'Iva';
  country = 'Belarus';
  age = 35;
  users = [
    {
      id: 1,
      name: "Paul",
      country: "United States",
      age: "23",
      msg: "Hello, how are you?",
      date: "12.5.2018",
      time: "11:13",
      like: 3,
      click: false
    },
    {
      id: 2,
      name: "Alex",
      country: "United Kingdom",
      age: "20",
      msg: "Normally, am learning",
      date: "12.5.2018",
      time: "11:57",
      like: 5,
      click: false
    },
    {
      id: 3,
      name: "Max",
      country: "France",
      age: "25",
      msg: "Hey, I haven`t seen you around here in a while.",
      date: "12.5.2018",
      time: "12:31",
      like: 7,
      click: false
    },
    {
      id: 4,
      name: "market",
      country: "USA",
      age: 18,
      msg: "Buy our product with 90% discount%",
      date: "3.3.2019",
      time: "0:00",
      like: 1,
      click: false
    }
  ];
  error = "";
  liked(id: number) {
    if (!this.users[id-1].click) {
      this.users[id-1].like++;
      this.users[id-1].click = true
    }
  };
  spam(id: number) {
    this.users.splice(id-1,1);
  };
  answer(id: number) {
    console.log('answer')
    if(this.text=='') 
      this.text=this.users[id-1].name+", ";
    else
      this.text+=" "+this.users[id-1].name+",";
  };
 messagenew() {
    const msgnew ={
      id: this.users.length + 1,
      name: '',
      country: '',
      age: 0,
      priv: false,
      date: '',
      time: '',
      msg: '',
      like: 0,
      click: false
    };
    let dt= new Date();
    let str= dt.toISOString();
    let s=str.split("T");
    let t=s[1].split(".");
    msgnew.name=this.name;
    msgnew.country=this.country;
    msgnew.age=this.age;
    msgnew.priv=false;
    msgnew.date=s[0];
    msgnew.time=t[0];
    msgnew.msg=this.text;
    let err=false, iderr=0;
    this.error="";
    if(this.name===undefined) {
    this.error="Please, enter name";
      iderr++;
      err=true;
    }   
    if(this.country===undefined) {
      if(iderr) this.error+="\nPlease, enter country";
        else this.error="Please, enter country";
        iderr++;
        err=true;
      }   
    if(this.age===undefined) {
      if(iderr) this.error+="\nPlease, enter age";
      else this.error="Please, enter age";
      iderr++;
      err=true;
    } 
    if(this.text===undefined) {
      if(iderr)  this.error+="\nPlease, enter text message";
      else this.error="Please, enter text message";
      err=true;
      iderr++;
    }
    console.log(msgnew)
    if(!err) this.users.push(msgnew);
    return undefined;
};

}
