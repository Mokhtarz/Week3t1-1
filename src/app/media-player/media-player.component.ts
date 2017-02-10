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
  private user: any[];
  private userid: any;
  private fileid: any;
  constructor(private router: Router, private mediaService: MediaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
    console.log(this.userid);

    this.getUsername(this.userid);

  }
    

  getParams = () => {
    this.route.params.subscribe((params: any) => {
      console.log(params.fileid);
      this.userid = params.fileid;
    }
    );
  }
  getUsername = (user: any) => {
    this.mediaService.getUserInfo(user).subscribe(
      respon => {
        console.log(respon);
        this.user = respon;
      }
    );
  }

  getFile = (file: any) => {
    
  }



}
