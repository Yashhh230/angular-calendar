import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appStepLabel]',
  standalone: true,
})
export class StepLabelDirective {
  @Input({ required: true, alias: 'appStepLabel' }) routerPath!: string;

  constructor(public templateRef: TemplateRef<void>) {}
  labels$ = ['name', 'item', 'address'];
}
