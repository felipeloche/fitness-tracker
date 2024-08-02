import React from 'react';
import WorkoutList from '../components/WorkoutList';

const MyPlan = ({ plan, onRemoveFromPlan, onCompleteWorkout }) => {
    return (
        <div className="my-plan">
            <h2>Meu Plano</h2>
            <WorkoutList workouts={plan} onRemove={onRemoveFromPlan} onComplete={onCompleteWorkout} />
        </div>
    );
};

export default MyPlan;
