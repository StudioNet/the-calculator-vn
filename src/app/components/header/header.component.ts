import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "sn-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  public title = "Magnetic Calculation Component";
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onCalculatorTypeSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  handleTypeClicked($evt) {
    const modeClicked = $evt.target.textContent;
    this.onCalculatorTypeSelected.emit(modeClicked);
  }
}
