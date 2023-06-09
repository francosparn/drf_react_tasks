import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// Notifications
import { Toaster } from 'react-hot-toast';
// Templates
import { Task } from './pages/Task';
import { TaskForm } from './pages/TaskForm';
// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/tasks-create" element={<TaskForm />} />
        <Route path="/tasks/:id" element={<TaskForm />} />
      </Routes>
      <Toaster />
      <Footer />
    </BrowserRouter>

  )
}

export default App;
