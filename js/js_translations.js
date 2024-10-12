const translations = {
    es: {
        inicio: "Inicio",
        servicios: "Servicios",
        nosotros: "Nosotros",
        clientes: "Clientes",
        contacto: "Contacto",
        agenciaMarketingDigital: "Agencia Marketing Digital",
        preparateParaElFuturo: "Prepárate para el futuro.",
        reservarAsesoria: "Reservar Asesoría",
        masInformacion: "Más información",
        descubreMas: "Descubre más",
        nuestrosServicios: "Nuestros Servicios de Marketing Digital",
        certificaciones: "Certificaciones de Nuestra Agencia de Marketing Digital",
        somosAgencia: "Somos una Agencia de Marketing Digital",
        porQueElegirnos: "¿Por qué elegir a Vibrando Alto?",
        clientesCreenEnNosotros: "Clientes que creen en nosotros",
        nuestroEquipo: "Nuestro Equipo",
        agendaAsesoria: "AGENDA UNA ASESORÍA PERSONALIZADA CON Vibrando Alto",
        descubreComoImpulsar: "Descubre cómo podemos impulsar tu negocio en el mundo digital",
        preguntasFrecuentes: "Preguntas Frecuentes",
        derechosReservados: "Todos los derechos reservados.",
        poweredBy: "Desarrollado por Duality Domain",
        nosotrosDescription: "Somos un equipo apasionado por crear estrategias digitales que impulsan marcas hacia el éxito. En Vibrando Alto, combinamos creatividad, innovación y experiencia para conectar a nuestros clientes con su audiencia ideal, logrando resultados reales. Nuestro objetivo es hacer que tu marca brille y crezca en el mundo digital.",
    },
    en: {
        inicio: "Home",
        servicios: "Services",
        nosotros: "About Us",
        clientes: "Clients",
        contacto: "Contact",
        agenciaMarketingDigital: "Digital Marketing Agency",
        preparateParaElFuturo: "Prepare for the future.",
        reservarAsesoria: "Book a Consultation",
        masInformacion: "More Information",
        descubreMas: "Discover More",
        nuestrosServicios: "Our Digital Marketing Services",
        certificaciones: "Our Digital Marketing Agency Certifications",
        somosAgencia: "We are a Digital Marketing Agency",
        porQueElegirnos: "Why Choose Vibrando Alto?",
        clientesCreenEnNosotros: "Clients Who Believe in Us",
        nuestroEquipo: "Our Team",
        agendaAsesoria: "SCHEDULE A PERSONALIZED CONSULTATION WITH Vibrando Alto",
        descubreComoImpulsar: "Discover how we can boost your business in the digital world",
        preguntasFrecuentes: "Frequently Asked Questions",
        derechosReservados: "All rights reserved.",
        poweredBy: "Powered by Duality Domain",
        nosotrosDescription: "We are a team passionate about creating digital strategies that drive brands towards success. At Vibrando Alto, we combine creativity, innovation, and experience to connect our clients with their ideal audience, achieving real results. Our goal is to make your brand shine and grow in the digital world.",
    }
};

function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Translate dynamic content
    if (typeof window.updateDynamicContent === 'function') {
        window.updateDynamicContent(lang);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', (event) => {
        updateLanguage(event.target.value);
    });

    // Initialize with the current language
    updateLanguage(document.documentElement.lang);
});