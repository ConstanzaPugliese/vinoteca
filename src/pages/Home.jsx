import { FaInstagram } from "react-icons/fa";
// import ItemListContainer from '../components/item-list/ItemListContainer';
import { useState } from 'react';
import { getFirestore } from '../service/Firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

function Home() {
    const [lead, setLead] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [show, setShow] = useState(false)
    const saveName = (e) => {
        const input = e.target
        const value = input.value
        setName(value)
    }
    const saveEmail = (e) => {
        const input = e.target
        const value = input.value
        setEmail(value)
    }
    const validate = () => {
        if(name.trim().length && email.trim().length) {
            return true
        } else {
            return false
        }
    }
    function newLead(e) {
        e.preventDefault();
        if (validate()) {
            // si ya existe el mail en la base de datos
            // const dataBase = getFirestore()
            // const leadsCollection = dataBase.collection('leads')
            // const lead = productsCollection.doc(id)
            // lead.get().then(response => {
            //     if(response.exists){
            //         setProduct({id: response.id, ...response.data()})
            //     }
            // })
            const leadData = {
                lead: {name, email},
                date: firebase.firestore.Timestamp.fromDate(new Date()),
            }
            const dataBase = getFirestore()
            const leads = dataBase.collection('leads')
            leads.add(leadData)
            .then(() => {setLead(true)})
            .catch(err => {console.log('Error guardando lead', err)})
            .finally(() => {
                setName('');
                setEmail('');
            })
        }
    }
    const handleClose = () => {setShow(false)}
    const handleShow = () => {setShow(true)}
    return (
        <main className="row mx-3">
            <header className="col-12 parallax--index"></header>
            <section className="col-12 mt-5">
                <h1 className="text-uppercase">New arrivals</h1>
            </section>
            <section className="col-12 mt-5">
                <h1 className="text-uppercase">Best sellers</h1>
            </section>
            <section className="col-12 text-center mt-5">
                <div>
                    <FaInstagram className="instagram me-2 mb-1"/>
                    <h2 className="d-inline-flex">vinoteca</h2>
                </div>
                <a href="https://www.instagram.com/vinoteca/" rel="noreferrer" target="_blank">
                    <button className="btn btn-dark mt-2">Seguinos</button>
                </a>
            </section>
            <section className="col-12 text-center mt-5">
                <h3>Suscribite a nuestro newsletter</h3>
                <p>Para recibir todas nuestras novedades, degustaciones y promociones, dejanos tu mail!</p>
                <form className="row mt-2 d-flex flex-row justify-content-center mx-3" onSubmit={newLead}>
                    <div className="form-group">
                        <input type="text" className="form-control text-center bg-transparent mb-2" placeholder="Nombre" name="name" onChange={saveName} required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control text-center bg-transparent mb-2" placeholder="Email" name="email" onChange={saveEmail} required />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-dark text-uppercase" onClick={handleShow}>Enviar</button>
                    </div>
                </form>
                <Modal aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                    <ModalHeader>
                        {lead ? 
                            <h3 className="col-12 d-flex flex-column justify-content-center">¡Ya sos parte de nuestra comunidad!</h3>
                        :
                            <h3 className="col-12 d-flex flex-column justify-content-center">Error</h3>}
                    </ModalHeader>
                    <ModalBody>
                        {lead ?
                            <p>Revisá tu email con regularidad para no perderte nada ;)</p>
                        :
                            <p>Tenés que completar todos los campos.</p>}
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="dark" onClick={handleClose}>Entendido</Button>
                    </ModalFooter>
                </Modal>
            </section>
        </main>
    )
}

export default Home;

