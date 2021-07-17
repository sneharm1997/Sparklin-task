import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  @Input() offerHeading!: string;
  @Input() offerContent!: string;
  @Input() imgClass!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
