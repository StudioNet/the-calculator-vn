import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "sn-result-list-item",
  templateUrl: "./result-list-item.component.html",
  styleUrls: ["./result-list-item.component.scss"]
})
export class ResultListItemComponent implements OnInit {
  @Input() resultStatement: string;

  constructor() {}

  ngOnInit() {}
}
