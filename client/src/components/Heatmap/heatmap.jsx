import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'hammerjs';
import { Chart, ChartTitle, ChartSeries, ChartSeriesItem, ChartXAxis, ChartXAxisItem, ChartYAxis, ChartYAxisItem } from '@progress/kendo-react-charts';
import { data } from './commit-data';
const dayLabels = {
  1: 'Mon',
  3: 'Wed',
  5: 'Fri'
};
const yAxisLabelContent = e => dayLabels[e.value] || '';
const ChartContainer = () => {
  return <Chart style={{
    width: '400px',
    height: '220px'
  }}>
        <ChartTitle text="Contributions per day" margin={{
      left: 40
    }} />

        <ChartSeries>
          <ChartSeriesItem type="heatmap" data={data} color="#216e39" labels={{
        visible: false
      }} markers={{
        type: 'roundedRect',
        border: {
          width: 2
        }
      }} />
        </ChartSeries>

        <ChartXAxis>
          <ChartXAxisItem visible={false} />
        </ChartXAxis>

        <ChartYAxis>
          <ChartYAxisItem reverse={true} line={{
        visible: false
      }} labels={{
        content: yAxisLabelContent
      }} />
        </ChartYAxis>
      </Chart>;
};
export default ChartContainer;
