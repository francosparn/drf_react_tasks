import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function TaskForm(){

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    // Function that is executed when pressing the "Create" or "Update" button
    const onSubmit = handleSubmit(async (data) => {
        // It checks if it has an id by parameter, if it does, it means that it is updating a task
        if (params.id){
            await updateTask(params.id, data);
            toast.success('Task updated successfully', {
                position: "bottom-right",
                style: {
                    background: "#252525f8",
                    border: "1px solid #ffc107",
                    color: "#ffc107"
                }
            });
        } else {
            // If there is no id, it means that you are creating the task
            await createTask(data);
            toast.success('Task created successfully', {
                position: "bottom-right",
                style: {
                    background: "#252525f8",
                    border: "1px solid #ffc107",
                    color: "#ffc107"
                }
            });
        }
        // After creating or updating a task, redirect to home
        navigate('/tasks');
    });

    useEffect(() => {
        async function loadTask(){
            if (params.id){
                const response = await getTask(params.id);
                // Insert the task values into the form
                setValue('title', response.data.title)
                setValue('description', response.data.description)
                setValue('priority', response.data.priority)
                setValue('complete', response.data.complete)
            }
        }
        loadTask();
    }, []);

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    { params.id ? (
                        <h2 className="fw-bold">Update Task</h2>
                    ) : (
                        <div>
                            <h2 className="fw-bold">Create Task</h2>
                            <p>Complete the form and create your task! 😄</p>
                        </div>
                    )}
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Title</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                placeholder="Add title"
                                { ...register('title', { required: true }) }
                            />
                            { errors.title && <span className="text-danger">Title is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea 
                                className="form-control" 
                                placeholder="Add description"
                                cols="30" 
                                rows="10"
                                { ...register('description', { required: false }) } 
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Priority</label>
                            <select className="form-select" { ...register('priority', { required: true }) }>
                                <option defaultValue>Select the priority of the task</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        <div className="form-check mb-3">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                value="" 
                                id="flexCheckDefault"
                                { ...register('complete', { required: false }) }  
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Complete</label>
                        </div>
                        <div className="d-grid mb-3">
                            { params.id ? (
                                <button className="btn btn-warning" type="submit">Update</button>
                            ) : (
                                <button className="btn btn-warning" type="submit">Create</button>
                            )}
                        </div>
                    </form>
                    { params.id && <button onClick={async() => {
                        const answer = window.confirm('Are you sure you want to delete this task?');
                        
                        if (answer){
                            await deleteTask(params.id);
                            toast.success('Task deleted successfully', {
                                position: "bottom-right",
                                style: {
                                    background: "#252525f8",
                                    border: "1px solid #ffc107",
                                    color: "#ffc107"
                                }
                            });
                            // Redirect to home
                            navigate('/tasks');
                        }

                    }} className="btn btn-danger float-end"><i className="fa-solid fa-trash-can"></i> Delete Task</button> }
                </div>
            </div>
        </div>
    )
}