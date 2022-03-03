import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {Router} from "@angular/router";
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{
 
    width;
    height;
    mode:string = 'side';
    open = 'true';
    title = 'Responsive Sidenav Starter';
    @ViewChild(MatAccordion) accordion: MatAccordion;
    name = 'Angular';
    selected?: string = undefined;
    navList: NavList[];

    constructor(public ngZone:NgZone,
                public route: Router,)
    {
        this.navList = [
            { categoryName: 'Tipo 1', icon: 'face', dropDown:false,
                subCategory:
                    [
                        { subCategoryName: 'Item 1', subCategoryLink:'/link', subCategoryQuery: {title: 'query item 1'}, visable: true, },
                        { subCategoryName: 'Item 2', subCategoryLink:'/link1', visable: true, },
                        { subCategoryName: 'Item 3', subCategoryLink:'/link1', visable: true, },
                    ]
            },
            { categoryName: 'Tab 2', icon: 'question_answer', dropDown:false,
                subCategory:
                    [
                        { subCategoryName: 'Item 1', subCategoryLink:'/link1', visable: true, },
                        { subCategoryName: 'Item 2', subCategoryLink:'/link1', visable: true, },
                        { subCategoryName: 'Item 3', subCategoryLink:'/link1', visable: true, },
                    ]
            },
            { categoryName: 'Tab 3', icon: 'work', dropDown:false,
                subCategory:
                    [
                        { subCategoryName: 'Item 1', subCategoryLink:'/link1', visable: true, },
                        { subCategoryName: 'Item 2', subCategoryLink:'/link1', visable: true, },
                    ]
            },
        ];
        this.changeMode();
        window.onresize = (e) => {
            ngZone.run(() => {
                this.changeMode();
            });
        };
    }
    onSelected(item: string) {
      this.selected = item;
      this.name = item;
    }

    ngOnInit() {

    }

    changeMode() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      if(this.width <= 800) {
          this.mode = 'over';
          this.open = 'false';
      }
      if(this.width > 800) {
          this.mode = 'side';
          this.open = 'true';
      }
  }

}

export class NavList {
    categoryName: string;
    icon: string;
    dropDown: boolean;
    subCategory: NavListItem[];
    constructor(_categoryName:string,_icon:string,_dropDown:boolean,_subCategory:NavListItem[]) {
        this.categoryName = _categoryName;
        this.icon = _icon;
        this.dropDown = _dropDown;
        this.subCategory = _subCategory;
    }
}

export class NavListItem {
    subCategoryName: string;
    subCategoryLink: string;
    subCategoryQuery?: any;
    visable: boolean;
}
