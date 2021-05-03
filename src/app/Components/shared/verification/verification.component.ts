import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  public repost: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  Repost(repost:boolean) {

    this.repost.emit(repost);

  }

}
