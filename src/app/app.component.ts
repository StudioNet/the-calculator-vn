import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sn-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Calculator N-Version";

  ngOnInit(): void {
    document.title = this.title;
  }
}
