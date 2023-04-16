import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('albumCover') albumCover!: ElementRef;

  ngOnInit() {
  }

  downloadImage() {
    const album = document.getElementById('img')



    // @ts-ignore
    html2canvas(album, {scrollY: -window.scrollY}).then(function(canvas) {
      var img = canvas.toDataURL();
      window.open(img);
    });
  }

  //Creating dynamic link that automatically click
}
