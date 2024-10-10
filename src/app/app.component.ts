import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title: string = "Hello world"
  btn: string = "Press here"
  isDisabled: boolean = true;
  ImgAngular: string = '../assets/computer.jpg'

  //style binding 
  bgColor: string = "crimson";
  TextColor: string = "black"
  DcColor: string = "cyan"

  //class binding
  redText:string = 'abcd'
}