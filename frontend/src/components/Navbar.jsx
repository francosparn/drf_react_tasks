import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <Link to="/tasks" className="title">
            <i className="fa-solid fa-list-check"></i>TaskApp
          </Link>
          <Link to="/tasks-create">
          <button className="btn btn-outline-warning">Create Task</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}