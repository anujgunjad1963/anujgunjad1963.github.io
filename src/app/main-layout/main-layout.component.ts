import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ChartComponent,
  ApexStroke,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexMarkers,
  ApexTooltip
} from "ng-apexcharts";

import { ChartData, ChartOptions } from 'chart.js';

interface Entry {
  value: number;
  viewValue: number;
}


export type mixChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

//Apex Chart
export type ChartOptionsTwo = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[] | any;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

export type ChartOptionsThree = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('lineChartOne') lineChartOne: ElementRef;
  @ViewChild('lineChartTwo') lineChartTwo: ElementRef;

  @ViewChild("apex-mix-chart") mixchart: ChartComponent;
  public mixChartOptions: Partial<ChartOptions> | any;

  //Apex Chart
  @ViewChild("chart") chart: ChartComponent;
  public chartOptionsOne: Partial<ChartOptionsTwo> | any;
  public chartOptionsTwo: Partial<ChartOptionsThree> | any;


  gradient: any = null;

  entries: Entry[] = [
    { value: 10, viewValue: 10 },
    { value: 20, viewValue: 20 },
    { value: 30, viewValue: 30 },
  ];

  lineSalesDataOne: ChartData<'line'>;
  lineSalesDataTwo: ChartData<'line'>;

  lineChartOptions: ChartOptions = {
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    animation: {
      duration: 800,
      easing: 'linear',
      delay: 0,
      loop: false,
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
      },
    },
  };

  barSalesData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'Jun'],
    datasets: [
      {
        backgroundColor: ['#EEF2F8', '#EEF2F8', '#074aaa', '#EEF2F8', '#EEF2F8'],
        hoverBackgroundColor: '#074aaa',
        barThickness: 20,
        borderRadius: 9,
        data: [20, 36, 91, 56, 21, 10],
      },
    ],
  };

  barChartOptions: ChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,

    maintainAspectRatio: false,

    animation: {
      duration: 800,
      easing: 'linear',
      delay: 0,
      loop: false,
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
      },
    },
  };

  doughnutSalesData: ChartData<'doughnut'> = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        backgroundColor: [
          '#074aaa',
          '#074aaa',
          '#074aaa',
          '#ff9f43',
          '#074aaa',
        ],
        hoverBackgroundColor: '#074aaa',
        borderWidth: [1, 1, 1, 1, 1],
        data: [10, 50, 25, 70, 40],
      },
    ],
  };

  doughnutChartOptions: ChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,

    animation: {
      duration: 800,
      easing: 'linear',
      delay: 0,
      loop: false,
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
      },
    },
  };

  radarSalesData: ChartData<'radar'> = {
    labels: ['English', 'Maths', 'Physics', 'Chemistry', 'Biology', 'History'],
    datasets: [
      {
        label: 'Student A',
        backgroundColor: '#074aaa',
        data: [65, 75, 70, 80, 60, 80],
      },
      {
        label: 'Student B',
        backgroundColor: '#ff9f43',
        data: [54, 65, 60, 70, 70, 75],
      },
    ],
  };

  radarChartOptions: ChartOptions = {
    elements: {
      point: {
        radius: 4,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    maintainAspectRatio: false,

    animation: {
      duration: 800,
      easing: 'linear',
      delay: 0,
      loop: false,
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
      },
    },
  };

  constructor(private _cd: ChangeDetectorRef) {

    this.mixChartOptions = {
      series: [
        {
          name: "Website Blog",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201]
        },
        {
          name: "Social Media",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17]
        }
      ],
      chart: {
        height: 200,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: "Traffic Sources"
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
      
        
      ],
      fill: {
        colors: ['#7574F0', '#2BCFE8'],
        opacity: 10
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: [
        {
          title: {
            text: "Website Blog"
          }
        },
        {
          opposite: true,
          title: {
            text: "Social Media"
          }
        }
      ]
    };
    
    this.chartOptionsOne = {
      series: [67],
      chart: {
        height: 310,
        type: "radialBar",
        offsetY: -50
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "14px",
              fontFamily: "Montserrat,Helvetica,Arial,serif",
              color: "#6e6b7b",
              offsetY: 0
            },
            value: {
              offsetY: 20,
              fontSize: "22px",
              fontFamily: "Montserrat,Helvetica,Arial,serif",
              color: "#6e6b7b",
              formatter: function(val : any) {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#6610f2"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 4
      },
      labels: ["Completed Ticket"]
    };

    this.chartOptionsTwo = {
      series: [
        {
          name: "Series Red",
          data: [80, 50, 30, 40, 100, 20]
        },
        {
          name: "Series Green",
          data: [20, 30, 40, 80, 20, 80]
        },
      ],
  
      chart: {
        height: 350,
        type: "radar",
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        },
      },
      plotOptions: {
        radar: {
          polygons: {
                  strokeColors: ['#e8e8e8', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
                  connectorColors: 'transparent'
            }
        }
      },
     
      stroke: {
        width: 0
      },
      fill: {
        colors: ['#7574F0', '#2BCFE8'],
        opacity: 10
      },
      markers: {
        size: 0
      },
      
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
      },
      dataLabels: {
        enabled: true,
        background: {
            enabled: true,
            borderRadius:2,
        }
    },

    };
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    let ctxOne = this.lineChartOne.nativeElement.getContext('2d');
    let gradientOne = ctxOne.createLinearGradient(0, 0, 0, 90);
    gradientOne.addColorStop(0, 'rgb(218,215,251)');
    gradientOne.addColorStop(1, '#fff');

    let ctxTwo = this.lineChartTwo.nativeElement.getContext('2d');
    let gradientTwo = ctxTwo.createLinearGradient(0, 0, 0, 90);
    gradientTwo.addColorStop(0, 'rgb(255,238,221)');
    gradientTwo.addColorStop(1, '#fff');

    this.lineSalesDataOne = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          pointStyle: 'circle',
          fill: true,
          backgroundColor: gradientOne,
          borderColor: '#074aaa',
          data: [100, 116, 99, 141, 115],
          tension: 0.4,
        },
      ],
    };

    this.lineSalesDataTwo = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          pointStyle: 'circle',
          fill: true,
          backgroundColor: gradientTwo,
          borderColor: '#ff9f43',
          data: [100, 116, 99, 141, 115],
          tension: 0.4,
        },
      ],
    };
  }
}
