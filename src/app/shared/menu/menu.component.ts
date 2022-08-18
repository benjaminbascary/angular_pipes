import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { last } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
			{
				label: 'Angular Pipes',
				icon: 'pi pi-desktop',
				items: [
					{
						label: 'Texts and Dates',
						icon: 'pi pi-align-left',
						routerLink: ' '
					},
					{
						label: 'Numbers',
						icon: 'pi pi-hashtag',
						routerLink: 'numbers'
					},
					{
						label: 'Ordinate',
						icon: 'pi pi-bars',
						routerLink: 'ordinate'
					},
					{
						label: 'Uncommon',
						icon: 'pi pi-circle',
						routerLink: 'uncommon'
					}
				]
			},
			{
				label: 'Custom Pipes',
				icon: 'pi pi-cog'
			}
		];
  }
}
