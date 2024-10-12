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
        // Add more translations as needed
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
        // Add more translations as needed
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
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', (event) => {
        updateLanguage(event.target.value);
    });
});