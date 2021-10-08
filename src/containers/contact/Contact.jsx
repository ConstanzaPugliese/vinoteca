import { useState } from 'react';
import { getFirestore } from '../../service/Firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import Error from '../../components/error/Error';
import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Link } from 'react-router-dom';

function Contact() {
    const [contact, setContact] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [show, setShow] = useState(false) 
    const saveName = (e) => {
        const input = e.target
        const value = input.value
        setName(value)
    }
    const savePhone = (e) => {
        const input = e.target
        const value = input.value
        setPhone(value)
    }
    const saveEmail = (e) => {
        const input = e.target
        const value = input.value
        setEmail(value)
    }
    const saveMessage = (e) => {
        const input = e.target
        const value = input.value
        setMessage(value)
    }
    const validate = () => {
        if(name.trim().length && phone.trim().length && email.trim().length && message.trim().length) {
            return true
        } else {
            return false
        }
    }
    function newContact(e) {
        e.preventDefault();
        if (validate()) {
            const contactData = {
                contact: {name, phone, email, message},
                date: firebase.firestore.Timestamp.fromDate(new Date()),
            }
            const dataBase = getFirestore()
            const contacts = dataBase.collection('contacts')
            contacts.add(contactData)
            .then(setContact(true))
            .catch((err) => {<Error error={'Error guardando formulario de contacto'} />})
        }
    }
    const handleClose = () => {setShow(false)}
    const handleShow = () => {setShow(true)}
    return (
        <main className="row">
            <section className="col-12 text-center">
                <h1 className="my-3 my-lg-5">Contacto</h1>
                <div className="mx-4">
                    <h5>Si tenés alguna consulta, te contamos que nuestro canal de respuesta más rápido es a través de Mensaje Directo de Instagram.</h5>
                    <h5>Por ese medio te responderemos en menos de 24hs hábiles.</h5>
                </div>
                <form className="row m-2 d-flex flex-row justify-content-center mx-3" onSubmit={newContact}>
                    <div className="form-group">
                        <input type="text" className="form-control text-center bg-transparent mb-2" placeholder="Nombre y apellido" name="name" onChange={saveName} required />
                    </div>
                    <div className="form-group">
                        <input type="tel" className="form-control text-center bg-transparent mb-2" placeholder="Celular" name="phone" onChange={savePhone} required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control text-center bg-transparent mb-2" placeholder="Email" name="email" onChange={saveEmail} required />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control text-center bg-transparent mb-2" placeholder="Mensaje" name="message" onChange={saveMessage} required></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-dark text-uppercase" onClick={handleShow}>Enviar</button>
                    </div>
                </form>
                <Modal aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                    <ModalHeader>
                        {contact ?
                            <h3 className="col-12 d-flex flex-column justify-content-center">¡Gracias por contactarnos!</h3>
                        :
                            <h3 className="col-12 d-flex flex-column justify-content-center">Error</h3>}
                    </ModalHeader>
                    <ModalBody>
                        {contact ?
                            <h5>Nos vamos a estar comunicando con vos dentro de las próximas 72 hs. hábiles.</h5>
                        :
                            <h5>Tenés que completar todos los campos.</h5>}
                    </ModalBody>
                    <ModalFooter>
                        {contact ?
                            <Link to='/'><Button variant="dark" onClick={handleClose}>Entendido</Button></Link>
                        :
                            <Button variant="dark" onClick={handleClose}>Entendido</Button>}
                    </ModalFooter>
                </Modal>
            </section>
        </main>
    )
}

export default Contact;