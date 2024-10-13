import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Only RouterOutlet is needed from angular/router
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, LowerCasePipe, UpperCasePipe, CurrencyPipe, PercentPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { AppendPipe } from './pipes/append.pipe';
import { DataService } from './services/data.service';  // Your DataService
import { Data } from "./interfaces/data";  // Your Model interface for API response data

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ParentComponent,
    ChildComponent,
    FormsModule,
    NgFor,
    NgClass,
    NgStyle,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    DatePipe,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    PercentPipe,
    AppendPipe,
  ],
  providers: [DataService],  // Providing DataService here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent implements OnInit {

  // Attribute binding
  title: string = "Hello Angular";
  btn: string = "Press here";
  isDisabled: boolean = true;
  ImgAngular: string = '../assets/computer.jpg';

  //style binding 
  bgColor: string = "crimson"
  TextColor: string = "black"
  DcColor: string = "cyan"

  //class binding
  redText: string = 'abcd'

  //Function binding 
  counter: number = 0;
  increamentCounter() {
    this.counter++;
  }
  decreamentCounter() {
    this.counter--;
  }

  //Two way data binding
  InputText: string = ''

  //ngclass
  message: string = "header"
  classes: string = "Danger text-size"
  selectedColor: string = "green"
  Tsize: string = "50px"
  type: string = "flex"

  //Ngif
  isLoggedIn: boolean = false
  check: boolean = true
  UserName: string = "User"

  LogIn() {
    this.isLoggedIn = true;
  }
  LogOut() {
    this.isLoggedIn = false;
  }

  //ngFor
  Names: string[] = ['sam', 'umair', 'harry']

  //ngSwitch
  Mark: string = "A"

  //@for @if (new 17)
  items = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' }
  ]

  //@Switch (new 17)
  grade: string = 'G'

  //using Pipes
  PipeName: string = "Using Pipe"
  Date: number = Date.now();
  curency: number = 1.1234

  //To inject services / importing it won't work in the array of imports

  // Data fetched using the service
  data: string[] = [];
  Posts: Data[] = [];  // Use your custom Model interface for API data

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();  // Raw data from the service
  }

  ngOnInit() {
this.test()
  }

  test(){
    this.dataService.getPosts().subscribe({
      next: (response: Data[]) => {
        this.Posts = response;  // Response is an array of Model objects
      },
      error: (error: Error) => {
        console.log(error);
      }
    });

  }


}


 