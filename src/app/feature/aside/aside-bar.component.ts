import { Component} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleRight, faArrowRight, faBars, faCodeBranch, faGear } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { CommonModule, NgClass } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { faAddressBook, faCalendar, faEnvelope, faFile, faListAlt, faMessage } from '@fortawesome/free-regular-svg-icons';
import { NavService } from '@app/service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'aside-bar',
  standalone: true,
  imports: [
    FaIconComponent,
    CommonModule,RouterLink,
    RouterLinkActive,
    MatIcon,
    NgClass
  ],
  templateUrl: './aside-bar.component.html',
  styleUrl: './aside-bar.component.scss'
})
export class AsideBarComponent {
  sections = [
    {
      nameSection:'main',
      branch:[
        {
          name: 'dashboard',
          'icon':faGear,
          'child':[
            {
              'name':'E-Commerce',
              'navigateTo':'dashboard/ecommerce'
            },
            {
              'name':'CRM',
              'navigateTo':'dashboard/crm'
            },
            {
              'name':'Project Management',
              'navigateTo':'dashboard/project-management'
            },
            {
              'name':'LMS',
              'navigateTo':'dashboard/lms'
            }
          ],
          navigateTo:'dashboard'
        }
      ]
    },
    {
      nameSection:'apps',
      branch:[
        {
          name: 'to do list',
          'icon':faListAlt,
          'child':null,
          navigateTo:'to-do-list'
        },
        {
          name: 'calendar',
          'icon':faCalendar,
          'child':null,
          navigateTo:'calendar'
        },
        {
          name: 'contacts',
          'icon':faAddressBook,
          'child':null,
          navigateTo:'contacts'
        },
        {
          name: 'chat',
          'icon':faMessage,
          'child':null,
          navigateTo:'chat'
        },
        {
          name: 'email',
          'icon':faEnvelope,
          'child':[
            {
              'name':'inbox',
              'navigateTo':'email'
            },
            {
              'name':'compose',
              'navigateTo':'email/compose'
            },
            {
              'name':'read',
              'navigateTo':'email/read'
            }
          ],
          navigateTo:'email'

        },
        {
          name: 'file manager',
          'icon':faFile,
          'child':[
            {
              'name':'my drive',
              'navigateTo':'file-manager'
            },
            {
              'name':'assets',
              'navigateTo':'file-manager/assets'
            },
            {
              'name':'applications',
              'navigateTo':'file-manager/applications'
            }
          ],
          navigateTo:'file-manager'
        },
        {
          name: 'kanban board',
          'icon':faFile,
          'child':null,
          navigateTo:'kanban-board'
        }
      ]
    },
    {
      nameSection:'pages',
      branch:[
        {
          name: 'ecommerce-page',
          'icon':faMessage,
          'child':[
            {
              'name':'products grid',
              'navigateTo':'ecommerce-page'
            },
            {
              'name':'products list',
              'navigateTo':'ecommerce-page/products-list'
            },
            {
              'name':'product details',
              'navigateTo':'ecommerce-page/product-details'
            },
            {
              'name':'create product',
              'navigateTo':'ecommerce-page/create-product'
            },
            {
              'name':'edit product',
              'navigateTo':'ecommerce-page/edit-product'
            },
            {
              'name':'cart',
              'navigateTo':'ecommerce-page/cart'
            },
            {
              'name':'checkout',
              'navigateTo':'ecommerce-page/checkout'
            },
            {
              'name':'orders',
              'navigateTo':'ecommerce-page/orders'
            },
            {
              'name':'order details',
              'navigateTo':'ecommerce-page/order-details'
            },
            {
              'name':'create order',
              'navigateTo':'ecommerce-page/create-order'
              },
            {
              'name':'order tracking',
              'navigateTo':'ecommerce-page/order-tracking'
            },
            {
              'name':'customers',
              'navigateTo':'ecommerce-page/customers'
            },
            {
              'name':'customer details',
              'navigateTo':'ecommerce-page/customer-details'
            },
            {
              'name':'categories',
              'navigateTo':'ecommerce-page/categories'
            },
            {
              'name':'create category',
              'navigateTo':'ecommerce-page/create-category'
            },
            {
              'name':'edit category',
              'navigateTo':'ecommerce-page/edit-category'
            },
            {
              'name':'sellers',
              'navigateTo':'ecommerce-page/sellers'
            },
            {
              'name':'seller details',
              'navigateTo':'ecommerce-page/seller-details'
            },
            {
              'name':'create seller',
              'navigateTo':'ecommerce-page/create-seller'
            },
            {
              'name':'reviews',
              'navigateTo':'ecommerce-page/reviews'
            },
            {
              'name':'refunds',
              'navigateTo':'ecommerce-page/refunds'
            }
          ],
          navigateTo:'ecommerce-page'
        }
      ]
    }
  ]
  openLinks = ''
  faAngleRight:IconDefinition = faAngleRight
  faArrowRight:IconDefinition = faArrowRight;
  faAngleDown:IconDefinition = faAngleDown
  faBars:IconDefinition = faBars
  faCalendar:IconDefinition = faCalendar
  faAddressBook:IconDefinition= faAddressBook
  faMessage:IconDefinition = faMessage
  faEnvelope:IconDefinition = faEnvelope
  faCodeBranch:IconDefinition = faCodeBranch
  faFile:IconDefinition = faFile
  faListAlt:IconDefinition = faListAlt
  isShowAside = false;

  constructor(private navService:NavService,private router:Router){}

  toggleAside(){
    this.isShowAside = !this.isShowAside
    this.navService.changeValue(this.isShowAside)
    console.log(this.isShowAside)
  }

  togleOpenList(nameBranch:string){

    if(this.openLinks == nameBranch){
      this.openLinks = ''
    }else{
    this.openLinks = nameBranch
    }
  }


  stopPropagation(event: MouseEvent):void {
    event.stopPropagation();
  }

}
