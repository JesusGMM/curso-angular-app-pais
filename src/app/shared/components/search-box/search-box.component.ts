import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
	selector: 'app-search-box',
	template: '<input  type="text"  class="form-control"  [value]="initialValue" [placeholder]="placeholder"  (keyup.enter)="onKeyPress( txtInput.value )"  #txtInput />'
})
export class SearchBoxComponent {

	private debouncer: Subject<string> = new Subject<string>();
	private debouncerSuscription?: Subscription;

	@Input()
	public placeholder: string = '';

	@Input()
	public initialValue: string = '';

	@Output()
	public onValue = new EventEmitter<string>();

	@Output()
	public onDebounce = new EventEmitter<string>();

	ngOnInit(): void {
		this.debouncerSuscription = this.debouncer
			.pipe(debounceTime(300))
			.subscribe(value => {
				this.onDebounce.emit(value);
			});
	}

	ngOnDestroy(): void {
		this.debouncerSuscription?.unsubscribe();
	}

	emitValue(value: string): void {
		this.onValue.emit(value);
	}

	onKeyPress(searchTerm: string) {
		this.debouncer.next(searchTerm);
	}

}
