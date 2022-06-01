/**
 * @license
 * Copyright 2021 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// tslint:disable:no-magic-numbers

import { Component } from '@angular/core';

import { generateData } from '../chart-data-utils';

import { DtColors } from '@dynatrace/barista-components/theming';
import {
  DtChartOptions,
  DtChartSeries,
} from '@dynatrace/barista-components/chart';

@Component({
  selector: 'dt-example-chart-loading',
  templateUrl: 'chart-loading-example.html',
})
export class DtExampleChartLoading {
  options: DtChartOptions = {
    xAxis: {
      type: 'datetime',
    },
    yAxis: [
      {
        title: undefined,
        labels: {
          format: '{value}',
        },
        tickInterval: 10,
      },
    ],
  };

  series: DtChartSeries[] | null;

  toggleData(): void {
    const dummyData: DtChartSeries[] = [
      {
        name: 'Failure rate',
        type: 'line',
        color: DtColors.ROYALBLUE_700,
        data: generateData(40, 0, 20, 1370304000000, 900000),
      },
    ];
    this.series = !this.series ? dummyData : null;
  }
}

// tslint:enable:no-magic-numbers
