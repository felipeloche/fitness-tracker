import React, { useState } from 'react';
import WorkoutList from '../components/WorkoutList';

const Home = ({ onAddToPlan }) => {
    const [recommendedWorkouts] = useState([
        { id: 1, name: 'Corrida', description: 'Corrida leve', duration: 30 },
        { id: 2, name: 'Yoga', description: 'Sessão de yoga', duration: 45 },
        // Outros treinos
    ]);

    return (
        <div className="home">
            <h2>Treinos Recomendados</h2>
            <WorkoutList workouts={recommendedWorkouts} onAdd={onAddToPlan} />
        </div>
    );
};

export default Home;
