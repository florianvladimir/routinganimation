import {Component} from '@angular/core';
import {animate, group, query, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute} from '@angular/router';

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
      optional: true,
    }),
  ]),
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animatedRoutes', [
      transition(':increment', right),
      transition(':decrement', left),
    ])
  ]
})
export class AppComponent {
  title = 'routinganimation';

  constructor(private route: ActivatedRoute) {
  }

  animationState: number;

  onActivate($event) {
    console.log(this.route.firstChild.snapshot.data['routeIndex']);
    this.animationState = this.route.firstChild.snapshot.data['routeIndex'];
  }
}
