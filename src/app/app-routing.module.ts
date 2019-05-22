import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Test1Component} from './test1/test1.component';
import {Test2Component} from './test2/test2.component';
import {Test3Component} from './test3/test3.component';
import {Test4Component} from './test4/test4.component';

const routes: Routes = [
  { path: '', redirectTo: '/test1', pathMatch: 'full' },
  { path: 'test1', component: Test1Component, data: { routeIndex: 0} },
  { path: 'test2', component: Test2Component, data: { routeIndex: 1} },
  { path: 'test3', component: Test3Component, data: { routeIndex: 2} },
  { path: 'test4', component: Test4Component, data: { routeIndex: 3} },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
