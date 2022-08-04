import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { FoodService } from '../food.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {



  constructor(private foodSvc: FoodService) { }

  ngOnInit(): void {

    type EChartsOption = echarts.EChartsOption

    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      title: {
        text: 'Today\'s Macronutrient',
        subtext: 'in percentage',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'nutrient',
          type: 'pie',
          radius: '50%',
          data: [
            { value: this.foodSvc.getTodayFatPercentage(), name: 'Fat' },
            { value: this.foodSvc.getTodayCarbonPercentage(), name: 'Carbohydrates' },
            { value: this.foodSvc.getTodayProteinPercentage(), name: 'Protein' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label: {
            formatter: '{b}: {c} ({d}%)',
          },
        }
      ]
    };

    option && myChart.setOption(option);
  }

}
