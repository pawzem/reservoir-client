import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  links = [
    { title: 'Privacy policy', fragment: '' },
    { title: 'Contact us', fragment: '' },
    { title: 'Regulations', fragment: '' }
  ];
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
