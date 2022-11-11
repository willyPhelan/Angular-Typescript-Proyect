import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  msg:string = ''
  


employees = [
  {'name': 'Fazt', position: 'Manager', email: 'pfazt@gmail.com'}, 
  {'name': 'Juan', position: 'Designer', email: 'juanperezdesign@gmail.com'},
  {'name': 'Pedro', position: 'Programmer', email: 'pedroalfonso@gmail.com'}]

  model:any = {}
  model2:any = {}
  hideUpdate:boolean = true ; 

  // Utilizo void en los metodos para especificar que los mismos no retornaran nada
addEmployee():void {
  this.employees.push(this.model) ;
  this.msg = 'Added'

}
deleteEmployee(i:any):void { 
  var answer = confirm('Are you sure?')
  if(answer) {
    this.employees.splice(i, 1); 
    this.msg = 'Deleted'
  }
}
myValue: any;

editEmployee(i:any):void{
  this.model2.name = this.employees[i].name;
  this.model2.position = this.employees[i].position;
  this.model2.email = this.employees[i].email ;
  this.myValue = i ; 
  this.hideUpdate = false ;

}

closeAlert():void {
  this.msg = ''
}

updateEmployee():void{
let i = this.myValue ; 
for ( let j = 0 ; j < this.employees.length ; j++) {
  if (i == j) {
    this.employees[i] = this.model2 ;
    this.msg = 'Updated'
    this.model2 = {}
  }
}

}
}
