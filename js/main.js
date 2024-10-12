document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const nav = document.querySelector('nav');

    mobileMenuButton.addEventListener('click', () => {
        nav.classList.toggle('hidden');
    });

    // Services data
    const services = [
        { icon: 'fa-globe', title: 'SEO', 
          description: 'Impulsamos el crecimiento de tu negocio en canales orgánicos a través de estrategias de posicionamiento web.' },
        { icon: 'fa-bullhorn', title: 'Redes Sociales',
          description: 'Activamos y gestionamos tu presencia online en las redes sociales más importantes del momento.' },
        { icon: 'fa-laptop-code', title: 'Diseño y Desarrollo Web',
          description: 'Nos encargamos del diseño de tu sitio web o aplicación abordando todas las necesidades de tu empresa.' },
        { icon: 'fa-comments', title: 'Setters',
          description: 'Identifica cuentas de alto potencial y optimiza la búsqueda de clientes calificados.' },
        { icon: 'fa-bolt', title: 'Google ADS',
          description: 'Desarrollamos campañas de búsqueda, display, remarketing, discovery y performance max.' },
        { icon: 'fa-robot', title: 'Crecimiento con IA',
          description: 'Sistematización de crecimiento exponencial que mejorará la imagen de tu perfil.' },
    ];

    // Render services
    const servicesGrid = document.getElementById('servicesGrid');
    services.forEach((service, index) => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'bg-primary text-custom p-6 rounded-lg text-center';
        serviceElement.setAttribute('data-aos', 'fade-up');
        serviceElement.setAttribute('data-aos-delay', (index * 100).toString());
        serviceElement.innerHTML = `
            <i class="fas ${service.icon} text-4xl mb-4 text-secondary"></i>
            <h3 class="text-xl font-bold mb-2">${service.title}</h3>
            <p class="mb-4">${service.description}</p>
            <button class="bg-secondary text-custom py-2 px-4 rounded-full hover:bg-accent transition-colors">
                Descubre más
            </button>
        `;
        servicesGrid.appendChild(serviceElement);
    });

    // Clients data
    const clients = [
        { name: 'AG ALEXIS GORGONEA PELUQUERIA CANINA', style: 'font-bold' },
        { name: 'MARKET', style: 'text-primary font-bold' },
        { name: 'Florencio Soto', style: 'font-serif' },
        { name: 'FASHION', style: 'text-accent uppercase' },
    ];

    // Render clients
    const clientsGrid = document.getElementById('clientsGrid');
    clients.forEach((client, index) => {
        const clientElement = document.createElement('div');
        clientElement.className = `bg-secondary text-custom p-4 rounded-lg flex items-center justify-center h-24 ${client.style}`;
        clientElement.setAttribute('data-aos', 'fade-up');
        clientElement.setAttribute('data-aos-delay', (index * 100).toString());
        clientElement.textContent = client.name;
        clientsGrid.appendChild(clientElement);
    });

    // Team data
    const team = [
        { name: 'VALENTINA TERAN', role: 'CEO Y EDITORA' },
        { name: 'MARIANA MÓNACO TORRENTE', role: 'CEO Y COMMUNITY MANAGER' },
        { name: 'CANDELA CIUTATT', role: 'CEO Y CLOSER' },
    ];

    // Render team
    const teamGrid = document.getElementById('teamGrid');
    team.forEach((member, index) => {
        const memberElement = document.createElement('div');
        memberElement.className = 'text-center';
        memberElement.setAttribute('data-aos', 'fade-up');
        memberElement.setAttribute('data-aos-delay', (index * 100).toString());
        memberElement.innerHTML = `
            <div class="w-32 h-32 mx-auto mb-4 gradient-primary rounded-lg flex items-center justify-center">
                <img src="/placeholder.svg" alt="${member.name}" width="96" height="96" class="rounded-lg">
            </div>
            <h3 class="font-bold text-primary">${member.name}</h3>
            <p class="text-accent">${member.role}</p>
        `;
        teamGrid.appendChild(memberElement);
    });

    // Reasons data
    const reasons = [
        { icon: 'fa-comments', title: 'Interpretamos las necesidades',
          description: 'Interpretamos las necesidades reales de cada cliente, aún cuando le resulte complejo explicarlas.' },
        { icon: 'fa-lightbulb', title: 'Planificamos estrategias',
          description: 'Planificamos estrategias de marketing digital que le permitirán a tu empresa destacarse por frente a la competencia.' },
        { icon: 'fa-dollar-sign', title: 'Cuidamos tu presupuesto',
          description: 'Cuidamos tu presupuesto, y lo empleamos para acciones de publicidad online que generen resultados concretos de negocio.' },
        { icon: 'fa-chart-bar', title: 'Generamos reportes claros',
          description: 'Mediante datos de Google Analytics, generamos reportes claros que se envían al cliente periódicamente, brindando información precisa y transparente sobre cada etapa del proyecto.' },
        { icon: 'fa-users', title: 'Soluciones integrales',
          description: 'Brindamos soluciones integrales, contamos con especialistas en cada una de las áreas del marketing digital y del inbound marketing.' },
    ];

    // Render reasons
    const reasonsGrid = document.getElementById('reasonsGrid');
    reasons.forEach((reason, index) => {
        const reasonElement = document.createElement('div');
        reasonElement.className = 'flex items-start space-x-4';
        reasonElement.setAttribute('data-aos', 'fade-up');
        reasonElement.setAttribute('data-aos-delay', (index * 100).toString());
        reasonElement.innerHTML = `
            <i class="fas ${reason.icon} text-3xl text-primary"></i>
            <div>
                <h3 class="text-xl font-bold mb-2 text-secondary">${reason.title}</h3>
                <p class="text-custom">${reason.description}</p>
            </div>
        `;
        reasonsGrid.appendChild(reasonElement);
    });

    // Agency features data
    const agencyFeatures = [
        { icon: 'fa-globe', title: 'Global', 
          description: 'Somos una agencia de marketing que trabajamos con empresas de diversos países como Argentina, Uruguay, Chile, Paraguay, México, España y Estados Unidos.' },
        { icon: 'fa-laptop', title: 'Boutique', 
          description: 'Somos una agencia 100% remota. Estamos actualizados con las nuevas tendencias globales y contamos con un equipo de expertos alrededor del mundo.' },
        { icon: 'fa-star', title: '100% Remota', 
          description: 'Brindamos un servicio personalizado para cada cliente. Como agencia de marketing digital trabajamos enfocados en lograr resultados de negocio.' },
    ];

    // Render agency features
    const agencyFeaturesGrid = document.getElementById('agencyFeaturesGrid');
    agencyFeatures.forEach((feature, index) => {
        const featureElement = document.createElement('div');
        featureElement.className = 'bg-primary bg-opacity-10 p-6 rounded-lg text-center';
        featureElement.setAttribute('data-aos', 'fade-up');
        featureElement.setAttribute('data-aos-delay', (index * 100).toString());
        featureElement.innerHTML = `
            <i class="fas ${feature.icon} text-4xl mb-4 text-accent"></i>
            <h3 class="text-xl font-bold mb-2 text-primary">${feature.title}</h3>
            <p class="text-custom">${feature.description}</p>
        `;
        agencyFeaturesGrid.appendChild(featureElement);
    });

    // FAQ data
    const faqs = [
        { question: '¿Qué es y cómo funciona el Marketing Digital?',
          answer: 'El Marketing Digital es el conjunto de estrategias y técnicas que se utilizan para promocionar productos o servicios a través de medios digitales. Funciona mediante la creación de contenido relevante, la optimización para motores de búsqueda, la publicidad en redes sociales, el email marketing, entre otras tácticas.' },
        { question: '¿Para qué sirve el Marketing Digital?',
          answer: 'El Marketing Digital sirve para aumentar la visibilidad de una marca en línea, atraer más tráfico a un sitio web, generar leads, convertir clientes potenciales en compradores, y fidelizar a los clientes existentes. También permite medir y analizar el rendimiento de las campañas en tiempo real.' },
        { question: '¿Qué elementos componen al Marketing Digital?',
          answer: 'Los elementos principales del Marketing Digital incluyen: SEO, SEM, Marketing de Contenidos, Marketing en Redes Sociales, Email Marketing, Marketing de Afiliados, Publicidad Display, y Analítica Web.' },
        { question: '¿Cómo funciona una Agencia de Marketing?',
          answer: 'Una Agencia de Marketing funciona como un equipo externo que se encarga de diseñar, implementar y gestionar estrategias de marketing para sus clientes. Esto incluye la planificación de campañas, creación de contenido, gestión de redes sociales, análisis de datos y optimización continua de las estrategias.' },
        { question: '¿Cómo está conformado el equipo de una agencia de marketing?',
          answer: 'El equipo de una agencia de marketing suele estar compuesto por especialistas en diferentes áreas como estrategia digital, diseño gráfico, desarrollo web, SEO, SEM, gestión de redes sociales, creación de contenido, análisis de datos, entre otros.' },
    ];

    // Render FAQs
    const faqContainer = document.getElementById('faqContainer');
    faqs.forEach((faq, index) => {
        const faqElement = document.createElement('div');
        faqElement.className = 'border-b border-primary pb-4';
        faqElement.setAttribute('data-aos', 'fade-up');
        faqElement.setAttribute('data-aos-delay', (index * 100).toString());
        faqElement.innerHTML = `
            <button class="flex justify-between items-center w-full text-left font-bold mb-2 text-primary">
                ${faq.question}
                <i class="fas fa-chevron-down transform transition-transform duration-200 text-secondary"></i>
            </button>
            <p class="hidden text-custom">${faq.answer}</p>
        `;
        faqContainer.appendChild(faqElement);

        const button = faqElement.querySelector('button');
        const answer = faqElement.querySelector('p');
        const icon = faqElement.querySelector('i');

        button.addEventListener('click', () => {
            answer.classList.toggle('hidden');
            
            icon.classList.toggle('rotate-180');
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for navbar background change
const header = document.querySelector('header');
const heroSection = document.querySelector('section');

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('bg-custom', 'shadow-md');
        } else {
            header.classList.remove('bg-custom', 'shadow-md');
        }
    });
}, { threshold: 0.1 });

heroObserver.observe(heroSection);