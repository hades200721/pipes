import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyContentComponent } from './empty-content/empty-content.component';
import { ResultBodyComponent } from './result-body/result-body.component';

const appRoutes = [
    { path: 'no-countries', component: EmptyContentComponent },
    { path: '**', component: ResultBodyComponent }
    // { path: '**', component: ErrorPageComponent, data: { message: 'Page not found!' } },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}