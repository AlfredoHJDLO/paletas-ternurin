import "./contacto.css"

export default function Contacto() {
    return (
        <>
            <section id="contacto" className="contacto">
                <div className="contacto-contenido">
                    <h2>Contacto</h2>
                    <p>¿Tienes preguntas, sugerencias o quieres hacer un pedido especial? ¡Contáctanos!</p>

                    <div className="contacto-items">
                        <div className="item">
                            <h3>Teléfono</h3>
                            <p><a href="tel:+529533143686">📞 +52 953 314 3686</a></p>
                        </div>

                        <div className="item">
                            <h3>WhatsApp</h3>
                            <p>
                                <a href="https://wa.me/529533143686" target="_blank" rel="noopener noreferrer">
                                    💬 Escríbenos por WhatsApp
                                </a>
                            </p>
                            <p>
                                <a href="https://wa.me/529513958304" target="_blank" rel="noopener noreferrer">
                                    💬 O tambien por aquí
                                </a>
                            </p>
                        </div>

                        <div className="item">
                            <h3>Correo Electrónico</h3>
                            <p>
                                <a href="mailto:ternurin.paletas@gmail.com">📧 ternurin.paletas@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );

}