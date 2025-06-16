import "./legal.css"

export default function Privacidad() {
    return (
        <>
            <section id="privacidad" className="legal-section">
                <h2>Aviso de Privacidad</h2>
                <p>En Ternurin respetamos tu privacidad. Este aviso explica cómo recolectamos, usamos y protegemos tus datos personales.</p>

                <ul>
                    <li><strong>Datos Recabados:</strong> Recopilamos datos como nombre, correo electrónico, teléfono y pedidos realizados.</li>
                    <li><strong>Uso de Datos:</strong> Utilizamos tus datos para procesar pedidos, contactarte y mejorar nuestro servicio.</li>
                    <li><strong>Protección:</strong> Implementamos medidas de seguridad para proteger tu información contra accesos no autorizados.</li>
                    <li><strong>Terceros:</strong> No compartimos tus datos con terceros, salvo que sea requerido por ley.</li>
                    <li><strong>Derechos:</strong> Puedes solicitar el acceso, corrección o eliminación de tus datos enviando un correo a contacto@ternurin.com.</li>
                </ul>

                <p>Al usar nuestro sitio, aceptas las prácticas descritas en este aviso.</p>
            </section>

        </>
    );
}