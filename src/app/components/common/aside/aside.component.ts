import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ExtraContentService } from '../../../services/extra-content/extra-content.service';
import { AvailablePages } from '../../../interfaces/AvailablePages';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent implements OnInit {
  asideButtonIcon: string = "bi-x-lg"; //bi-list
  windowWidth: number = window.innerWidth
  actived: boolean = this.windowWidth <= 768 ? false : true;
  allAvailablePages!: AvailablePages[];
  availablePagesToNavigate!: AvailablePages[];
  currentPage!: string;

  @ViewChild('asideBar') asideBar!: ElementRef;

  constructor(private _router: Router, private _extraContent: ExtraContentService) { }

  ngOnInit(): void {
    this.asideButtonIcon = this.actived ? "bi-x-lg" : "bi-list";
    this.allAvailablePages = this._extraContent.availablePages;
    
    this.availablePagesToNavigate = this.filterAvailablePages("/");
    this.currentPage = "Carros";

    this._router.navigate(["/"]);
  }

  changePage(path: string){
    this._router.navigate([`${path}`]);
    this.closeAsideOnMobilePages();
    this.changeAvailablePagesToNavigate(path);
  }

  changeAvailablePagesToNavigate(pathNavigated: string){
    this.availablePagesToNavigate = this.availablePagesToNavigate.map(page => {
      if(page.pagePath === pathNavigated){

        const pageToSubstitute = this.allAvailablePages.find(page => page.pageTitle === this.currentPage)!;

        this.currentPage = page.pageTitle;

        return pageToSubstitute;
      }
      
      return page;
    })
  }

  filterAvailablePages(path: string): AvailablePages[]{
    return this.allAvailablePages.filter(page => page.pagePath !== path);
  }

  closeAside(){
    this.asideBar.nativeElement.classList.toggle('active');
    this.actived = !this.actived;
    this.asideButtonIcon = this.actived ? "bi-x-lg": "bi-list";
  }

  closeAsideOnMobilePages(){
    if(window.innerWidth <= 768){
      this.closeAside();
      this.asideBar.nativeElement.scrollTop = 0;
    }
  }
}
