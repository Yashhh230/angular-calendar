import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  NgbActiveModal,
  NgbDatepickerModule,
  NgbModal,
  NgbModule,
  NgbOffcanvas,
} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../services/login.service';
import { CalendarEvent } from 'angular-calendar';
import { Title } from '@angular/platform-browser';
import { constructNow } from 'date-fns';

@Component({
  selector: 'app-add-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDatepickerModule,
    NgbModule,
    DatePipe,
  ],
  providers: [DatePipe],
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
  @Component({
    selector: 'app-add-edit',
    templateUrl: './add-edit.component.html',
    styleUrls: ['./add-edit.component.scss'],
  })
  @Input()
  event: any | null = null; // Input for event data
  @Input() start: any; // Input for start date/time

  @Output() eventSaved: EventEmitter<any> = new EventEmitter(); // Event emitter for saving event

  submitted = false;
  contactForm: any;
  forDate: any;

  constructor(public main: LoginService, private datePipe: DatePipe) {}
  /**
   * this is eventList variable
   */
  EventList: any;
  image: any;
  formatList: any[] = [];

  ngOnInit(): void {
    this.formatList = this.getLocalStorage(); //this will get the localStorage

    this.initForm(); //this will initialize form
    if (!localStorage.getItem('EventForm')) {
      localStorage.setItem('EventForm', JSON.stringify([]));
    }
    if (this.event) {
      this.contactForm.patchValue({
        ...this.event,
      });
      console.log(this.event.start, 'this.event.start');
      this.contactForm.controls['end'].setValue(
        this.datePipe.transform(this.event.end, 'YYYY-MM-ddThh:mm')
      );
      this.contactForm.controls['start'].setValue(
        this.datePipe.transform(this.event.start, 'YYYY-MM-ddThh:mm')
      );
      this.contactForm.controls['image'].clearValidators(); //this wll remove the controls
      this.contactForm.controls['image'].updateValueAndValidity();
    } else {
      this.contactForm.patchValue({
        start: this.datePipe.transform(this.start, 'YYYY-MM-ddThh:mm'),
      });
    }
    this.EventList = this.getLocalStorage();
  }

  getLocalStorage() {
    let value = localStorage.getItem('EventForm');
    if (value) {
      return JSON.parse(value);
    }
  }
  /**
   *
   * @param event this will help for photo
   * this will help to save the photo
   */
  getProfilePhoto(event: any) {
    let reader = new FileReader();
    reader.onload = () => {
      this.image = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  /**
   * this is my form
   */
  initForm() {
    this.contactForm = new FormGroup({
      id: new FormControl(Date.now()),
      Title: new FormControl('', Validators.required),
      start: new FormControl('', Validators.required),
      end: new FormControl(''),
      description: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      zipcode: new FormControl('', [Validators.required]),
    });
  }

  /**
   *
   * @param getResult this will help to emit the user for open and close the modal
   */
  close(getResult = false) {
    console.log('hello', this.event);
    if (this.event) {
      this.main.listView.emit({ type: 'edit', getResult: getResult });
    } else {
      this.main.listView.emit({ type: 'add', getResult: getResult });
    }
  }

  /**
   * this will submit the value and get the data from localStorage
   * and submit the value
   */
  FormSumbit() {
    this.formatList = this.getLocalStorage();

    this.submitted = true;
    /**
     * this is submit after form valid only
     */
    if (this.contactForm.valid) {
      this.contactForm.value.image = this.image;

      if (this.event) {
        this.contactForm.value.image = '';
        let forChange = this.getLocalStorage().findIndex(
          (item: any) => item.id == this.event?.id
        );

        this.formatList[forChange] = { ...this.contactForm.value };
      } else {
        //this will help to push the value

        this.contactForm.value.id = Date.now();
        this.formatList.push(this.contactForm.value);
      }
      localStorage.setItem('EventForm', JSON.stringify(this.formatList));
      this.close(true);
    }
  }
}
