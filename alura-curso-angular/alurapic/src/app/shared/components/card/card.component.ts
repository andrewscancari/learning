import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-ap-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() title: string = '';
}
