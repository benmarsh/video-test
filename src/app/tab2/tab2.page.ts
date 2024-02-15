import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild('videoElement') videoElement: any;

  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get('assets/flower.mp4', {responseType: 'blob'}).subscribe((response) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const videoElement: HTMLVideoElement = this.videoElement.nativeElement;
        videoElement.src = reader.result as string
      }
      reader.readAsDataURL(response);
    });
  }
}
