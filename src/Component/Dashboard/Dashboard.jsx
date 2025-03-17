import React from 'react';
import {ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const Dashboard = () => {
    const user = [
        {
            id: 1,
            name: "Basic Membership",
            price: 30,
            duration: "month",
            features: ["Gym access", "Locker"],
            users: 100
        },
        {
            id: 2,
            name: "Standard Membership",
            price: 50,
            duration: "month",
            features: ["Gym access", "Locker", "Classes"],
            users: 75
        },
        {
            id: 3,
            name: "Premium Membership",
            price: 80,
            duration: "month",
            features: ["Gym access", "Locker", "Classes", "Trainer", "Sauna"],
            users: 50
        }
    ]




    return (
        <div  style={{ width: '100%', height: 300 }}>

            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey="users"  data={user} fill="#8884d8" label />
                </PieChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Dashboard;