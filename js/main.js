document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        preloader.innerHTML = `
            <img src="logo.png" alt="Logo" class="pulse">
            <p class="pulse">Powered By Duality Domain</p>
        `;
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 2000);
    });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Adjust padding-top of the first section to account for fixed header
    const fixedHeader = document.querySelector('.fixed-header');
    const firstSection = document.querySelector('main > section:first-child');
    
    function adjustFirstSectionPadding() {
        const headerHeight = fixedHeader.offsetHeight;
        firstSection.style.paddingTop = `${headerHeight + 20}px`; // 20px extra for spacing
    }

    window.addEventListener('resize', adjustFirstSectionPadding);
    adjustFirstSectionPadding();

    // Banner video
    const bannerSection = document.querySelector('#banner');
    if (bannerSection) {
        bannerSection.innerHTML = `
            <div class="relative w-full h-full overflow-hidden">
                <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover">
                    <source src="img/vibrando1.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 class="text-4xl md:text-6xl text-white font-bold text-center">Vibrando Alto: Tu Agencia de Marketing Digital</h1>
                </div>
            </div>
        `;
    }

    // Services data
    const services = [
        { 
            icon: 'fa-globe', 
            title: 'SEO', 
            description: 'Impulsamos el crecimiento de tu negocio en canales orgánicos a través de estrategias de posicionamiento web.',
            modalContent: 'Nuestro servicio de SEO incluye:<br>- Auditoría técnica del sitio web<br>- Investigación de palabras clave<br>- Optimización on-page y off-page<br>- Creación de contenido optimizado<br>- Seguimiento y análisis de resultados'
        },
        { 
            icon: 'fa-bullhorn', 
            title: 'Redes Sociales',
            description: 'Activamos y gestionamos tu presencia online en las redes sociales más importantes del momento.',
            modalContent: 'Nuestro servicio de Redes Sociales incluye:<br>- Estrategia de contenido personalizada<br>- Diseño de publicaciones atractivas<br>- Programación y publicación de contenido<br>- Interacción con la audiencia<br>- Análisis de métricas y optimización continua'
        },
        { 
            icon: 'fa-laptop-code', 
            title: 'Diseño y Desarrollo Web',
            description: 'Nos encargamos del diseño de tu sitio web o aplicación abordando todas las necesidades de tu empresa.',
            modalContent: 'Nuestro servicio de Diseño y Desarrollo Web incluye:<br>- Diseño UX/UI personalizado<br>- Desarrollo frontend y backend<br>- Optimización para dispositivos móviles<br>- Integración de CMS<br>- Mantenimiento y soporte técnico'
        },
        { 
            icon: 'fa-comments', 
            title: 'Setters',
            description: 'Identifica cuentas de alto potencial y optimiza la búsqueda de clientes calificados.',
            modalContent: 'Nuestro servicio de Setters incluye:<br>- Identificación de leads potenciales<br>- Estrategias de acercamiento personalizadas<br>- Gestión de la comunicación inicial<br>- Calificación de prospectos<br>- Reportes de rendimiento y mejora continua'
        },
        { 
            icon: 'fa-bolt', 
            title: 'Google ADS',
            description: 'Desarrollamos campañas de búsqueda, display, remarketing, discovery y performance max.',
            modalContent: 'Nuestro servicio de Google ADS incluye:<br>- Configuración y optimización de campañas<br>- Selección estratégica de palabras clave<br>- Creación de anuncios persuasivos<br>- Seguimiento de conversiones<br>- Informes detallados y optimización continua'
        },
        { 
            icon: 'fa-robot', 
            title: 'Crecimiento con IA',
            description: 'Sistematización de crecimiento exponencial que mejorará la imagen de tu perfil.',
            modalContent: 'Nuestro servicio de Crecimiento con IA incluye:<br>- Implementación de chatbots inteligentes<br>- Análisis predictivo de tendencias<br>- Personalización de contenido con IA<br>- Optimización de campañas con aprendizaje automático<br>- Informes avanzados basados en IA'
        },
    ];

    // Render services
    const servicesGrid = document.getElementById('servicesGrid');
    services.forEach((service, index) => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'bg-primary p-6 rounded-lg text-center';
        serviceElement.setAttribute('data-aos', 'fade-up');
        serviceElement.setAttribute('data-aos-delay', (index * 100).toString());
        serviceElement.innerHTML = `
            <i class="fas ${service.icon} text-4xl mb-4"></i>
            <h3 class="text-xl font-bold mb-2">${service.title}</h3>
            <p class="mb-4">${service.description}</p>
            <button class="bg-custom text-primary py-2 px-4 rounded-full hover:bg-accent hover:text-custom transition-colors modal-trigger" data-service="${service.title}">
                Descubre más
            </button>
        `;
        servicesGrid.appendChild(serviceElement);
    });

    // Clients data
    const clients = [
        { name: 'AG ALEXIS GORGONEA PELUQUERIA CANINA', logo: 'img/alexis-logo.png' },
        { name: 'MARKET', logo: 'img/market-logo.png' },
        { name: 'Florencio Soto', logo: 'img/florencio-logo.png' },
        { name: 'FASHION', logo: 'img/fashion-logo.png' },
    ];

    // Render clients
    const clientsGrid = document.getElementById('clientsGrid');
    clients.forEach((client, index) => {
        const clientElement = document.createElement('div');
        clientElement.className = 'bg-custom p-4 rounded-lg flex items-center justify-center h-24';
        clientElement.setAttribute('data-aos', 'fade-up');
        clientElement.setAttribute('data-aos-delay', (index * 100).toString());
        clientElement.innerHTML = `
            <img src="${client.logo}" alt="${client.name}" class="max-h-full max-w-full object-contain">
        `;
        clientsGrid.appendChild(clientElement);
    });

    // Team data
    const team = [
        { name: 'VALENTINA TERAN', role: 'CEO Y EDITORA', photo: 'img/valentina-teran.jpg' },
        { name: 'CANDELA CIUTATT', role: 'CEO Y CLOSER', photo: 'img/candela-ciutatt.jpg' },
    ];

    // Render team
    const teamGrid = document.getElementById('teamGrid');
    team.forEach((member, index) => {
        const memberElement = document.createElement('div');
        memberElement.className = 'text-center';
        memberElement.setAttribute('data-aos', 'fade-up');
        memberElement.setAttribute('data-aos-delay', (index * 100).toString());
        memberElement.innerHTML = `
            <div class="w-32 h-32 mx-auto mb-4 gradient-primary rounded-lg flex items-center justify-center overflow-hidden">
                <img src="${member.photo}" alt="${member.name}" class="w-full h-full object-cover">
            </div>
            <h3 class="font-bold">${member.name}</h3>
            <p>${member.role}</p>
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
                <h3 class="text-xl font-bold mb-2">${reason.title}</h3>
                <p>${reason.description}</p>
            </div>
        `;
        reasonsGrid.appendChild(reasonElement);
    });

    // Agency Features
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
        featureElement.className = 'bg-custom bg-opacity-50 p-6 rounded-lg text-center';
        featureElement.setAttribute('data-aos', 'fade-up');
        featureElement.setAttribute('data-aos-delay', (index * 100).toString());
        featureElement.innerHTML = `
            <i class="fas ${feature.icon} text-4xl mb-4 text-accent"></i>
            <h3 class="text-xl font-bold mb-2">${feature.title}</h3>
            <p>${feature.description}</p>
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
        faqElement.className = 'border-b border-gray-700 pb-4';
        faqElement.setAttribute('data-aos', 'fade-up');
        faqElement.setAttribute('data-aos-delay', (index * 100).toString());
        faqElement.innerHTML = `
            <button class="flex justify-between items-center w-full text-left font-bold mb-2">
                ${faq.question}
                <i class="fas fa-chevron-down transform transition-transform duration-200"></i>
            </button>
            <p class="hidden">${faq.answer}</p>
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

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Slider functionality
    const slideTrack = document.querySelector('.slide-track');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const offset = -currentIndex * 100;
        slideTrack.style.transform = `translateX(${offset}%)`;
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Modal functionality
    const modalContainer = document.createElement('div');
    modalContainer.className = 'fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center z-50';
    document.body.appendChild(modalContainer);

    document.querySelectorAll('.modal-trigger').forEach(button => {
        button.addEventListener('click', () => {
            const serviceName = button.getAttribute('data-service');
            const service = services.find(s => s.title === serviceName);
            if (service) {
                const modalContent = `
                    <div class="bg-custom p-6 rounded-lg max-w-lg w-full">
                        <h2 class="text-2xl font-bold mb-4">${service.title}</h2>
                        <p class="mb-4">${service.description}</p>
                        <div class="mb-4">${service.modalContent}</div>
                        <button class="close-modal bg-primary text-custom py-2 px-4 rounded-full hover:bg-secondary transition-colors">Cerrar</button>
                    </div>
                `;
                modalContainer.innerHTML = modalContent;
                modalContainer.classList.remove('hidden');

                modalContainer.querySelector('.close-modal').addEventListener('click', () => {
                    modalContainer.classList.add('hidden');
                });
            }
        });
    });

    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContainer.classList.add('hidden');
        }
    });

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        // Aquí puedes agregar la lógica para enviar el correo a tu servicio de newsletter
        alert(`Gracias por suscribirte con el correo: ${email}`);
        this.reset();
    });

    // WhatsApp float button bounce effect
    const whatsappFloat = document.querySelector('.whatsapp-float');
    whatsappFloat.addEventListener('mouseover', () => {
        whatsappFloat.classList.add('bounce');
    });
    whatsappFloat.addEventListener('mouseout', () => {
        whatsappFloat.classList.remove('bounce');
    });
});