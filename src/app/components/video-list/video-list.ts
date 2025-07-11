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
  date: any[] = [];
  topic: any[] = []; // Added topic property

  constructor(private videoService: VideoService) {
    
    this.featuredVideos = this.videoService.getFeaturedVideos(); //slice method
    this.date = this.videoService.getFeaturedVideos().map(video => video.date); //map method to get date
    this.topic = this.videoService.getFeaturedVideos().map(video => video.topic); //map method to get topic
  }
}
