import { Component } from '@angular/core';
import { VideoList } from './components/video-list/video-list';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VideoList],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'teded';
}
