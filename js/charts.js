// Start First Charts:
var ctx = document.getElementById('user-delete').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013'],
        datasets: [{
            label: 'Users Increasing',
            data: [459, 337, 289, 350, 308, 230, 200, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(231, 245, 32, 0.4)',
                'rgba(245, 29, 29, 0.4)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(231, 245, 32, 1)',
                'rgba(245, 29, 29, 1)'
            ],
            borderWidth: 1,
            hoverBorderWidth: 60,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }, responsive: true,
        maintainAspectRatio:false,

    }
});

// Start Second Charts:
var ctx = document.getElementById('user-increase').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013'],
        datasets: [{
            label: 'Users Increasing',
            data: [459, 337, 289, 350, 308, 230, 200, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(231, 245, 32, 0.4)',
                'rgba(245, 29, 29, 0.4)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(231, 245, 32, 1)',
                'rgba(245, 29, 29, 1)'
            ],
            borderWidth: 3,
            pointBorderWidth: 15,

        }]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: false
            }]
        },
        hover: {
            animationDuration: 1500
        },
        responsive: true,
        maintainAspectRatio:false,

    }

});

// Start Third Charts:
var ctx = document.getElementById("online-user").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Online', 'Male', 'Female', 'Kids'],
        datasets: [{
            label: '# of users',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio:false,
        scales: {
            yAxes: [{
                stacked: false
            }]
        },


    }
});