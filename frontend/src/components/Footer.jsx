import { Link } from 'react-router-dom';

export function Footer(){
    return(
        <footer className="my-5">
            <p className="text-center">Developed by <Link to="https://linkedin.com/in/francosparn" className="author" target="_blank" rel="noopener noreferrer">Franco Sparn</Link> &copy; 2023.</p>
        </footer>
    )
}