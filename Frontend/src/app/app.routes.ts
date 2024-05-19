import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

export const routes: Routes = [
    { path: 'create', component: CreateComponent },
    { path: 'create/:id', component: CreateComponent },
    { path: 'read', component: ReadComponent }
];
