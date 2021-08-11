<template>
    <section>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Dashboard</h1>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Control centre</li>
                        </ol>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->
    
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->
                <div class="row">
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-danger">
                            <div class="inner">
                                <h3>{{fires}}</h3>
                                <p>Fires reports</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-bag"></i>
                            </div>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-success">
                            <div class="inner">
                                <h3>5</h3>
    
                                <p>Special services</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-stats-bars"></i>
                            </div>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-warning">
                            <div class="inner">
                                <h3>7</h3>
    
                                <p>Fire Trucks</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-person-add"></i>
                            </div>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-info">
                            <div class="inner">
                                <h3>15</h3>
    
                                <p>Staff</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-pie-graph"></i>
                            </div>
                        </div>
                    </div>
                    <!-- ./col -->
                </div>
                <!-- /.row -->
                <!-- Main row -->
                <div class="row">
                    <!-- Left col -->
                    <section class="col-lg-6 connectedSortable">
                        <!-- Custom tabs (Charts with tabs)-->
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-chart-pie mr-1"></i> Fires per Month
                                </h3>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="tab-content p-0">
                                    <canvas id="fire-chart" width="400" height="300"></canvas>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                        <!-- /.card -->
                    </section>
                    <section class="col-lg-6 connectedSortable">
                        <!-- Custom tabs (Charts with tabs)-->
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-chart-pie mr-1"></i> Fires by location
                                </h3>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="tab-content p-0">
                                    <canvas id="location-chart" width="400" height="300"></canvas>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                        <!-- /.card -->
                    </section>
                </div>
                <!-- /.row (main row) -->
            </div>
            <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </section>
</template>

<script>
import Chart from 'chart.js'
export default {
    data() {
        return {
            fires: 0,
            specialServices: 0,
            fireTrucks: 0,
            staff: 0,
        }
    },
    methods: {
        getFiresPerMonth() {
            var data = [12, 19, 3, 5, 2, 3, 5, 0, 0, 0, 0, 0];
            var labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
            const data1 = {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{ // one line graph
                        label: 'Fires Per Month',
                        data: data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }, ]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                padding: 25,
                            }
                        }]
                    }
                }
            }
            this.createChart('fire-chart', data1)
        },
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        },
        getFiresPerLocation() {
            var data = [12, 19, 3, 5, 2, 3, 5, 0, 0, 0, 0, 0];
            var labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
            const data1 = {
                type: 'pie',
                data: {
                    labels: ['Kibra', 'Langata', 'Kamukunji', 'Starehe', 'Mathare', ],
                    datasets: [{
                        label: 'Fire per month',
                        data: [12, 19, 3, 5, 2],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
            }
            this.createChart('location-chart', data1)
        },
        getDashboardStats(){
            axios.get('/api/dashboardStats').then(({ data }) => {
                // console.log(data);
                this.fires = data.data.fires;
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    mounted() {
        this.getFiresPerMonth();
        this.getFiresPerLocation();
        this.getDashboardStats();
    }
}
</script>