import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
Renderer2,
    VERSION,
  ViewChild
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  present: number = 0;
  @ViewChild("present") pointer: ElementRef;


  constructor(private renderer:Renderer2){}
  refernce = null;

  ngAfterViewInit() {
    this.refernce=this.pointer.nativeElement
  }
  route(num: number) {

    this.refernce.setAttribute('style', `transform:translateX(${100*num}%)`);
   
  }
}
