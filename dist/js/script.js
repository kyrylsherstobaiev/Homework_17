// Vertical bar chart
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
	type: "line",
	data: {
		labels: ["1", "2", "3", "4"],
		datasets: [
			{
				label: "First label",
				data: [10, 18, 47, 3],
				backgroundColor: ["#98acf880"],
				borderColor: ["#98acf8"],
				borderWidth: 2,
				//**  для того чтобы убрать points на графике нужно сделать pointRadius:0
				pointRadius: 3,
				pointHoverRadius: 5,
				pointBorderColor: "#98acf8",
				pointBackgroundColor: "#98acf8",
				pointStyle: "circle",
			},
			{
				label: "Second label",
				data: [12, 37, 13, 14],
				backgroundColor: ["#da9ff950"],
				borderColor: ["#da9ff9"],
				borderWidth: 2,
				pointRadius: 3,
				pointHoverRadius: 5,
				pointBorderColor: "#da9ff9",
				pointBackgroundColor: "#da9ff9",
				pointStyle: "circle",
			},
		],
	},
	options: {
		legend: {
			display: false,
		},

		title: {
			display: false,
			//text: 'Life Expectancy by Country',
			position: "top",
			fontSize: 10,
		},
		scales: {
			yAxes: [
				{
					gridLines: false,
					ticks: {
						min: 0,
						display: false,
					},
				},
			],
			xAxes: [
				{
					gridLines: false,
					ticks: {
						display: false,
					},
				},
			],
		},
	},
});

//**second chart

var ctx = document.getElementById("myChart_second").getContext("2d");
var myChart_second = new Chart(ctx, {
	type: "line",
	data: {
		labels: ["1", "2", "3", "4"],
		datasets: [
			{
				label: "First label",
				data: [25, 15, 37, 3],
				backgroundColor: ["#98acf880"],
				borderColor: ["#98acf8"],
				borderWidth: 2,
				//** */  для того чтобы убрать points на графике нужно сделать pointRadius: 0
				pointRadius: 0,
				pointStyle: "circle",
			},
			{
				label: "Second label",
				data: [12, 27, 13, 47],
				backgroundColor: ["#da9ff950"],
				borderColor: ["#da9ff9"],
				borderWidth: 2,
				pointRadius: 0,
				pointStyle: "circle",
			},
		],
	},
	options: {
		legend: {
			display: false,
		},

		title: {
			display: false,
			//text: 'Life Expectancy by Country',
			position: "top",
			fontSize: 10,
		},
		scales: {
			yAxes: [
				{
					gridLines: false,
					ticks: {
						min: 0,
						display: false,
					},
				},
			],
			xAxes: [
				{
					gridLines: false,
					ticks: {
						display: false,
					},
				},
			],
		},
	},
});
