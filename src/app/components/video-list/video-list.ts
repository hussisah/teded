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
  otherVideos: any[] = [];
  featuredVideos: any;
  date: any[] = [];
  topic: any[] = []; // Added topic property

  constructor(private videoService: VideoService) {
    this.featuredVideos = this.videoService.getFeaturedVideo();
    this.otherVideos = this.videoService.getOtherVideos();
    this.date = this.videoService.date();
    this.topic = this.videoService.topic(); // Fetching topics from the service
}
}
