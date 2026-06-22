import { Component, effect, inject, output, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-filter',
  imports: [FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss',
})
export class SearchFilterComponent {
  constructor() {
    effect(() => {
      console.log(
        `the input field update its value to ${this.searchSignal()}`,
        this.searchSignal(),
      );
    });

    effect(()=>{
      const currentInput = this.searchSignal();
      this.onInputChange.emit(currentInput)
    })
  }

  private fb = inject(FormBuilder);

  infoForm = this.fb.group({
    search: '',
    filter: '',
  });

  onInputChange = output<string>();

  searchSignal = toSignal(this.search.valueChanges.pipe(debounceTime(1000)));
  filterSignal = toSignal(this.filter.valueChanges.pipe(debounceTime(1000)));

  get search(): FormControl {
    return this.infoForm.get('search') as FormControl;
  }
  get filter(): FormControl {
    return this.infoForm.get('filter') as FormControl;
  }
}
