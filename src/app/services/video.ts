import { Injectable } from '@angular/core';
import { Video } from '../models/video.model';
import videosData from '../../assets/data/videos.json';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videos: Video[] = videosData.videos;


  getFeaturedVideos(): Video[] {
    return this.videos.slice(0); 
  }
  getOtherVideos(): Video[] {
    return this.videos.slice(1,4); // Using slice() to get remaining videos
  }
}