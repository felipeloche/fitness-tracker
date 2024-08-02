import React from 'react';
import WorkoutItem from './WorkoutItem';

const WorkoutList = ({ workouts, onAdd, onRemove, onComplete }) => {
    return (
        <div className="workout-list">
            {workouts.map(workout => (
                <WorkoutItem 
                    key={workout.id} 
                    workout={workout} 
                    onAdd={onAdd} 
                    onRemove={onRemove} 
                    onComplete={onComplete}
                />
            ))}
        </div>
    );
};

export default WorkoutList;
