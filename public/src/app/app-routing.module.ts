import { NgModule  } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { ChicagoComponent  } from './chicago/chicago.component';
import { DallasComponent  } from './dallas/dallas.component';

const routes: Routes = [
  { path: 'chicago', component: ChicagoComponent  },
  { path: 'dallas', component: DallasComponent  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {  }
