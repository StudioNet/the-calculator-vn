import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalculatorComponent } from "./calculator/calculator.component";
import { DisplayComponent } from "./display/display.component";
import { CommandsBoardComponent } from "./commands-board/commands-board.component";

@NgModule({
  declarations: [CalculatorComponent, DisplayComponent, CommandsBoardComponent],
  imports: [CommonModule],
  exports: [CalculatorComponent, DisplayComponent, CommandsBoardComponent],
  entryComponents: [
    CalculatorComponent,
    DisplayComponent,
    CommandsBoardComponent
  ]
})
export class CalculatorModule {}
