import { Component } from '@angular/core';
import { VideoService } from '../../services/video';
import { VideoCard } from '../video-card/video-card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule, VideoCard],
  templateUrl: './video-list.html',
  styleUrls: ['./video-list.scss']
})
export class VideoList {
  featuredVideos: any;
  otherVideos: any[] = [];

  constructor(private videoService: VideoService) {
    
    this.featuredVideos = this.videoService.getFeaturedVideos();
    this.otherVideos = this.videoService.getOtherVideos();
  }
}
