import * as Highcharts from 'highcharts';

// Chart 1
export var Highcharts1: typeof Highcharts = Highcharts;
export var chartOptions1: Highcharts.Options = {

    
		chart: {
            width: '190',
            height: '190',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie',
			styledMode: true
		},
		credits: {
			enabled: false
		},
        exporting: {
			buttons: {
				contextButton: {
					enabled: false,
				}
			}
		},
		title: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				showInLegend: false
			}
		},
		series: [{
			name: 'Users',
			type: 'pie',
			colorByPoint: true,
			data: [{
				name: 'Male',
				y: 61.41,
				//sliced: true,
				selected: true
			}, {
				name: 'Female',
				y: 11.84
			}]
		}]
    
  };


// Chart 2 

export var Highcharts2: typeof Highcharts = Highcharts;
export var chartOptions2: Highcharts.Options = {
    
		chart: {
			height: 360,
			type: 'column',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Traffic Sources Status. January, 2021'
		},
		accessibility: {
			announceNewData: {
				enabled: true
			}
		},
		xAxis: {
			type: 'category'
		},
		yAxis: {
			title: {
				text: 'Traffic Sources Status'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: true,
					format: '{point.y:.1f}%'
				}
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
		},
		series: [{
			name: "Traffic Sources",
			colorByPoint: true,
			type: 'column',
			data: [{
				name: "Organic Search",
				y: 62.74,
				drilldown: "Organic Search"
			}, {
				name: "Direct",
				y: 40.57,
				drilldown: "Direct"
			}, {
				name: "Referral",
				y: 25.23,
				drilldown: "Referral"
			}, {
				name: "Others",
				y: 10.58,
				drilldown: "Others"
			}]
		}],
		
};




// Chart 3 

export var Highcharts3: typeof Highcharts = Highcharts;
export var chartOptions3: Highcharts.Options = {
    
		chart: {
			height: 360,
			type: 'column',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Visitor Age Group Status'
		},
		accessibility: {
			announceNewData: {
				enabled: true
			}
		},
		xAxis: {
			type: 'category'
		},
		yAxis: {
			title: {
				text: 'Age Group Status'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: true,
					format: '{point.y:.1f}K'
				}
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
		},
		series: [{
			name: "Age Group",
            type: 'column',
			colorByPoint: true,
			data: [{
				name: "18-24",
				y: 35.74,
				//drilldown: "Organic Search"
			}, {
				name: "25-34",
				y: 65.57,
				//drilldown: "Direct"
			}, {
				name: "35-44",
				y: 30.23,
				//drilldown: "Referral"
			}, {
				name: "45-54",
				y: 20.58,
				//drilldown: "Others"
			}, {
				name: "55-64",
				y: 15.58,
				//drilldown: "Others"
			}, {
				name: "65-80",
				y: 8.58,
				//drilldown: "Others"
			}]
		}],

};
