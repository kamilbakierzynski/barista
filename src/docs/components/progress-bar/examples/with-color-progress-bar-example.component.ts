import { Component } from '@angular/core';
import { OriginalClassName } from '../../../core/decorators';

@Component({
  template: `<dt-progress-bar [value]="45" [color]="color"></dt-progress-bar>
  <div>
  <dt-button-group [value]="color" (valueChange)="changed($event)">
    <dt-button-group-item value="main">main</dt-button-group-item>
    <dt-button-group-item value="accent">accent</dt-button-group-item>
    <dt-button-group-item value="warning">warning</dt-button-group-item>
    <dt-button-group-item value="error">error</dt-button-group-item>
    <dt-button-group-item value="recovered">recovered</dt-button-group-item>
  </dt-button-group>
  </div>`,
  styles: ['dt-progress-bar {margin: 8px 0}'],
})
@OriginalClassName('WithColorProgressBarExampleComponent')
export class WithColorProgressBarExampleComponent {
  color = 'error';

  changed(val: string): void {
    this.color = val;
  }
}
