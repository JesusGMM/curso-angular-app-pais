import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-search-box',
	template: '<input  type="text"  class="form-control"  [placeholder]="placeholder"  (keyup.enter)="emitValue( txtInput.value )"  #txtInput />'
})
export class SearchBoxComponent {

	@Input()
	public placeholder: string = '';

	@Output()
	public onValue = new EventEmitter<string>();

	emitValue(value: string): void {
		this.onValue.emit(value);
	}

}
