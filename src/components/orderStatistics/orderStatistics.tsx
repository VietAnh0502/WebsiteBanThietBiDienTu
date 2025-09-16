"use client";

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'antd';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Đăng ký các thành phần cần thiết của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Dữ liệu mẫu về doanh thu


const RevenueChart: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const revenueData = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'], // Các tháng
    datasets: [
      {
        label: 'Doanh thu',
        data: data.map(item => item.total), // Doanh thu tương ứng từng tháng
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const featchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getStatic');
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    featchData();
  }, []);

  return (
    <Card title="Biểu đồ doanh thu theo tháng">
      <Line data={revenueData} />
    </Card>
  );
};

export default RevenueChart;
