import { Component } from '@angular/core';
import { VideoList } from './components/video-list/video-list';
import { Header } from "./components/header/header";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VideoList, Header],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'teded';
}
