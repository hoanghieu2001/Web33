import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: "progress-bar",
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  //   implements" được sử dụng để áp dụng một hoặc nhiều giao diện cho một lớp.
  // Khi một lớp "implements" một giao diện, nó phải triển khai tất cả các phương thức và thuộc tính được khai báo trong giao diện đó.Điều này đảm bảo rằng lớp sẽ tuân thủ các quy tắc và định nghĩa của giao diện.
  //   @Input() set progress(val: number) {
  //     if (typeof val !== "number") {
  //       const progress = Number(val);
  //       if (Number.isNaN(progress)) {
  //         this._progress = 0;
  //       } else {
  //         this._progress = progress;
  //       }
  //     }
  //     this._progress = val;
  //   }
  //   private _progress = 50;
  //   get progress() {
  //     return this._progress
  //   }

  //   @Input() backgroundColor = '#CCC';
  //   @Input() progressColor = 'tomato';
  //   constructor() {
  //   }
  // }

  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'toamato';
  @Input() progress = 50;

  constructor() {

  }


  ngOnInit() { console.log('Onnit', { progress: this.progress, backgroundColor: this.backgroundColor, progressColor: this.progressColor }); }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ progress: this.progress, backgroundColor: this.backgroundColor, progressColor: this.progressColor });

  }
}
