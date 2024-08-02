import React from 'react';

const WorkoutItem = ({ workout, onAdd, onRemove, onComplete }) => {
    return (
        <div className="workout-item">
            <h3>{workout.name}</h3>
            <p>{workout.description}</p>
            <p>Duração: {workout.duration} minutos</p>
            {onAdd && <button onClick={() => onAdd(workout)}>Adicionar ao Meu Plano</button>}
            {onRemove && <button onClick={() => onRemove(workout)}>Remover</button>}
            {onComplete && <button onClick={() => onComplete(workout)}>Concluir Treino</button>}
        </div>
    );
};

export default WorkoutItem;
