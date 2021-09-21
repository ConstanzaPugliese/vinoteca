function Contact() {
    return (
        <main className="row">
            <section className="col-lg-12 col-xs-12 text-center">
                <h1 className="my-5">Contacto</h1>
                <p>Si tenés alguna consulta, te contamos que nuestro canal de respuesta más rápido es a través de Mensaje Directo de Instagram.</p>
                <p>Por ese medio te responderemos en menos de 24hs hábiles.</p>
                <form className="row mt-2 d-flex flex-row justify-content-center">
                    <div className="form-group col-sm-10">
                        <input type="text" className="form-control text-center bg-transparent mb-2" id="nameContact" placeholder="Nombre" name="name" required />
                    </div>
                    <div className="form-group col-sm-10">
                        <input type="email" className="form-control text-center bg-transparent mb-2" id="emailContact" placeholder="Email" name="email" required />
                    </div>
                    <div className="form-group col-sm-10">
                        <input type="text" className="form-control text-center bg-transparent mb-2" id="mobileContact" placeholder="Teléfono" name="mobile" required />
                    </div>
                    <div className="form-group col-sm-10">
                        <textarea className="form-control text-center bg-transparent mb-2" id="messageContact" placeholder="Mensaje" name="message" required></textarea>
                    </div>
                    <div className="form-group col-sm-10">
                        <p id="answer"></p>
                        <button type="submit" className="btn btn-dark text-uppercase" id="sendContact" value="Enviar">Enviar</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Contact;