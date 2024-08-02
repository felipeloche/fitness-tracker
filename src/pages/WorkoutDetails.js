import React from 'react';
import { useParams } from 'react-router-dom';

const WorkoutDetails = ({ workouts }) => {
    const { id } = useParams();
    const workout = workouts.find(w => w.id === parseInt(id));

    return (
        <div className="workout-details">
            {workout ? (
                <>
                    <h2>{workout.name}</h2>
                    <p>{workout.description}</p>
                    <p>Duração: {workout.duration} minutos</p>
                    <p>Status: {workout.completed ? `Concluído em ${workout.completedDate}` : 'Pendente'}</p>
                </>
            ) : (
                <p>Treino não encontrado</p>
            )}
        </div>
    );
};

export default WorkoutDetails;
