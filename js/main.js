document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
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
        }
    });

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    if (mobileMenuButton && mobileMenu && closeMenu) {
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
    }

    // Adjust padding-top of the first section to account for fixed header
    const fixedHeader = document.querySelector('.fixed-header');
    const firstSection = document.querySelector('main > section:first-child');
    
    function adjustFirstSectionPadding() {
        if (fixedHeader && firstSection) {
            const headerHeight = fixedHeader.offsetHeight;
            firstSection.style.paddingTop = `${headerHeight}px`;
        }
    }

    window.addEventListener('resize', adjustFirstSectionPadding);
    adjustFirstSectionPadding();

    // Banner video
    const bannerSection = document.querySelector('#banner');
    if (bannerSection) {
        bannerSection.innerHTML = `
            <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover">
                <source src="img/vibrando1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 class="text-4xl md:text-6xl text-white font-bold text-center">Vibrando Alto: Tu Agencia de Marketing Digital</h1>
            </div>
        `;
    }

    // Services data
    const services = [
        { 
            icon: 'fa-globe', 
            title: 'SEO', 
            description: 'Impulsamos el crecimiento de tu negocio en canales orgánicos a través de estrategias de posicionamiento web.',
            modalContent: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Nuestro servicio de SEO incluye:</h3>
                        <ul class="list-disc pl-5">
                            <li>Auditoría técnica del sitio web</li>
                            <li>Investigación de palabras clave</li>
                            <li>Optimización on-page y off-page</li>
                            <li>Creación de contenido optimizado</li>
                            <li>Seguimiento y análisis de resultados</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="SEO" class="w-full h-auto rounded-lg">
                    </div>
                </div>
            `
        },
        { 
            icon: 'fa-bullhorn', 
            title: 'Redes Sociales',
            description: 'Activamos y gestionamos tu presencia online en las redes sociales más importantes del momento.',
            modalContent: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Nuestro servicio de Redes Sociales incluye:</h3>
                        <ul class="list-disc pl-5">
                            <li>Estrategia de contenido personalizada</li>
                            <li>Diseño de publicaciones atractivas</li>
                            <li>Programación y publicación de contenido</li>
                            <li>Interacción con la audiencia</li>
                            <li>Análisis de métricas y optimización continua</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="Redes Sociales" class="w-full h-auto rounded-lg">
                    </div>
                </div>
            `
        },
        { 
            icon: 'fa-laptop-code', 
            title: 'Diseño y Desarrollo Web',
            description: 'Nos encargamos del diseño de tu sitio web o aplicación abordando todas las necesidades de tu empresa.',
            modalContent: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Nuestro servicio de Diseño y Desarrollo Web incluye:</h3>
                        <ul class="list-disc pl-5">
                            <li>Diseño UX/UI personalizado</li>
                            <li>Desarrollo frontend y backend</li>
                            <li>Optimización para dispositivos móviles</li>
                            <li>Integración de CMS</li>
                            <li>Mantenimiento y soporte técnico</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="Diseño y Desarrollo Web" class="w-full h-auto rounded-lg">
                    </div>
                </div>
            `
        },
        { 
            icon: 'fa-comments', 
            title: 'Setters',
            description: 'Identifica cuentas de alto potencial y optimiza la búsqueda de clientes calificados.',
            modalContent: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Nuestro servicio de Setters incluye:</h3>
                        <ul class="list-disc pl-5">
                            <li>Identificación de leads potenciales</li>
                            <li>Estrategias de acercamiento personalizadas</li>
                            <li>Gestión de la comunicación inicial</li>
                            <li>Calificación de prospectos</li>
                            <li>Reportes de rendimiento y mejora continua</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="Setters" class="w-full h-auto rounded-lg">
                    </div>
                </div>
            `
        },
        { 
            icon: 'fa-bolt', 
            title: 'Google ADS',
            description: 'Desarrollamos campañas de búsqueda, display, remarketing, discovery y performance max.',
            modalContent: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Nuestro servicio de Google ADS incluye:</h3>
                        <ul class="list-disc pl-5">
                            <li>Configuración y optimización de campañas</li>
                            <li>Selección estratégica de palabras clave</li>
                            <li>Creación de anuncios persuasivos</li>
                            <li>Seguimiento de conversiones</li>
                            <li>Informes detallados y optimización continua</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Google ADS" class="w-full h-auto rounded-lg">
                    </div>
                </div>
            `
        },
        { 
            icon: 'fa-robot', 
            title: 'Crecimiento con IA',
            description: 'Sistematización de crecimiento exponencial que mejorará la imagen de tu perfil.',
            modalContent: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Nuestro servicio de Crecimiento con IA incluye:</h3>
                        <ul class="list-disc pl-5">
                            <li>Implementación de chatbots inteligentes</li>
                            <li>Análisis predictivo de tendencias</li>
                            <li>Personalización de contenido con IA</li>
                            <li>Optimización de campañas con aprendizaje automático</li>
                            <li>Informes avanzados basados en IA</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Crecimiento con IA" class="w-full h-auto rounded-lg">
                    </div>
                </div>
            `
        },
    ];

    // Render services
    const servicesGrid = document.getElementById('servicesGrid');
    if (servicesGrid) {
        services.forEach((service, index) => {
            const serviceElement = document.createElement('div');
            serviceElement.className = 'bg-primary p-6 rounded-lg text-center hover-effect';
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
    }

    // Clients data
    const clients = [
        { name: 'Cliente 1', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80' },
        { name: 'Cliente 2', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80' },
        { name: 'Cliente 3', logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { name: 'Cliente 4', logo: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    ];

    // Render clients
    const clientsGrid = document.getElementById('clientsGrid');
    if (clientsGrid) {
        clients.forEach((client, index) => {
            const clientElement = document.createElement('div');
            clientElement.className = 'bg-custom p-4 rounded-lg flex items-center justify-center h-24 hover-effect';
            clientElement.setAttribute('data-aos', 'fade-up');
            clientElement.setAttribute('data-aos-delay', (index * 100).toString());
            clientElement.innerHTML = `
                <img src="${client.logo}" alt="${client.name}" class="max-h-full max-w-full object-contain">
            `;
            clientsGrid.appendChild(clientElement);
        });
    }

    // Team data
    const team = [
        { name: 'VALENTINA TERAN', role: 'CEO Y EDITORA', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80' },
        { name: 'CANDELA CIUTATT', role: 'CEO Y CLOSER', photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    ];

    // Render team
    const teamGrid = document.getElementById('teamGrid');
    if (teamGrid) {
        team.forEach((member, index) => {
            const memberElement = document.createElement('div');
            memberElement.className = 'text-center hover-effect';
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
    }

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
    if (reasonsGrid) {
        reasons.forEach((reason, index) => {
            const reasonElement = document.createElement('div');
            reasonElement.className = 'flex items-start space-x-4 hover-effect';
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
    }

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
    if (agencyFeaturesGrid) {
        agencyFeatures.forEach((feature, index) => {
            const featureElement = document.createElement('div');
            featureElement.className = 'bg-custom bg-opacity-50 p-6 rounded-lg text-center hover-effect';
            featureElement.setAttribute('data-aos', 'fade-up');
            featureElement.setAttribute('data-aos-delay', (index * 100).toString());
            featureElement.innerHTML = `
                <i class="fas ${feature.icon} text-4xl mb-4 text-accent"></i>
                <h3 class="text-xl font-bold mb-2">${feature.title}</h3>
                <p>${feature.description}</p>
            `;
            agencyFeaturesGrid.appendChild(featureElement);
        });
    }

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
    if (faqContainer) {
        faqs.forEach((faq, index) => {
            const faqElement = document.createElement('div');
            faqElement.className = 'border-b border-gray-700 pb-4 hover-effect';
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
    }

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
        if (slideTrack) {
            const offset = -currentIndex * 100;
            slideTrack.style.transform = `translateX(${offset}%)`;
        }
    }

    if (slides.length > 0) {
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

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
                    <div class="bg-custom p-6 rounded-lg max-w-4xl w-full mx-4">
                        <h2 class="text-2xl font-bold mb-4">${service.title}</h2>
                        ${service.modalContent}
                        <button class="close-modal bg-primary text-custom py-2 px-4 rounded-full hover:bg-secondary transition-colors mt-4">Cerrar</button>
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
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const whatsappNumber = this.querySelector('input[type="tel"]').value;
            const message = encodeURIComponent('Hola, me gustaría suscribirme al boletín informativo de Vibrando Alto.');
            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
            this.reset();
        });
    }

    // WhatsApp float button bounce effect
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.addEventListener('mouseover', () => {
            whatsappFloat.classList.add('bounce');
        });
        whatsappFloat.addEventListener('mouseout', () => {
            whatsappFloat.classList.remove('bounce');
        });
    }

    // Nosotros modal content
    const nosotrosModalContent = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h3 class="text-xl font-bold mb-2">Nuestra Historia</h3>
                <p>Vibrando Alto nació de la pasión por el marketing digital y la visión de crear estrategias innovadoras que realmente impulsen el crecimiento de las empresas. Desde nuestros inicios, nos hemos dedicado a ofrecer soluciones personalizadas y resultados medibles para nuestros clientes.</p>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-2">Nuestra Misión</h3>
                <p>Nuestra misión es empoderar a las empresas para que alcancen su máximo potencial en el mundo digital. Nos esforzamos por ofrecer estrategias de marketing innovadoras y efectivas que generen un impacto real y duradero en el crecimiento de nuestros clientes.</p>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-2">Nuestros Valores</h3>
                <ul class="list-disc pl-5">
                    <li>Innovación constante</li>
                    <li>Compromiso con los resultados</li>
                    <li>Transparencia y honestidad</li>
                    <li>Trabajo en equipo</li>
                    <li>Aprendizaje continuo</li>
                </ul>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Equipo Vibrando Alto" class="w-full h-auto rounded-lg">
            </div>
        </div>
    `;

    // Add Nosotros modal trigger
    const nosotrosButton = document.querySelector('button[data-service="nosotros"]');
    if (nosotrosButton) {
        nosotrosButton.addEventListener('click', () => {
            modalContainer.innerHTML = `
                <div class="bg-custom p-6 rounded-lg max-w-4xl w-full mx-4">
                    <h2 class="text-2xl font-bold mb-4">Sobre Nosotros</h2>
                    ${nosotrosModalContent}
                    <button class="close-modal bg-primary text-custom py-2 px-4 rounded-full hover:bg-secondary transition-colors mt-4">Cerrar</button>
                </div>
            `;
            modalContainer.classList.remove('hidden');

            modalContainer.querySelector('.close-modal').addEventListener('click', () => {
                modalContainer.classList.add('hidden');
            });
        });
    }

    console.log("Script loaded and executed successfully!");
});