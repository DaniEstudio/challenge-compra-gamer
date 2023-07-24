import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl(null, Validators.required);
  @Input() prefix: string = '';
  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>(); // Add output event

  phonePattern: string = '^[0-9]*$';

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valueChanged.emit(inputElement.value); // Emit the value when it changes
  }
}

