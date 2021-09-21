import './Alert.css';
import { Link } from "react-router-dom"

function Alert() {
    return (
        <div class="d-flex flex-column justify-content-center align-items-center alertAge" id="alertAge">
            <div className="bg-white d-flex flex-column justify-content-center align-items-center alertAge-content">
                <h1 className="text-uppercase mb-4">Vinoteca</h1>
                <h3>¿Sos mayor de 18 años?</h3>
                <div class="btn-group mb-4">
                    <Link to="/">
                        <button type="button" class="btn btn-success">Sí</button>
                    </Link>
                    <button type="button" class="btn btn-danger">No</button>
                </div>
                <span>Entrando al sitio estás aceptando los términos, condiciones y políticas de privacidad.</span>
            </div>
        </div>
    )
}

export default Alert;
