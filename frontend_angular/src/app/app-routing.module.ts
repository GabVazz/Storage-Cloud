import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { VisualizzaFileComponent } from './visualizza-file/visualizza-file.component';
import { ImmaginiComponent } from './visualizza-file/immagini/immagini.component';
import { VideoComponent } from './visualizza-file/video/video.component';
import { MessaggiComponent } from './visualizza-file/messaggi/messaggi.component';
import { ProgettiComponent } from './visualizza-file/progetti/progetti.component';
import { AreaPersonaleComponent } from './visualizza-file/area-personale/area-personale.component';
import { VideoPlayerComponent } from './video-player/video-player.component';


const routes: Routes = [
  { path: '', component: HomeComponent },          // Percorso di default
  { path: 'registrazione', component: RegistrazioneComponent },   
  { path: 'login', component: LoginComponent },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'visualizzaFile', component: VisualizzaFileComponent},
  {path: 'immagini', component: ImmaginiComponent},
  {path: 'video', component: VideoComponent},
  {path: 'messaggi', component: MessaggiComponent},
  {path: 'progetti', component: ProgettiComponent},
  {path: 'areaPersonale', component: AreaPersonaleComponent},
  { path: 'video/:id', component: VideoPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
