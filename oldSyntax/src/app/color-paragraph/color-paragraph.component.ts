import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { paraConfig } from '../paragraph.interface';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-color-paragraph',
  templateUrl: './color-paragraph.component.html',
  styleUrls: ['./color-paragraph.component.scss']
})
export class ColorParagraphComponent implements OnInit {


  constructor() { }

  @Input() paraConfig!: paraConfig;
  @Output() colorSelected = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onChoseColor(){
    this.colorSelected.emit(this.paraConfig.color);
  }
}
