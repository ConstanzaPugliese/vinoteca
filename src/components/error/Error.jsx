import React from 'react'

function Error({error}) {
    return (
        <main className="row">
            <section className="col-12">
                <h1 className="my-3 my-lg-5 text-uppercase">{error}</h1>
            </section>
        </main>
    )
}

export default Error;
