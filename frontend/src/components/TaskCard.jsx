import { useNavigate } from 'react-router-dom';

export function TaskCard({ task }){

    const navigate = useNavigate()

    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div 
                        className="card" 
                        onClick={() => {
                            navigate(`/tasks/${task.id}/`);
                        }}
                    >
                        <div className="card-body">
                            { task.complete ? (
                            <div>
                                <h5 className="card-title fw-bold"><i className="fa-solid fa-circle fa-xs icon-complete"></i><span className="text-decoration-line-through">{task.title}</span> <span className="created_at">{task.created_at}</span></h5>
                            </div>
                            ) : (
                                <h5 className="card-title fw-bold"><i className="fa-solid fa-circle fa-xs icon-incomplete"></i>{task.title}<span className="created_at">{task.created_at}</span></h5>
                            )}
                            <p className="card-text">{task.description}</p>
                            { task.priority == 'Low' && <span className="badge text-bg-success">{task.priority}</span> }
                            { task.priority == 'Medium' && <span className="badge text-bg-warning">{task.priority}</span> }
                            { task.priority == 'High' && <span className="badge text-bg-danger">{task.priority}</span> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

