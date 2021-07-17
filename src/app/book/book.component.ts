import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() title!: string;
  @Input() author!: string;
  @Input() price!: string;
  @Input() imgClass!: string;
  @Input() bookTag!: string;


  constructor() {}

  ngOnInit(): void {}
}
