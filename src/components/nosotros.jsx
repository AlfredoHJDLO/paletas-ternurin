import "./nosotros.css"
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

export default function Nosotros() {
    return (
        <>
            <section id="nosotros" className="nosotros">
                <div className="nosotros-contenido">
                    <h2>Sobre Nosotros</h2>
                    <div className="tarjeta0">
                        <div>
                            <p>
                                En Paletas Ternurín, estamos apasionados por la creatividad y los sabores únicos. Nuestra aventura comenzó con la idea de crear algo más que simples paletas: queríamos darle vida a nuestras creaciones con formas adorables y llenas de ternura. Así nacieron nuestras paletas, inspiradas en personajes icónicos y hechas con ingredientes de la mejor calidad.
                            </p>
                            <p>
                                Nos enorgullece ofrecer un producto que no solo deleita el paladar, sino que también dibuja una sonrisa en cada persona que lo prueba. En Paletas Ternurín, creemos en la magia de los pequeños detalles y en el poder de compartir momentos dulces y especiales. ¡Gracias por ser parte de esta aventura con nosotros!

                            </p>
                        </div>
                        <div>
                            <img src={img5} alt="Paletas" style={{width: '80%'}} />
                        </div>
                    </div>
                    <div className="tarjeta1">
                        <div>
                            <h3>Propuesta de valor</h3>
                            <p>
                                La marca se enorgullece de ofrecer productos que no solo deleitan el paladar sino que también dibujan sonrisas en quienes los prueban. El enfoque está en combinar sabor excepcional con diseños encantadores.
                            </p>
                        </div>
                        <div>
                            <img src={img3} alt="Paletas" style={{width: '100%'}} />
                        </div>
                    </div>
                    <div className="tarjeta1">
                        <div>
                            <img src={img4} alt="Paletas" style={{width: '100%'}} />
                        </div>
                        <div>
                            <h3>Filosofia</h3>
                            <p>
                                En Paletas Ternurín creen en la magia de los pequeños detalles y en el poder de compartir momentos dulces y especiales. La empresa valora la conexión emocional que establecen sus productos con los clientes.

                            </p>
                        </div>
                    </div>
                    <div className="tarjeta1">
                        <div>
                            <h3>Mensaje a Clientes</h3>
                            <p>
                                Expresan gratitud a sus clientes por formar parte de esta aventura y por permitirles compartir su visión de momentos dulces a través de sus creaciones.
                            </p>

                            <div>
                            <img src={img1} alt="Paletas" style={{width: '100%'}} />
                        </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
}