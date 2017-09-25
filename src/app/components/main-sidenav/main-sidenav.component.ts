import { SocialItem } from './social-item';
import { MenuItem } from './menu-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.scss']
})

export class MainSidenavComponent implements OnInit {

  menu: MenuItem[] = [
    {name: 'Awards', link: 'awards', icon: ''},
    {name: 'Resume', link: 'resume', icon: ''},
    {name: 'Blog', link: 'blog', icon: ''},
    {name: 'Projects', link: 'projects', icon: ''},
    {name: 'Contact', link: 'contact', icon: ''},
    {name: 'About the Site', link: 'about-the-site', icon: ''}
  ];

  social: SocialItem[] = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/austinstewart',
      icon: 'fa-linkedin-square'
    },
    {
      name: 'Email',
      link: 'mailto:hello@austinthedeveloper.com',
      icon: 'fa-envelope'
    },
    {
      name: 'GitHub',
      link: 'https://github.com/austinthedeveloper/',
      icon: 'fa-github-square'
    },
    {
      name: 'Stack Overflow',
      link: 'http://stackoverflow.com/users/2404112/austinthedeveloper',
      icon: 'fa-stack-overflow'
    },
    {
      name: 'Phone',
      link: 'tel:8304562261',
      icon: 'fa-phone'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
