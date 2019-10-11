import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResultsComponent } from "./results/results.component";
import { ResultHeaderComponent } from "./result-header/result-header.component";
import { ResultListComponent } from "./result-list/result-list.component";
import { ResultListItemComponent } from "./result-list/result-list-item/result-list-item.component";

@NgModule({
  declarations: [
    ResultsComponent,
    ResultHeaderComponent,
    ResultListComponent,
    ResultListItemComponent
  ],
  imports: [CommonModule],
  exports: [
    ResultsComponent,
    ResultHeaderComponent,
    ResultListComponent,
    ResultListItemComponent
  ]
})
export class ResultsModule {}
