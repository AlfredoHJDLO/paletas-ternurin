import FaqItem from './FaqItem';
import "./faqs.css"

const faqs = [
  {
    question: '¿Tienen servicio a domicilio?',
    answer: 'Sí de hecho queremos colaborar con una página de servicio de deliver que podría convenirles mucho'
  },
  {
    question: '¿Cómo puedo enterarme de ofertas y promociones?',
    answer: ' siguiendo nuestra página de instagram ahí publicaremos todo lo relacionado a ello'
  },
  {
    question: '¿Por qué elegirlos a ustedes y no a la competencia?',
    answer: 'Nuestros productos son de la más alta calidad a la más además de que somos pioneros en la industria tenemos la experiencia y cosas que nos respaldanPor el momento, solo realizamos entregas en la ciudad.'
  }
];

export default function FaqSection() {
  return (
    <section className="faq-section">
      <h2>Preguntas Frecuentes</h2>
      {faqs.map((faq, i) => (
        <FaqItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
}
