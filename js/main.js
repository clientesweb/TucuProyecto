document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
    setupSlider();
    setupMobileMenu();
    setupLanguageSelector();
    loadDynamicContent();
    setupFAQAccordion();
    setupPreloader();
});

function setupSlider() {
    const slider = document.querySelector('.slider');
    const slideTrack = document.querySelector('.slide-track');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slideTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(nextSlide, 5000);
}

function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const nav = document.querySelector('nav');

    mobileMenuButton.addEventListener('click', function() {
        nav.classList.toggle('hidden');
    });
}

function setupLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        changeLanguage(selectedLanguage);
    });
}

function loadDynamicContent() {
    loadServices();
    loadAgencyFeatures();
    loadReasons();
    loadClients();
    loadTeam();
    loadFAQ();
}

function loadServices() {
    const services = [
        { icon: 'fa-globe', title: 'SEO', description: 'Impulsamos el crecimiento de tu negocio en canales orgánicos a través de estrategias de posicionamiento web.' },
        { icon: 'fa-bullhorn', title: 'Redes Sociales', description: 'Activamos y gestionamos tu presencia online en las redes sociales más importantes del momento.' },
        { icon: 'fa-laptop-code', title: 'Diseño y Desarrollo Web', description: 'Nos encargamos del diseño de tu sitio web o aplicación abordando todas las necesidades de tu empresa.' },
        { icon: 'fa-comments', title: 'Setters', description: 'Identifica cuentas de alto potencial y optimiza la búsqueda de clientes calificados.' },
        { icon: 'fa-bolt', title: 'Google ADS', description: 'Desarrollamos campañas de búsqueda, display, remarketing, discovery y performance max.' },
        { icon: 'fa-robot', title: 'Crecimiento con IA', description: 'Sistematización de crecimiento exponencial que mejorará la imagen de tu perfil.' },
        { icon: 'fa-pen', title: 'Guiones', description: 'Esquema que organiza el contenido de un video corto, con introducción, mensaje clave y llamado a la acción, para captar la atención en redes sociales.' },
        { icon: 'fa-microphone', title: 'Creación de podcast', description: 'Unimos cámaras, tarjetas de audio de distintas cámaras y hacemos la edición para que tu podcast sea llamativo y crees un canal con una audiencia sólida.' },
        { icon: 'fa-handshake', title: 'Cerradores', description: 'Personas encargadas de cerrar las ventas potenciales que tiene nuestro cliente, sin gastar tiempo y mejorando su ROI y beneficio.' },
        { icon: 'fa-file-alt', title: 'Marketing de Contenidos', description: 'Desarrollamos campañas de búsqueda, display, remarketing, discovery y performance max.' },
        { icon: 'fa-search', title: 'Posicionamiento en Google', description: 'Lleva tu empresa a los primeros lugares de Google' },
        { icon: 'fa-video', title: 'Edición de video', description: 'Editamos videos profesionales que captan la esencia de tu marca y atraen a tu audiencia, ideales para redes sociales y campañas publicitarias.' },
    ];

    const servicesGrid = document.getElementById('servicesGrid');
    services.forEach((service, index) => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'bg-custom bg-opacity-10 p-6 rounded-lg text-center';
        serviceElement.setAttribute('data-aos', 'fade-up');
        serviceElement.setAttribute('data-aos-delay', index * 100);
        serviceElement.innerHTML = `
            <i class="fas ${service.icon} text-4xl mb-4 text-accent"></i>
            <h3 class="text-xl font-bold mb-2">${service.title}</h3>
            <p class="mb-4">${service.description}</p>
            <button class="bg-accent text-primary py-2 px-4 rounded-full hover:bg-primary hover:text-accent transition-colors">
                Descubre más
            </button>
        `;
        servicesGrid.appendChild(serviceElement);
    });
}

function loadAgencyFeatures() {
    const features = [
        { icon: 'fa-chart-line', title: 'Estrategia Personalizada', description: 'Desarrollamos planes de marketing digital adaptados a tus objetivos y necesidades específicas.' },
        { icon: 'fa-users', title: 'Equipo Experto', description: 'Contamos con profesionales especializados en cada área del marketing digital.' },
        { icon: 'fa-tachometer-alt', title: 'Resultados Medibles', description: 'Utilizamos herramientas avanzadas para medir y optimizar el rendimiento de tus campañas.' }
    ];

    const featuresGrid = document.getElementById('agencyFeaturesGrid');
    features.forEach((feature, index) => {
        const featureElement = document.createElement('div');
        featureElement.className = 'text-center';
        featureElement.setAttribute('data-aos', 'fade-up');
        featureElement.setAttribute('data-aos-delay', index * 100);
        featureElement.innerHTML = `
            <i class="fas ${feature.icon} text-4xl mb-4 text-primary"></i>
            <h3 class="text-xl font-bold mb-2">${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        featuresGrid.appendChild(featureElement);
    });
}

function loadReasons() {
    const reasons = [
        { title: 'Experiencia Comprobada', description: 'Años de experiencia en el sector y casos de éxito que avalan nuestro trabajo.' },
        { title: 'Innovación Constante', description: 'Nos mantenemos actualizados con las últimas tendencias y tecnologías en marketing digital.' },
        { title: 'Enfoque en Resultados', description: 'Nos comprometemos a alcanzar y superar tus objetivos de negocio.' },
        { title: 'Atención Personalizada', description: 'Cada cliente recibe un trato único y adaptado a sus necesidades específicas.' }
    ];

    const reasonsGrid = document.getElementById('reasonsGrid');
    reasons.forEach((reason, index) => {
        const reasonElement = document.createElement('div');
        reasonElement.className = 'bg-custom bg-opacity-10 p-6 rounded-lg';
        reasonElement.setAttribute('data-aos', 'fade-up');
        reasonElement.setAttribute('data-aos-delay', index * 100);
        reasonElement.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${reason.title}</h3>
            <p>${reason.description}</p>
        `;
        reasonsGrid.appendChild(reasonElement);
    });
}

