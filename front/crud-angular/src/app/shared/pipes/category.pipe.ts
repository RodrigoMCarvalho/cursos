import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorypipe'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Backend': return 'check_circle';
      case 'Frontend': return 'check_circle_outline';
    }
    return 'check_circle';
  }

}
