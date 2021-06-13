import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeGuestPage } from './home-guest.page';

const routes: Routes = [
  {
    path: 'tabs',
    component:HomeGuestPage,
    children: [
      {
         path: 'beranda',
         children:[
           {
             path:'',
             loadChildren:() =>import('../pages/beranda/beranda.module').then(m => m.BerandaPageModule)
           }
         ]
      },
      {
        path: 'chat',
        children:[
          {
            path:'',
            loadChildren:() =>import('../pages/chat/chat.module').then(m => m.ChatPageModule)
          }
        ]
      },
      {
        path: 'recruitment',
        children:[
          {
            path:'',
            loadChildren:() =>import('../pages/recruitment/recruitment.module').then(m => m.RecruitmentPageModule)
          }
        ]
      },
      {
        path: 'profil',
        children:[
          {
            path:'',
            loadChildren:() =>import('../pages/profil/profil.module').then(m => m.ProfilPageModule)
          }
        ]
      },
      {
        path: 'video',
        children:[
          {
            path:'',
            loadChildren:() =>import('../pages/video/video.module').then(m => m.VideoPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'/tabs/beranda',
        pathMatch:'full'

      }


    ]
  },

  {
    path:'',
    redirectTo:'/tabs/beranda',
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeGuestPageRoutingModule {}
