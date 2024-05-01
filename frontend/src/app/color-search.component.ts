// import { Component } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { PaletteService } from './services/palette.service';
// import { Color } from './models';

// @Component({
//   selector: 'app-color-search',
//   template: `
//     <div class="search-bar">
//       <i class="search-icon">🔍</i>
//       <input type="text" placeholder="Search with hex values..." (input)="onSearch($event)">
//     </div>
//     <div *ngFor="let color of searchResults | async" [style.background]="color.hex_value" class="color-display">
//       {{ color.hex_value }}
//     </div>
//   `,
//   styles: [`
//     .color-display {
//       width: 100px;
//       height: 100px;
//       margin: 5px;
//       color: white;
//       display: inline-block;
//       text-align: center;
//       line-height: 100px;
//     }
//   `]
// })
// export class ColorSearchComponent {
//   searchResults: Observable<Color[]> = of([]); 

//   constructor(private paletteService: PaletteService) {}

//   onSearch(event: Event): void {
//     const inputElement = event.target as HTMLInputElement; 
//     const value = inputElement.value; 
//     if (value) {
//       this.searchResults = this.paletteService.searchColors(value);
//     }
//   }
// }
