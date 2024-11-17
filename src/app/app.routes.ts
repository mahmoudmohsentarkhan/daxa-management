import { Routes } from '@angular/router';
export const routes: Routes = [
  {path:'dashboard',loadChildren: () => import('./feature/content-view/component/dashborad/dashborad.module').then(m=>m.DashboardModule )},
  {path:'to-do-list', loadComponent: ()=>import('./feature/content-view/component/to-do-list/to-do-list.component').then(c=>c.ToDoListComponent)},
  {path:'calendar', loadComponent: ()=>import('./feature/content-view/component/calendar/calendar.component').then(c=>c.CalendarComponent)},
  {path:'contacts', loadComponent: ()=>import('./feature/content-view/component/contacts/contacts.component').then(c=>c.ContactsComponent)},
  {path:'chat', loadComponent: ()=>import('./feature/content-view/component/chat/chat.component').then(c=>c.ChatComponent)},
  {path:'email', loadChildren: ()=>import('./feature/content-view/component/email/email.module').then(m=>m.EmailModule)},
  {path:'file-manager', loadChildren: ()=>import('./feature/content-view/component/file-manager/file-manager.module').then(m=>m.FileManagerModule)},
  {path:'kanban-board', loadComponent: ()=>import('./feature/content-view/component/kanban-board/kanban-board.component').then(c=>c.KanbanBoardComponent)},

  {path:'ecommerce-page', loadChildren: ()=>import('./feature/content-view/component/e-commerce/e-commerce.module').then(c=>c.ECommerceModule)},
  {path:'**',redirectTo:'dashboard'},
];

