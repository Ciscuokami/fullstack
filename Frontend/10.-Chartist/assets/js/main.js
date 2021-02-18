const firstChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    series: [
        [5, 2, 4, 2, 0],
        [3, 6, 7, 0, 2]
    ]
};

const config = {
    width: 500,
    heiht: 400
}

new Chartist.Line('#firstChart', firstChartData, config);

new Chartist.Bar("#barChart", firstChartData, config);

