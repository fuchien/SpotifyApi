import { Component, OnInit } from '@angular/core';

import { AlbumModel } from './../../album-model';
import { ArtistModel } from './../../artist-model';
import { SpotifyService } from './../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  album: AlbumModel[];

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })
      })
  }

}
