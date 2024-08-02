import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import MyPlan from './pages/MyPlan';
import WorkoutDetails from './pages/WorkoutDetails';
import History from './pages/History';
import './App.css';

const App = () => {
    const [plan, setPlan] = useState([]);
    const [completedWorkouts, setCompletedWorkouts] = useState([]);

    const handleAddToPlan = workout => {
        setPlan([...plan, workout]);
    };

    const handleRemoveFromPlan = workout => {
        setPlan(plan.filter(w => w.id !== workout.id));
    };

    const handleCompleteWorkout = workout => {
        setCompletedWorkouts([...completedWorkouts, { ...workout, completed: true, completedDate: new Date().toLocaleDateString() }]);
        handleRemoveFromPlan(workout);
    };

    return (
        <Router>
            <div className="app">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/my-plan">Meu Plano</Link>
                    <Link to="/history">Histórico</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home onAddToPlan={handleAddToPlan} />} />
                    <Route path="/my-plan" element={<MyPlan plan={plan} onRemoveFromPlan={handleRemoveFromPlan} onCompleteWorkout={handleCompleteWorkout} />} />
                    <Route path="/workout/:id" element={<WorkoutDetails workouts={[...plan, ...completedWorkouts]} />} />
                    <Route path="/history" element={<History completedWorkouts={completedWorkouts} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
