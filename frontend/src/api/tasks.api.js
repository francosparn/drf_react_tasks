import axios from 'axios';

const taskAPI = axios.create({
    baseURL: 'http://localhost:8000/api/tasks/'
})

export const getAllTasks = (page = 1, pageSize = 5) => {
    return taskAPI.get('/', {
        params: {
            page: page,
            page_size: pageSize
        }
    });
}

export const getTask = (id) => {
    return taskAPI.get(`/${id}/`);
}

export const createTask = (task) => {
    return taskAPI.post('/', task);
}

export const deleteTask = (id) => {
    return taskAPI.delete(`/${id}`);
}

export const updateTask = (id, task) => {
    return taskAPI.put(`/${id}/`, task);
}