import { Component, AfterViewInit } from '@angular/core';
@Component({
	templateUrl: './blog.component.html'
})
export class BlogComponent implements AfterViewInit {
	subtitle:string;	
	constructor() {
		this.subtitle = "This is blog."
	}

	ngAfterViewInit(){}
}