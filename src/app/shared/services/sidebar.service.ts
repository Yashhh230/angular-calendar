import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarVisible = new BehaviorSubject<boolean>(true);
  private stepperNext = new BehaviorSubject([]);
  private sidebarState$: Observable<boolean> =
    this.sidebarVisible.asObservable();

  /**
   *
   * step index for changing the index of stepper component from different components
   */
  private stepIndexSubject = new BehaviorSubject<number>(0);
  public stepIndex$ = this.stepIndexSubject.asObservable();

  constructor() {}

  toggleSidebar() {
    this.sidebarVisible.next(!this.sidebarVisible.value);
  }

  getSidebarState(): Observable<boolean> {
    return this.sidebarState$;
  }

  /**
   *
   * @param index take the index and redirect to that index
   */
  updateStepIndex(index: number) {
    this.stepIndexSubject.next(index);
  }

  getStepIndex() {
    return this.stepIndexSubject.getValue();
  }
}
