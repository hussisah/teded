import { Component,Input } from '@angular/core';
import { Video } from '../../models/video.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-card.html',
  styleUrls: ['./video-card.scss']
})
export class VideoCard {
    @Input() video!: Video;
}
