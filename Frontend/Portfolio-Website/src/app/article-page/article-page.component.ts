import { Component, OnInit } from '@angular/core';

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';

import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
})
export class ArticlePageComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faPinterest = faPinterest;
  faArrowRight = faArrowRightLong;
  constructor() {}

  ngOnInit(): void {}
}
