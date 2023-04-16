import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            // Aqui poderia ser feita uma chamada para uma API para buscar os dados do gráfico
            const data = {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                datasets: [
                    {
                        label: 'Vendas',
                        data: [12, 19, 3, 5, 2],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            };

            setChartData(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const chart = new Chart('myChart', {
            type: 'bar',
            data: chartData,
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        });

        return () => {
            chart.destroy();
        };
    }, [chartData]);

    return <canvas id="myChart" />;
};

export default ChartComponent;
