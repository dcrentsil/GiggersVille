import { GiggersComponent } from './giggers/giggers.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GiggersService } from './giggers.service';
import { CreategiggerComponent } from './creategigger/creategigger.component';
import {RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '',redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'giggers',component: GiggersComponent },
    { path: 'signup', component: CreategiggerComponent},
    { path: 'login', component: LoginComponent},
    { path: 'about', component: AboutComponent},
     
  ];

  
// export roues
export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);