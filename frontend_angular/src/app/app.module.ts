import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { VisualizzaFileComponent } from './visualizza-file/visualizza-file.component';

// Services
import { MessageService } from 'primeng/api';  // Importa il MessageService

// Importa i moduli di PrimeNG necessari
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ListboxModule } from 'primeng/listbox';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { ImmaginiComponent } from './visualizza-file/immagini/immagini.component';
import { VideoComponent } from './visualizza-file/video/video.component';
import { MessaggiComponent } from './visualizza-file/messaggi/messaggi.component';
import { ProgettiComponent } from './visualizza-file/progetti/progetti.component';
import { AreaPersonaleComponent } from './visualizza-file/area-personale/area-personale.component';
import { DropdownModule } from 'primeng/dropdown';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    VisualizzaFileComponent,
    ImmaginiComponent,
    VideoComponent,
    MessaggiComponent,
    ProgettiComponent,
    AreaPersonaleComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
    ListboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    DialogModule,
    SelectButtonModule,
    FormsModule,
    DropdownModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
