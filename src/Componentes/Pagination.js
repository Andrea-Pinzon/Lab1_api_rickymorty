import React from 'react'
const Pagination = ({prev, next, onPrev, onNext}) => {

// Evento para ir a las paginas anterior y siguiente desde App.
    const pagPrev = () => {
        onPrev();
    }

    const pagNext = () => {
        onNext();
    }

    // Botones condicionados por si tenemos una pagina anterior y una siguiente
    return (
        <nav className="pagination justify-content-center my-5">
            {prev ?
                (<button className="page-link" onClick={pagPrev} title="Atras"><i class="fa-solid fa-chevron-left"></i></button>) : null}
            {next ?
                (<button className="page-link" onClick={pagNext} title="Siguiente"><i class="fa-solid fa-chevron-right"></i></button>) : null}
        </nav>
    )
}

export default Pagination
