import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sn-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Calculator N-Version";
  calculatorMode = "Scientific";

  ngOnInit(): void {
    document.title = this.title;
  }

  handleCalculatorModeChanged(mode: string) {
    this.calculatorMode = mode;
    this.changeCalculatorMode();
  }

  private changeCalculatorMode() {
    // TODO: Dispatch the store about mode changing
  }
}
