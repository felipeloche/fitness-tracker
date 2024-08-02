import React from 'react';
import WorkoutList from '../components/WorkoutList';

const History = ({ completedWorkouts }) => {
    return (
        <div className="history">
            <h2>Histórico</h2>
            <WorkoutList workouts={completedWorkouts} />
        </div>
    );
};

export default History;
