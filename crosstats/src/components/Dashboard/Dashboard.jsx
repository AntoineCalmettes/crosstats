import React, { useContext, useEffect } from "react";
import AppContext from "../../services/App/appContext";
import { Card } from './Cards/Card';
import './Dashboard.css';
import { Line, Radar, Bar } from 'react-chartjs-2';
import { FadeInDiv } from '../shared/Keyframes/FadeIn';
import Button from '@material-ui/core/Button';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { TopBar } from '../shared/TopBar/TopBar';

const Dashboard = props => {
    const { toggleAppLoading } = useContext(AppContext);
    const events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

    const lineChart = {
        labels: ['Août 2019', 'Septembre 2019', 'Octobre 2019', 'Novembre 2019', 'Décembre 2019', 'Janvier 2020'],
        datasets: [
            {
                fill: true,
                lineTension: 0.2,
                backgroundColor: 'rgba(26,30,255,0.2)',
                borderColor: 'rgba(26,30,255,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(26,30,255,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(26,30,255,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 70, 66, 81, 66, 60].reverse()
            }
        ]
    };

    const BarChart = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,121,26,0.2)',
                borderColor: 'rgba(255,55,64,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,55,64,0.4)',
                hoverBorderColor: 'rgba(255,55,64,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    var lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    color: "rgba(255,255,255,0.1)"
                },
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(255,255,255,0.1)",
                    borderDash: [8, 4],
                },
            }],
        }
    };

    var BarChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    color: "rgba(255,255,255,0.1)"
                },
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(255,255,255,0.1)",
                    borderDash: [8, 4],
                },
            }],
        }
    };

    var radarChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },

        scale: {
            ticks: {
                display: false
            },
            gridLines: {
                color: "rgba(255,255,255,0.1)"
            },
        }
    };

    const radarChart = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                lineTension: 0.2,
                label: 'My First dataset',
                backgroundColor: 'rgba(42,207,214,0.2)',
                borderColor: '#2ACFD6',
                pointBackgroundColor: '#2ACFD6',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [15, 59, 90, 81, 56, 55, 0]
            },
            {
                lineTension: 0.2,
                label: 'My First dataset',
                backgroundColor: 'rgba(163,57,255,0.2)',
                borderColor: 'rgba(163,57,255,1)',
                pointBackgroundColor: 'rgba(163,57,255,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [45, 40, 20, 70, 80, 90, 50]
            },
        ],
    };
    // toggleAppLoading(true);
    return (
        <section className="app-container pr-0 row position-relative">
            <article className="metrics hide-scrollbar p-32 pb-0" style={{ overflowY: 'Scroll' }}>
                <TopBar title={'Tableau de bord'} button={<Button type="button" variant="contained" color="primary" disableElevation startIcon={<AddRoundedIcon />}>Nouveau wod</Button>} />
                <Card style={{ height: 400 }} component={<div className="h-100">
                    <h2 className="h4 title">Votre activités</h2>
                    <h3 className="h6 font-weight-normal mb-4">6 derniers mois</h3>
                    <div className="chart-div">
                        <Line data={lineChart} options={lineChartOptions} />
                    </div>
                </div>} />
                <div className="row p-32 px-0">
                    <div className="col-lg-5">
                        <Card style={{ height: 150, marginBottom: 16 }} component={<div className="h-100">
                            <div className="d-flex align-items-center h-100">
                                <FadeInDiv className="rounded-square-86 d-flex justify-content-center align-items-center mr-4" style={{ backgroundColor: 'rgba(26,30,255,0.2)' }}>
                                    <div style={{ width: 32, height: 32, backgroundColor: 'rgba(26,30,255,1)', borderRadius: 7 }}></div>
                                </FadeInDiv>
                                <div>
                                    <p className="h1 title">22.9k</p>
                                    <p className="h4 font-weight-regular text-secondary">Lorem ipsum</p>
                                </div>
                            </div>
                        </div>} />
                        <Card style={{ height: 150 }} component={<div className="h-100">
                            <div className="d-flex align-items-center h-100">
                                <FadeInDiv className="rounded-square-86 d-flex justify-content-center align-items-center mr-4" style={{ backgroundColor: 'rgba(42,207,214,0.2)' }}>
                                    <div style={{ width: 32, height: 32, backgroundColor: 'rgba(42,207,214,1)', borderRadius: 7 }}></div>
                                </FadeInDiv>
                                <div>
                                    <p className="h1 title">98</p>
                                    <p className="h4 font-weight-regular text-secondary">Lorem ipsum</p>
                                </div>
                            </div>
                        </div>} />
                    </div>
                    <div className="col-lg-7">
                        <Card style={{ height: 316 }} component={
                            <div className="h-100">
                                <h2 className="h4">équilibre athlétique</h2>
                                <div className="chart-div">
                                    <Radar data={radarChart} options={radarChartOptions} />
                                </div>
                            </div>} />
                    </div>
                    <div className="col-12" style={{ paddingTop: 32 }}>
                        <Card style={{ height: 400, marginBottom: 16 }} component={<div className="h-100">
                            <h2 className="h4 title">Seances de Crossfit</h2>
                            <h3 className="h6 font-weight-normal mb-4">6 derniers mois</h3>
                            <div className="chart-div">
                                <Bar data={BarChart} options={BarChartOptions} />
                            </div>
                        </div>} />
                    </div>
                </div>
            </article>

            <aside className="right-section">

                {/* <div style={{ height: 48 }} className="my-32">
                    <h1>fefezfger</h1>
                </div> */}
                <Card style={{ borderTopRightRadius: 0, borderBottomLeftRadius: 0 }} component={
                    <div>
                        <h2 className="h4">Calendriers</h2>
                        <div className="hide-scrollbar" style={{ overflowY: 'Scroll', height: 25.5 * events.length }}>
                            {events.map((a) => <h3>Item {a}</h3>)}
                        </div>
                    </div>
                } />
            </aside>

        </section>
    );
};

export { Dashboard };