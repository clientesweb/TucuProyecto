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

    // Banner video (Automatic top banner)
    const bannerSection = document.querySelector('#banner');
    if (bannerSection) {
        bannerSection.innerHTML = `
            <div class="relative w-full h-screen">
                <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover">
                    <source src="img/vibrando1.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `;
    }

    // Services data (including new services)
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
        { 
            icon: 'fa-pen', 
            title: 'Guiones',
            description: 'Es un esquema que organiza el contenido de un video corto, con introducción, mensaje clave y llamado a la acción, para captar la atención en redes sociales.',
            modalContent: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Nuestro servicio de Guiones incluye:</h3>
                        <ul class="list-disc pl-5">
                            <li>Desarrollo de esquemas de contenido</li>
                            <li>Creación de introducciones atractivas</li>
                            <li>Formulación de mensajes clave</li>
                            <li>Diseño de llamados a la acción efectivos</li>
                            <li>Optimización para redes sociales</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" alt="Guiones" class="w-full h-auto rounded-lg">
                    </div>
                </div>
            `
        },
        { 
            icon: 'fa-microphone', 
            title: 'Creación de podcast',
            description: 'Unimos cámaras, tarjetas de audio de distintas cámaras y hacemos la edición para que tu podcast sea llamativo y crees un canal con una audiencia sólida.',
            modalContent: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Nuestro servicio de Creación de podcast incluye:</h3>
                        <ul class="list-disc pl-5">
                            <li>Configuración técnica de equipos</li>
                            <li>Edición profesional de audio y video</li>
                            <li>Diseño de la identidad visual del podcast</li>
                            <li>Estrategias para crecer la audiencia</li>
                            <li>Distribución en plataformas de podcasting</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Creación de podcast" class="w-full h-auto rounded-lg">
                    </div>
                </div>
            `
        },
        { 
            icon: 'fa-handshake', 
            title: 'Cerradores',
            description: 'Personas encargadas de cerrar las ventas potenciales que tiene nuestro cliente, sin gastar tiempo y mejorando su ROI y beneficio.',
            modalContent: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Nuestro servicio de Cerradores incluye:</h3>
                        <ul class="list-disc pl-5">
                            <li>Equipo de ventas especializado</li>
                            <li>Estrategias de cierre personalizadas</li>
                            <li>Seguimiento de leads calificados</li>
                            <li>Optimización del proceso de ventas</li>
                            <li>Informes detallados de conversión</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Cerradores" class="w-full h-auto rounded-lg">
                    </div>
                </div>
            `
        },
        { 
            icon: 'fa-chart-line', 
            title: 'Marketing de Contenidos',
            description: 'Desarrollamos campañas de búsqueda, display, remarketing, discovery y performance max. Lleva tu empresa a los primeros lugares de Google.',
            modalContent: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Nuestro servicio de Marketing de Contenidos incluye:</h3>
                        <ul class="list-disc pl-5">
                            <li>Estrategia de contenidos personalizada</li>
                            <li>Creación de contenido de valor</li>
                            <li>Optimización SEO de contenidos</li>
                            <li>Distribución en canales relevantes</li>
                            <li>Análisis de rendimiento y ajustes</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Marketing de Contenidos" class="w-full h-auto rounded-lg">
                    </div>
                </div>
            `
        },
        { 
            icon: 'fa-video', 
            title: 'Edición de video',
            description: 'Editamos videos profesionales que captan la esencia de tu marca y atraen a tu audiencia, ideales para redes sociales y campañas publicitarias.',
            modalContent: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Nuestro servicio de Edición de video incluye:</h3>
                        <ul class="list-disc pl-5">
                            <li>Edición profesional de video</li>
                            <li>Corrección de color y audio</li>
                            <li>Adición de efectos visuales y gráficos</li>
                            <li>Optimización para diferentes plataformas</li>
                            <li>Subtitulado y localización</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Edición de video" class="w-full h-auto rounded-lg">
                    </div>
                </div>
            `
        }
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
                    <div class="flex-shrink-0 w-1/4 p-4 transition-transform transform hover:scale-105">
                        <img src="${client.logo}" alt="${client.name}" class="w-full h-auto object-contain">
                    </div>
                `).join('')}
                ${clients.map(client => `
                    <div class="flex-shrink-0 w-1/4 p-4 transition-transform transform hover:scale-105">
                        <img src="${client.logo}" alt="${client.name}" class="w-full h-auto object-contain">
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Render reviews slider with a faster speed and smooth animation
const reviews = [
    { name: 'Juan Pérez', rating: 5, text: 'Excelente servicio, superaron mis expectativas.' },
    { name: 'María García', rating: 4, text: 'Muy profesionales y atentos a los detalles.' },
    { name: 'Carlos Rodríguez', rating: 5, text: 'Lograron aumentar significativamente nuestras ventas en línea.' },
    { name: 'Ana Martínez', rating: 4, text: 'Gran equipo, siempre dispuestos a ayudar.' },
    { name: 'Laura González', rating: 5, text: 'Excelente atención al cliente y resultados asombrosos.' },
    { name: 'Pedro López', rating: 5, text: 'Recomiendo 100%, son los mejores en el negocio.' },
];

const reviewsSlider = document.getElementById('reviewsSlider');
if (reviewsSlider) {
    reviewsSlider.innerHTML = `
        <div class="overflow-hidden relative">
            <div class="flex animate-slide">
                ${reviews.map(review => `
                    <div class="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4">
                        <div class="bg-white rounded-xl shadow-xl p-6 transition-all transform hover:scale-105">
                            <div class="flex items-center mb-4">
                                <div class="text-yellow-400">
                                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                                </div>
                                <span class="ml-2 text-gray-600">${review.rating}/5</span>
                            </div>
                            <p class="text-gray-700 mb-4">"${review.text}"</p>
                            <p class="font-bold text-lg">${review.name}</p>
                        </div>
                    </div>
                `).join('')}
                ${reviews.map(review => `
                    <div class="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4">
                        <div class="bg-white rounded-xl shadow-xl p-6 transition-all transform hover:scale-105">
                            <div class="flex items-center mb-4">
                                <div class="text-yellow-400">
                                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                                </div>
                                <span class="ml-2 text-gray-600">${review.rating}/5</span>
                            </div>
                            <p class="text-gray-700 mb-4">"${review.text}"</p>
                            <p class="font-bold text-lg">${review.name}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
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
            <div class="flex overflow-x-auto space-x-4 p-4">
                <iframe src="https://www.instagram.com/reel/DA4OIMXSGcg/embed" class="w-[320px] h-[570px]" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
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
            featureElement.className =
            'bg-custom bg-opacity-50 p-6 rounded-lg text-center hover-effect';
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
    modalContainer.className = 'fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center z-50';
    document.body.appendChild(modalContainer);

    document.querySelectorAll('.modal-trigger').forEach(button => {
        button.addEventListener('click', () => {
            const serviceName = button.getAttribute('data-service');
            const service = services.find(s => s.title === serviceName);
            if (service) {
                const modalContent = `
                    <div class="bg-custom p-6 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
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

    // Banner dinámico
const banners = [
    { text: "Potencia tu presencia digital con Vibrando Alto", bgColor: "bg-primary" },
    { text: "Estrategias personalizadas para tu éxito online", bgColor: "bg-secondary" },
    { text: "Impulsa tu negocio con nuestros servicios de marketing", bgColor: "bg-accent" }
];

const dynamicBanner = document.getElementById('dynamicBanner');

let currentBannerIndex = 0;

function updateBanner() {
    const currentBanner = banners[currentBannerIndex];
    dynamicBanner.textContent = currentBanner.text;
    dynamicBanner.className = `p-4 text-center text-white transition-colors duration-500 ${currentBanner.bgColor}`;
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
}

updateBanner();
setInterval(updateBanner, 5000); // Cambia cada 5 segundos

    // About Us modal
    const aboutUsButton = document.querySelector('#aboutUsButton');
    if (aboutUsButton) {
        aboutUsButton.addEventListener('click', () => {
            const modalContent = `
                <div class="bg-custom p-6 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                    <h2 class="text-2xl font-bold mb-4">Sobre Nosotros</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-xl font-bold mb-2">Nuestra Misión</h3>
                            <p>Potenciar el crecimiento de nuestros clientes a través de estrategias de marketing digital innovadoras y efectivas.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Nuestro Equipo</h3>
                            <p>Contamos con expertos en diversas áreas del marketing digital, desde SEO hasta producción de contenido multimedia.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Nuestro Enfoque</h3>
                            <p>Nos centramos en resultados medibles y en la construcción de relaciones a largo plazo con nuestros clientes.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Nuestros Valores</h3>
                            <ul class="list-disc pl-5">
                                <li>Innovación constante</li>
                                <li>Transparencia en la comunicación</li>
                                <li>Compromiso con la excelencia</li>
                                <li>Adaptabilidad a las necesidades del cliente</li>
                            </ul>
                        </div>
                    </div>
                    <button class="close-modal bg-primary text-custom py-2 px-4 rounded-full hover:bg-secondary transition-colors mt-4">Cerrar</button>
                </div>
            `;
            modalContainer.innerHTML = modalContent;
            modalContainer.classList.remove('hidden');

            modalContainer.querySelector('.close-modal').addEventListener('click', () => {
                modalContainer.classList.add('hidden');
            });
        });
    }

    console.log("Script loaded successfully!");
});

console.log("Script parsed without errors.");