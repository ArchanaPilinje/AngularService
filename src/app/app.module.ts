import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  }

]




@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    HomeComponent,
    PostsComponent,
    TodosComponent,
    AlbumsComponent
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
