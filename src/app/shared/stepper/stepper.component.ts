import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepLabelDirective } from '../step-label.directive';
import {
  combineLatest,
  filter,
  map,
  ReplaySubject,
  startWith,
  switchMap,
} from 'rxjs';
import { ActivationEnd, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  /**
   * changing the index when component loads and navigate to the that route using subscribe
   */
  ngOnInit(): void {
    this.stepperService.stepIndex$.subscribe((index) => {
      this.selectedStepIndex = index;
      this.navigate();
    });
  }
  /**
   * steps take a input from a different component and working like a prepare object
   * that generate the data of stepper from object
   */
  @Input() steps: any;
  /**
   * this can take the tab change route when tab change it gives a route then navigate it
   */
  @Input() id: any;
  /**
   * step index is 0 by default
   */
  selectedStepIndex = 0;
  /**
   * when tab changes it goes true and step index redirect to 0
   */
  @Input() set tabChanged(newTab: any) {
    this.selectedStepIndex = 0;
    this.stepperService.updateStepIndex(this.selectedStepIndex);
    this.navigate();
  }
  constructor(private router: Router, private stepperService: SidebarService) {}
  /**
   *
   * @param event when we change the index from stepper count
   * it can change and update the index value
   */
  selectionChanged(event: any) {
    this.selectedStepIndex = event;
    this.stepperService.updateStepIndex(this.selectedStepIndex);
  }
  /**
   * this can help to navigate using route , when the url gets id from particular tab , and steps is array of object
   */
  private navigate(): void {
    const url = this.id + this.steps[this.selectedStepIndex]?.name;
    this.router.navigate([url]);
  }

  // /**
  //  *
  //  * @param index this can take the index and check if the value is up to the steps length is greater then index it will redirect to the
  //  * @returns
  //  */
  // private validateStepIndex(index: number): number {
  //   if (index >= this.steps.length) {
  //     return 0;
  //   }
  //   return index;
  // }
}
