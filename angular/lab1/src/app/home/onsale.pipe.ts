import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onsale'
})
export class OnsalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if (value) {
      return 'Đang hạ giá'
    }
    return ''
  }

}
// Khởi tạo cho nó và để nó tự so sánh nếu giá trị là true thì in ra đại hạ giá còn false thì in ra khoảng trống
