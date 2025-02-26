import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Task - 5 Set of Lists';


drinks : Array<string> = ["Orange juice", "Iced coffee", "Green tea", "Chocolate milk", "Lemon soda"];

houseItems : Array<string> = ["Remote control", "Table lamp", "Wall clock", "Door mat", "Ceiling fan"];


outdoorActivities : Array<string> = ["Riding a bicycle", "Flying a kite", "Hiking a trail", "Playing soccer", "Camping in the woods"];


pencilCaseItems : Array<string> = ["Mechanical pencil", "Ballpoint pen", "Eraser block", "Highlighter pen", "Sticky notes"];


randomObjects : Array<string> = ["Bluetooth speaker", "Sunglasses case", "Wristwatch strap", "Phone charger", "Car key fob"];
}


