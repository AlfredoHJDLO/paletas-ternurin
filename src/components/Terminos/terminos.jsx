import "./legal.css"

export default function Terminos() {
    return (<>
        <section id="terminos" className="legal-section">
            <h2>Términos y Condiciones</h2>
            <p>Bienvenido a Ternurin. Al acceder a nuestro sitio web o realizar un pedido, aceptas los siguientes términos:</p>

            <ul>
                <li><strong>Uso del Sitio:</strong> Está prohibido utilizar este sitio para fines ilegales o no autorizados.</li>
                <li><strong>Precios y Productos:</strong> Nos reservamos el derecho de modificar productos, sabores o precios sin previo aviso.</li>
                <li><strong>Pedidos:</strong> Todos los pedidos están sujetos a disponibilidad y a la validación de datos de contacto.</li>
                <li><strong>Responsabilidad:</strong> No nos hacemos responsables por errores tipográficos o fallas técnicas del sitio.</li>
                <li><strong>Modificaciones:</strong> Podemos actualizar estos términos en cualquier momento. Revisa esta página periódicamente.</li>
            </ul>

            <p>Al utilizar nuestros servicios, confirmas que entiendes y aceptas estos términos.</p>
        </section>

    </>);
}