function loadClients() {
    const clients = [
        { name: 'Cliente 1', logo: 'client1-logo.png' },
        { name: 'Cliente 2', logo: 'client2-logo.png' },
        { name: 'Cliente 3', logo: 'client3-logo.png' },
        { name: 'Cliente 4', logo: 'client4-logo.png' },
        { name: 'Cliente 5', logo: 'client5-logo.png' },
        { name: 'Cliente 6', logo: 'client6-logo.png' },
        { name: 'Cliente 7', logo: 'client7-logo.png' },
        { name: 'Cliente 8', logo: 'client8-logo.png' }
    ];

    const clientsGrid = document.getElementById('clientsGrid');
    clients.forEach((client, index) => {
        const clientElement = document.createElement('div');
        clientElement.className = 'flex justify-center items-center';
        clientElement.setAttribute('data-aos', 'fade-up');
        clientElement.setAttribute('data-aos-delay', index * 100);
        clientElement.innerHTML = `
            <img src="img/${client.logo}" alt="${client.name}" class="max-w-full h-auto">
        `;
        clientsGrid.appendChild(clientElement);
    });
}

function loadTeam() {
    const team = [
        { name: 'Juan Pérez', role: 'CEO & Fundador', photo: 'juan-perez.jpg' },
        { name: 'Ana García', role: 'Directora de Marketing', photo: 'ana-garcia.jpg' },
        { name: 'Carlos Rodríguez', role: 'Especialista en SEO', photo: 'carlos-rodriguez.jpg' },
        { name: 'Laura Martínez', role: 'Diseñadora Gráfica', photo: 'laura-martinez.jpg' }
    ];

    const teamGrid = document.getElementById('teamGrid');
    team.forEach((member, index) => {
        const memberElement = document.createElement('div');
        memberElement.className = 'text-center';
        memberElement.setAttribute('data-aos', 'fade-up');
        memberElement.setAttribute('data-aos-delay', index * 100);
        memberElement.innerHTML = `
            <img src="img/${member.photo}" alt="${member.name}" class="w-48 h-48 rounded-full mx-auto mb-4">
            <h3 class="text-xl font-bold mb-2">${member.name}</h3>
            <p>${member.role}</p>
        `;
        teamGrid.appendChild(memberElement);
    });
}

function loadFAQ() {
    const faqs = [
        { question: '¿Qué es el marketing digital?', answer: 'El marketing digital es el conjunto de estrategias y técnicas de promoción de productos o servicios a través de medios digitales.' },
        { question: '¿Por qué necesito marketing digital para mi negocio?', answer: 'El marketing digital es esencial para aumentar la visibilidad de tu negocio, llegar a tu audiencia objetivo y competir efectivamente en el mercado actual.' },
        { question: '¿Cuánto tiempo se necesita para ver resultados?', answer: 'El tiempo para ver resultados varía según la estrategia y el sector, pero generalmente se pueden observar mejoras en 3-6 meses.' },
        { question: '¿Qué servicios de marketing digital ofrecen?', answer: 'Ofrecemos una amplia gama de servicios, incluyendo SEO, marketing de contenidos, publicidad en redes sociales, email marketing y más.' }
    ];

    const faqContainer = document.getElementById('faqContainer');
    faqs.forEach((faq, index) => {
        const faqElement = document.createElement('div');
        faqElement.className = 'bg-custom bg-opacity-10 p-6 rounded-lg';
        faqElement.setAttribute('data-aos', 'fade-up');
        faqElement.setAttribute('data-aos-delay', index * 100);
        faqElement.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${faq.question}</h3>
            <p class="hidden">${faq.answer}</p>
        `;
        faqContainer.appendChild(faqElement);
    });
}

function setupFAQAccordion() {
    const faqItems = document.querySelectorAll('#faqContainer > div');
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        question.addEventListener('click', () => {
            answer.classList.toggle('hidden');
        });
    });
}

function setupPreloader() {
    const preloader = document.querySelector('.preloader');
    const logo = document.createElement('img');
    logo.src = 'logo.png';
    logo.alt = 'Vibrando Alto Logo';
    logo.className = 'w-24 h-24 mb-4 pulse';

    const poweredBy = document.createElement('p');
    poweredBy.className = 'text-white text-sm mt-4';
    poweredBy.innerHTML = 'Powered by <a href="https://herft.com" target="_blank" class="text-primary hover:text-accent">Herft</a>';

    preloader.appendChild(logo);
    preloader.appendChild(poweredBy);

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

function changeLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}