import { useState } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';

function Alert() {
    const [showAlert, setShowAlert] = useState(true)
    const [legal, setLegal] = useState(true)
    const handleCloseAlert = () => {setShowAlert(false)}
    const handleShow = () => {setLegal(false)}
    return (
        <Modal aria-labelledby="contained-modal-title-vcenter" centered show={showAlert}>
            <ModalBody className="text-center">
                <h2 className="text-uppercase mb-4">Vinoteca</h2>
                <h3>¿Sos mayor de 18 años?</h3>
                <div className="btn-group col-3">
                    <button type="button" className="btn btn-success" onClick={handleCloseAlert}>Sí</button>
                    <button type="button" className="btn btn-danger" onClick={handleShow}>No</button>
                </div>
                {legal ? <></> : <p className="mt-1">Sos menor de edad, no podés acceder al sitio.</p>}
                <hr />
                <p>Entrando al sitio estás aceptando los términos, condiciones y políticas de privacidad.</p>
            </ModalBody>
        </Modal>
    )
}

export default Alert;
