import React, { useState, useEffect } from 'react';

const GetProgress = () => {
    const [goals, setGoals] = useState([]);
    const [monthlyStats, setMonthlyStats] = useState({});

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

    useEffect(() => {
        fetch('http://localhost:3000/goals')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setGoals(data.goal);

                    const stats = {};

                    data.goal.forEach(goal => {
                        if (goal.date && !goal.date.includes('/')) {
                            let monthNumber;
                            let year;

                            if (goal.date.includes('-')) {
                                const splitDate = goal.date.split('-');
                                year = splitDate[0]; 
                                monthNumber = parseInt(splitDate[1], 10);
                            }

                            const month = monthNames[monthNumber - 1];
                            const monthYearKey = `${year}-${month}`; 
                            if (!stats[monthYearKey]) {
                                stats[monthYearKey] = { year, month, incomplete: 0, complete: 0 };
                            }

                            if (goal.progressValue === "Incomplete") {
                                stats[monthYearKey].incomplete++;
                            } else if (goal.progressValue === "Complete") {
                                stats[monthYearKey].complete++;
                            }
                        }
                    });

                    setMonthlyStats(stats);
                }
            })
            .catch(error => console.error("Error fetching the data: ", error));
    }, []);

    return (
        <div className="month_progress_all">
            {Object.keys(monthlyStats).map(monthYearKey => {
                const stats = monthlyStats[monthYearKey];
                const successRate = (stats.complete / (stats.complete + stats.incomplete)) * 100;

                return (
                    <div className="month_progress_each" key={monthYearKey}>
                        <h2>{stats.year}</h2>
                        <h2>{stats.month}</h2>
                        <p>Completed: {stats.complete}</p>
                        <p>Incomplete: {stats.incomplete}</p>
                        <p>Success Rate: {successRate.toFixed(1)}%</p>
                    </div>
                );
            })}
        </div>
    );
}

export default GetProgress;

