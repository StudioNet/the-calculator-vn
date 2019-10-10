import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input
} from "@angular/core";

@Component({
  selector: "sn-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent implements OnInit {
  @Input() mode = "";

  constructor() {}

  ngOnInit() {}
}
