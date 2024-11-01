import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Typography, Container } from '@mui/material';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LandingPage = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Product 1',
        data: [],
        backgroundColor: '#0033a0',
      },
      {
        label: 'Product 2',
        data: [],
        backgroundColor: '#0072ce',
      },
      {
        label: 'Product 3',
        data: [],
        backgroundColor: '#00a3e0',
      },
    ],
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://7022-196-15-174-130.ngrok-free.app/get_products', {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        console.log('Response data:', response.data); // Log response data for debugging

        // Expecting response.data to be an array
        const apiData = response.data;

        if (!Array.isArray(apiData)) {
          throw new Error('Data format unexpected: expected an array');
        }

        // Map through the apiData to extract labels and data for the chart
        const labels = apiData.map(item => new Date(item.Timestamp).toLocaleDateString());
        const product1Data = apiData.map(item => item.Product1);
        const product2Data = apiData.map(item => item.Product2);
        const product3Data = apiData.map(item => item.Product3);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Product 1',
              data: product1Data,
              backgroundColor: '#0033a0',
            },
            {
              label: 'Product 2',
              data: product2Data,
              backgroundColor: '#0072ce',
            },
            {
              label: 'Product 3',
              data: product3Data,
              backgroundColor: '#00a3e0',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(`Error: ${error.message || 'Unknown error occurred'}`);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Product Revenues',
      },
    },
  };

  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom className="header">
        Raw Materials
      </Typography>
      <Typography variant="body1" className="description">
        This page provides an example of results displayed in a bar chart format.
      </Typography>
      {error && (
        <Typography variant="body1" color="error" className="error-message">
          {error}
        </Typography>
      )}
      <section>
        <figure>
          <Bar data={chartData} options={options} />
        </figure>
      </section>
    </Container>
  );
};

export default LandingPage;
