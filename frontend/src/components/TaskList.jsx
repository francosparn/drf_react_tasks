import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TaskList() {

    const [ tasks, setTasks ] = useState([]);
    const [ pagination, setPagination ] = useState(null);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = (page = 1, pageSize = 4) => {
        getAllTasks(page, pageSize)
            .then((response) => {
                setTasks(response.data.results);
                setPagination({
                    previous: response.data.previous,
                    next: response.data.next
                });
            })
            .catch((error) => {
                console.log('Error', error);
            });
    }

    const loadPreviousPage = () => {
        if (pagination && pagination.previous) {
          const url = new URL(pagination.previous);
          const page = url.searchParams.get('page');
          const pageSize = url.searchParams.get('page_size');
          loadTasks(page, pageSize);
        }
      };
    
      const loadNextPage = () => {
        if (pagination && pagination.next) {
          const url = new URL(pagination.next);
          const page = url.searchParams.get('page');
          const pageSize = url.searchParams.get('page_size');
          loadTasks(page, pageSize);
        }
      };
  
    return <div>
        <h2 className="text-center fw-bold my-4">My Tasks</h2>
        { tasks.map(task => (
            <TaskCard key={task.id} task={task} />
        ))}

        {/* Message that will be displayed in case of not having created tasks */}
        { tasks.length <= 0 && (
            <div className="my-5">
                <p className="text-center">Oops, it looks like there are no tasks created. Click <Link to="/tasks-create" className="author" rel="noopener noreferrer">here</Link> to create your first task.</p>
            </div>
        )}

        {/* If there are tasks created, the pagination buttons will be shown */}
        { tasks.length > 0 && pagination && (
            <div className="text-center mt-4">
                <button 
                    disabled={!pagination.previous}
                    onClick={loadPreviousPage}
                    className="btn-previous btn btn-outline-warning"
                >
                   <span aria-hidden="true">&laquo; </span>Previous
                </button>
                <button
                    disabled={!pagination.next}
                    onClick={loadNextPage}
                    className="btn-next btn btn-outline-warning"
                >
                    Next<span aria-hidden="true"> &raquo;</span>
                </button>
            </div>
        )}

    </div>;
}