import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CalculatorModule } from "./components/calculator/calculator.module";
import { ResultsModule } from "./components/results/results.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CalculatorModule, ResultsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
