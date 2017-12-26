import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimelineComponent } from './content/timeline/timeline.component';
import { NoticeComponent } from './content/notice/notice.component';
import { FilterContainer } from 'app/common/components/filterContainer/filterContainer.component';

const routes: Routes = [
  { path: '', redirectTo: 'timeline', pathMatch: 'full' },
  { path: 'timeline',  component: TimelineComponent },
  // { path: 'notice/:id', component: NoticeComponent }
  { path: 'filter',  component: FilterContainer },
  { path: 'notice', component: NoticeComponent },
  { path: '**', redirectTo: 'timeline' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
