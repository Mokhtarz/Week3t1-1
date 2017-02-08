import { MediaService } from './../services/media.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {
  private image: any = [];
  constructor(private router: Router, private mediaService: MediaService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      console.log(params.fileid);

      this.mediaService.getMediaFile(params.fileid).subscribe(
        res => {
          console.log(res);
          this.image = res;
        }
      );

    }

    );


  }

}
