import { Injectable } from '@angular/core';
import { Video } from '../models/video.model';
import videosData from '../../assets/data/videos.json';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videos: Video[] = videosData.videos;

//slice method 
  getFeaturedVideos(): Video[] {
    return this.videos.slice(0); 
  }
  //map method to get date
  date(): string[] {
    return this.videos.map(video => video.date);
  }
   topic(): string[] {
    return this.videos.map(video => video.topic);  
   }
 
}