import { Injectable } from '@angular/core';
import { Video } from '../models/video.model';
import videosData from '../../assets/data/videos.json';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videos: Video[] = videosData.videos;

//slice method 
 getFeaturedVideo(): Video {
    return this.videos.slice(0, 1)[0]; // Using slice() to get first video
  }

  getOtherVideos(): Video[] {
    return this.videos.slice(1); // Using slice() to get remaining videos
  }
  //map method to get date
  date(): string[] {
    return this.videos.map(video => video.date);
  }
   topic(): string[] {
    return this.videos.map(video => video.topic);  
   }
 
}