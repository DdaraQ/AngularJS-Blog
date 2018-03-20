import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';


const routes: Routes = [{
	path: '',
	data: {
        title: 'Blog',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Starter Page'}]
    },
	component: BlogComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [BlogComponent]
})
export class BlogModule { }