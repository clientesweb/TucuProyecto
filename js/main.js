document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.display = 'flex';
        preloader.innerHTML = `
            <img src="logo.png" alt="Logo" class="pulse">
            <p class="pulse">Powered By Duality Domain</p>
        `;
        
        window.addEventListener('load', function() {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }

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

    function initTopBanner() {
        const slider = document.querySelector('.slider .slide-track');
        if (slider) {
            const slides = slider.children;
            let currentSlide = 0;
            
            function showNextSlide() {
                slides[currentSlide].style.opacity = '0';
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].style.opacity = '1';
            }

            // Inicializar la visibilidad de las diapositivas
            Array.from(slides).forEach((slide, index) => {
                slide.style.opacity = index === 0 ? '1' : '0';
                slide.style.transition = 'opacity 0.5s ease-in-out';
            });

            // Cambiar de diapositiva cada 5 segundos
            setInterval(showNextSlide, 5000);
        }
    }

    // Banner video
    const bannerSection = document.querySelector('#banner');
    if (bannerSection) {
        bannerSection.innerHTML = `
            <video autoplay loop muted playsinline class="w-full h-full object-cover">
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibrando1-Ma5Wpw4ZuwVNuGLkYgvmMpb1EtJnVo.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
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

    // Modal para la sección "nosotros"
    const nosotrosButton = document.querySelector('[data-service="nosotros"]');
    if (nosotrosButton) {
        nosotrosButton.addEventListener('click', () => {
            const modalContent = `
                <div class="bg-custom p-6 rounded-lg w-full max-w-4xl mx-auto max-h-[90vh] overflow-y-auto">
                    <h2 class="text-2xl font-bold mb-4">Sobre Nosotros</h2>
                    <p class="mb-4">Somos un equipo apasionado por crear estrategias digitales que impulsan marcas hacia el éxito. En Vibrando Alto, combinamos creatividad, innovación y experiencia para conectar a nuestros clientes con su audiencia ideal, logrando resultados reales.</p>
                    <p class="mb-4">Nuestro objetivo es hacer que tu marca brille y crezca en el mundo digital. Trabajamos con un enfoque personalizado para cada cliente, asegurando que cada estrategia se alinee perfectamente con sus objetivos y valores.</p>
                    <h3 class="text-xl font-bold mb-2">Nuestros Valores</h3>
                    <ul class="list-disc pl-5 mb-4">
                        <li>Innovación constante</li>
                        <li>Compromiso con los resultados</li>
                        <li>Transparencia en la comunicación</li>
                        <li>Adaptabilidad a las nuevas tendencias</li>
                    </ul>
                    <button class="close-modal bg-primary text-custom py-2 px-4 rounded-full hover:bg-secondary transition-colors">Cerrar</button>
                </div>
            `;
            modalContainer.innerHTML = modalContent;
            modalContainer.classList.remove('hidden');

            modalContainer.querySelector('.close-modal').addEventListener('click', () => {
                modalContainer.classList.add('hidden');
            });
        });
    }


    // Clients data
    const clients = [
        { name: 'Cliente 1', logo: 'img/florencio-logo.png' },
        { name: 'Cliente 2', logo: 'img/alexis-logo.png' },
        { name: 'Cliente 3', logo: 'img/fashion-logo.png' },
        { name: 'Cliente 4', logo: 'img/market-logo.png' },
    ];

    // Render clients slider
    const clientsSlider = document.getElementById('clientsSlider');
    if (clientsSlider) {
        clientsSlider.innerHTML = `
            <div class="overflow-hidden relative">
                <div class="flex animate-slide">
                    ${clients.map(client => `
                        <div class="flex-shrink-0 w-1/4 p-4">
                            <img src="${client.logo}" alt="${client.name}" class="w-full h-auto object-contain">
                        </div>
                    `).join('')}
                    ${clients.map(client => `
                        <div class="flex-shrink-0 w-1/4 p-4">
                            <img src="${client.logo}" alt="${client.name}" class="w-full h-auto object-contain">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Reviews data
    const reviews = [
        { name: 'Juan Pérez', rating: 5, text: 'Excelente servicio, superaron mis expectativas.', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { name: 'María García', rating: 4, text: 'Muy profesionales y atentos a los detalles.', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: 'Carlos Rodríguez', rating: 5, text: 'Lograron aumentar significativamente nuestras ventas en línea.', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { name: 'Ana Martínez', rating: 4, text: 'Gran equipo, siempre dispuestos a ayudar.', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    ];

    // Render reviews slider
    const reviewsSlider = document.getElementById('reviewsSlider');
    if (reviewsSlider) {
        reviewsSlider.innerHTML = `
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    ${reviews.map(review => `
                        <div class="swiper-slide">
                            <div class="bg-white rounded-lg shadow-lg p-6">
                                <div class="flex items-center mb-4">
                                    <img src="${review.image}" alt="${review.name}" class="w-12 h-12 rounded-full mr-4">
                                    <div>
                                        <p class="font-bold">${review.name}</p>
                                        <div class="text-yellow-400">
                                            ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-700">"${review.text}"</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        `;

        new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
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

    // Render Instagram Reels
    const reelsContainer = document.getElementById('reelsContainer');
    if (reelsContainer) {
        reelsContainer.innerHTML = `
            <div class="flex overflow-x-auto space-x-4 pb-4">
                <iframe src="https://www.instagram.com/reel/CsZpGFcAhHt/embed" class="w-[320px] h-[570px]" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                <iframe src="https://www.instagram.com/reel/CtFFElFAq66/embed" class="w-[320px] h-[570px]" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                <iframe src="https://www.instagram.com/reel/Cs2aG6yg8TQ/embed" class="w-[320px] h-[570px]" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
        `;
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

    // Modal functionality
    const modalContainer = document.createElement('div');
    modalContainer.className = 'fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center z-50 p-4';
    document.body.appendChild(modalContainer);

    document.querySelectorAll('.modal-trigger').forEach(button => {
        button.addEventListener('click', () => {
            const serviceName = button.getAttribute('data-service');
            const service = services.find(s => s.title === serviceName);
            if (service) {
                const modalContent = `
                    <div class="bg-custom p-6 rounded-lg w-full max-w-4xl mx-auto max-h-[90vh] overflow-y-auto">
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
            const message = encodeURIComponent('Hola, me gustaría suscribirme al boletín informativo de Vibrando Alto.');
            window.open(`https://wa.me/5493815519630?text=${message}`, '_blank');
        });
    }

    initTopBanner();

    console.log("Script loaded successfully!");
});

console.log("Script parsed without errors.");