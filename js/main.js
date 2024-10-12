document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

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

    // Adjust padding-top of the first section to account for fixed header
    const fixedHeader = document.querySelector('.fixed-header');
    const firstSection = document.querySelector('main > section:first-child');
    
    function adjustFirstSectionPadding() {
        const headerHeight = fixedHeader.offsetHeight;
        firstSection.style.paddingTop = `${headerHeight + 20}px`; // 20px extra for spacing
    }

    window.addEventListener('resize', adjustFirstSectionPadding);
    adjustFirstSectionPadding();

    // Services data
    const services = [
        { icon: 'fa-globe', title: { es: 'SEO', en: 'SEO' }, 
          description: { 
              es: 'Impulsamos el crecimiento de tu negocio en canales orgánicos a través de estrategias de posicionamiento web.',
              en: 'We boost your business growth in organic channels through web positioning strategies.'
          }
        },
        { icon: 'fa-bullhorn', title: { es: 'Redes Sociales', en: 'Social Media' },
          description: { 
              es: 'Activamos y gestionamos tu presencia online en las redes sociales más importantes del momento.',
              en: 'We activate and manage your online presence on the most important social networks of the moment.'
          }
        },
        { icon: 'fa-laptop-code', title: { es: 'Diseño y Desarrollo Web', en: 'Web Design and Development' },
          description: { 
              es: 'Nos encargamos del diseño de tu sitio web o aplicación abordando todas las necesidades de tu empresa.',
              en: 'We take care of designing your website or application, addressing all your company\'s needs.'
          }
        },
        { icon: 'fa-comments', title: { es: 'Setters', en: 'Setters' },
          description: { 
              es: 'Identifica cuentas de alto potencial y optimiza la búsqueda de clientes calificados.',
              en: 'Identify high-potential accounts and optimize the search for qualified clients.'
          }
        },
        { icon: 'fa-bolt', title: { es: 'Google ADS', en: 'Google ADS' },
          description: { 
              es: 'Desarrollamos campañas de búsqueda, display, remarketing, discovery y performance max.',
              en: 'We develop search, display, remarketing, discovery, and performance max campaigns.'
          }
        },
        { icon: 'fa-robot', title: { es: 'Crecimiento con IA', en: 'AI-Powered Growth' },
          description: { 
              es: 'Sistematización de crecimiento exponencial que mejorará la imagen de tu perfil.',
              en: 'Systematization of exponential growth that will improve your profile\'s image.'
          }
        },
    ];

    // Render services
    function renderServices(lang) {
        const servicesGrid = document.getElementById('servicesGrid');
        servicesGrid.innerHTML = ''; // Clear existing content
        services.forEach((service, index) => {
            const serviceElement = document.createElement('div');
            serviceElement.className = 'bg-primary p-6 rounded-lg text-center';
            serviceElement.setAttribute('data-aos', 'fade-up');
            serviceElement.setAttribute('data-aos-delay', (index * 100).toString());
            serviceElement.innerHTML = `
                <i class="fas ${service.icon} text-4xl mb-4"></i>
                <h3 class="text-xl font-bold mb-2">${service.title[lang]}</h3>
                <p class="mb-4">${service.description[lang]}</p>
                <button class="bg-custom text-primary py-2 px-4 rounded-full hover:bg-accent hover:text-custom transition-colors">
                    ${translations[lang].descubreMas}
                </button>
            `;
            servicesGrid.appendChild(serviceElement);
        });
    }

    // Clients data
    const clients = [
        { name: 'AG ALEXIS GORGONEA PELUQUERIA CANINA', style: 'font-bold' },
        { name: 'MARKET', style: 'text-blue-600 font-bold' },
        { name: 'Florencio Soto', style: 'font-serif' },
        { name: 'FASHION', style: 'text-pink-400 uppercase' },
    ];

    // Render clients
    function renderClients() {
        const clientsGrid = document.getElementById('clientsGrid');
        clientsGrid.innerHTML = ''; // Clear existing content
        clients.forEach((client, index) => {
            const clientElement = document.createElement('div');
            clientElement.className = `bg-custom text-primary p-4 rounded-lg flex items-center justify-center h-24 ${client.style}`;
            clientElement.setAttribute('data-aos', 'fade-up');
            clientElement.setAttribute('data-aos-delay', (index * 100).toString());
            clientElement.textContent = client.name;
            clientsGrid.appendChild(clientElement);
        });
    }

    // Team data
    const team = [
        { name: 'VALENTINA TERAN', role: { es: 'CEO Y EDITORA', en: 'CEO AND EDITOR' } },
        { name: 'MARIANA MÓNACO TORRENTE', role: { es: 'CEO Y COMMUNITY MANAGER', en: 'CEO AND COMMUNITY MANAGER' } },
        { name: 'CANDELA CIUTATT', role: { es: 'CEO Y CLOSER', en: 'CEO AND CLOSER' } },
    ];

    // Render team
    function renderTeam(lang) {
        const teamGrid = document.getElementById('teamGrid');
        teamGrid.innerHTML = ''; // Clear existing content
        team.forEach((member, index) => {
            const memberElement = document.createElement('div');
            memberElement.className = 'text-center';
            memberElement.setAttribute('data-aos', 'fade-up');
            memberElement.setAttribute('data-aos-delay', (index * 100).toString());
            memberElement.innerHTML = `
                <div class="w-32 h-32 mx-auto mb-4 gradient-primary rounded-lg flex items-center justify-center">
                    <img src="/placeholder.svg" alt="${member.name}" width="96" height="96" class="rounded-lg">
                </div>
                <h3 class="font-bold">${member.name}</h3>
                <p>${member.role[lang]}</p>
            `;
            teamGrid.appendChild(memberElement);
        });
    }

    // Reasons data
    const reasons = [
        { icon: 'fa-comments', 
          title: { es: 'Interpretamos las necesidades', en: 'We interpret needs' },
          description: { 
              es: 'Interpretamos las necesidades reales de cada cliente, aún cuando le resulte complejo explicarlas.',
              en: 'We interpret the real needs of each client, even when it\'s complex for them to explain.'
          }
        },
        { icon: 'fa-lightbulb', 
          title: { es: 'Planificamos estrategias', en: 'We plan strategies' },
          description: { 
              es: 'Planificamos estrategias de marketing digital que le permitirán a tu empresa destacarse por frente a la competencia.',
              en: 'We plan digital marketing strategies that will allow your company to stand out from the competition.'
          }
        },
        { icon: 'fa-dollar-sign', 
          title: { es: 'Cuidamos tu presupuesto', en: 'We take care of your budget' },
          description: { 
              es: 'Cuidamos tu presupuesto, y lo empleamos para acciones de publicidad online que generen resultados concretos de negocio.',
              en: 'We take care of your budget and use it for online advertising actions that generate concrete business results.'
          }
        },
        { icon: 'fa-chart-bar', 
          title: { es: 'Generamos reportes claros', en: 'We generate clear reports' },
          description: { 
              es: 'Mediante datos de Google Analytics, generamos reportes claros que se envían al cliente periódicamente, brindando información precisa y transparente sobre cada etapa del proyecto.',
              en: 'Using Google Analytics data, we generate clear reports that are sent to the client periodically, providing accurate and transparent information about each stage of the project.'
          }
        },
        { icon: 'fa-users', 
          title: { es: 'Soluciones integrales', en: 'Comprehensive solutions' },
          description: { 
              es: 'Brindamos soluciones integrales, contamos con especialistas en cada una de las áreas del marketing digital y del inbound marketing.',
              en: 'We provide comprehensive solutions, with specialists in each area of digital marketing and inbound marketing.'
          }
        },
    ];

    // Render reasons
    function renderReasons(lang) {
        const reasonsGrid = document.getElementById('reasonsGrid');
        reason
sGrid.innerHTML = ''; // Clear existing content
        reasons.forEach((reason, index) => {
            const reasonElement = document.createElement('div');
            reasonElement.className = 'flex items-start space-x-4';
            reasonElement.setAttribute('data-aos', 'fade-up');
            reasonElement.setAttribute('data-aos-delay', (index * 100).toString());
            reasonElement.innerHTML = `
                <i class="fas ${reason.icon} text-3xl text-primary"></i>
                <div>
                    <h3 class="text-xl font-bold mb-2">${reason.title[lang]}</h3>
                    <p>${reason.description[lang]}</p>
                </div>
            `;
            reasonsGrid.appendChild(reasonElement);
        });
    }

    // Agency Features
    const agencyFeatures = [
        { icon: 'fa-globe', 
          title: { es: 'Global', en: 'Global' }, 
          description: { 
              es: 'Somos una agencia de marketing que trabajamos con empresas de diversos países como Argentina, Uruguay, Chile, Paraguay, México, España y Estados Unidos.',
              en: 'We are a marketing agency that works with companies from various countries such as Argentina, Uruguay, Chile, Paraguay, Mexico, Spain, and the United States.'
          }
        },
        { icon: 'fa-laptop', 
          title: { es: 'Boutique', en: 'Boutique' }, 
          description: { 
              es: 'Somos una agencia 100% remota. Estamos actualizados con las nuevas tendencias globales y contamos con un equipo de expertos alrededor del mundo.',
              en: 'We are a 100% remote agency. We are updated with new global trends and have a team of experts around the world.'
          }
        },
        { icon: 'fa-star', 
          title: { es: '100% Remota', en: '100% Remote' }, 
          description: { 
              es: 'Brindamos un servicio personalizado para cada cliente. Como agencia de marketing digital trabajamos enfocados en lograr resultados de negocio.',
              en: 'We provide a personalized service for each client. As a digital marketing agency, we work focused on achieving business results.'
          }
        },
    ];

    // Render agency features
    function renderAgencyFeatures(lang) {
        const agencyFeaturesGrid = document.getElementById('agencyFeaturesGrid');
        agencyFeaturesGrid.innerHTML = ''; // Clear existing content
        agencyFeatures.forEach((feature, index) => {
            const featureElement = document.createElement('div');
            featureElement.className = 'bg-custom bg-opacity-50 p-6 rounded-lg text-center';
            featureElement.setAttribute('data-aos', 'fade-up');
            featureElement.setAttribute('data-aos-delay', (index * 100).toString());
            featureElement.innerHTML = `
                <i class="fas ${feature.icon} text-4xl mb-4 text-accent"></i>
                <h3 class="text-xl font-bold mb-2">${feature.title[lang]}</h3>
                <p>${feature.description[lang]}</p>
            `;
            agencyFeaturesGrid.appendChild(featureElement);
        });
    }

    // FAQ data
    const faqs = [
        { question: { 
            es: '¿Qué es y cómo funciona el Marketing Digital?',
            en: 'What is Digital Marketing and how does it work?'
          },
          answer: { 
            es: 'El Marketing Digital es el conjunto de estrategias y técnicas que se utilizan para promocionar productos o servicios a través de medios digitales. Funciona mediante la creación de contenido relevante, la optimización para motores de búsqueda, la publicidad en redes sociales, el email marketing, entre otras tácticas.',
            en: 'Digital Marketing is the set of strategies and techniques used to promote products or services through digital media. It works through the creation of relevant content, search engine optimization, social media advertising, email marketing, among other tactics.'
          }
        },
        { question: { 
            es: '¿Para qué sirve el Marketing Digital?',
            en: 'What is Digital Marketing used for?'
          },
          answer: { 
            es: 'El Marketing Digital sirve para aumentar la visibilidad de una marca en línea, atraer más tráfico a un sitio web, generar leads, convertir clientes potenciales en compradores, y fidelizar a los clientes existentes. También permite medir y analizar el rendimiento de las campañas en tiempo real.',
            en: 'Digital Marketing is used to increase a brand\'s online visibility, attract more traffic to a website, generate leads, convert potential customers into buyers, and retain existing customers. It also allows measuring and analyzing campaign performance in real-time.'
          }
        },
        { question: { 
            es: '¿Qué elementos componen al Marketing Digital?',
            en: 'What elements make up Digital Marketing?'
          },
          answer: { 
            es: 'Los elementos principales del Marketing Digital incluyen: SEO, SEM, Marketing de Contenidos, Marketing en Redes Sociales, Email Marketing, Marketing de Afiliados, Publicidad Display, y Analítica Web.',
            en: 'The main elements of Digital Marketing include: SEO, SEM, Content Marketing, Social Media Marketing, Email Marketing, Affiliate Marketing, Display Advertising, and Web Analytics.'
          }
        },
        { question: { 
            es: '¿Cómo funciona una Agencia de Marketing?',
            en: 'How does a Marketing Agency work?'
          },
          answer: { 
            es: 'Una Agencia de Marketing funciona como un equipo externo que se encarga de diseñar, implementar y gestionar estrategias de marketing para sus clientes. Esto incluye la planificación de campañas, creación de contenido, gestión de redes sociales, análisis de datos y optimización continua de las estrategias.',
            en: 'A Marketing Agency functions as an external team that designs, implements, and manages marketing strategies for its clients. This includes campaign planning, content creation, social media management, data analysis, and continuous optimization of strategies.'
          }
        },
        { question: { 
            es: '¿Cómo está conformado el equipo de una agencia de marketing?',
            en: 'How is a marketing agency team composed?'
          },
          answer: { 
            es: 'El equipo de una agencia de marketing suele estar compuesto por especialistas en diferentes áreas como estrategia digital, diseño gráfico, desarrollo web, SEO, SEM, gestión de redes sociales, creación de contenido, análisis de datos, entre otros.',
            en: 'A marketing agency team is usually composed of specialists in different areas such as digital strategy, graphic design, web development, SEO, SEM, social media management, content creation, data analysis, among others.'
          }
        },
    ];

    // Render FAQs
    function renderFAQs(lang) {
        const faqContainer = document.getElementById('faqContainer');
        faqContainer.innerHTML = ''; // Clear existing content
        faqs.forEach((faq, index) => {
            const faqElement = document.createElement('div');
            faqElement.className = 'border-b border-gray-700 pb-4';
            faqElement.setAttribute('data-aos', 'fade-up');
            faqElement.setAttribute('data-aos-delay', (index * 100).toString());
            faqElement.innerHTML = `
                <button class="flex justify-between items-center w-full text-left font-bold mb-2">
                    ${faq.question[lang]}
                    <i class="fas fa-chevron-down transform transition-transform duration-200"></i>
                </button>
                <p class="hidden">${faq.answer[lang]}</p>
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
        const offset = -currentIndex * 100;
        slideTrack.style.transform = `translateX(${offset}%)`;
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Add data-translate attributes to elements
    const translatableElements = {
        'inicio': document.querySelector('nav a[href="#inicio"]'),
        'servicios': document.querySelector('nav a[href="#servicios"]'),
        'nosotros': document.querySelector('nav a[href="#nosotros"]'),
        'clientes': document.querySelector('nav a[href="#clientes"]'),
        'contacto': document.querySelector('nav a[href="#contacto"]'),
        'agenciaMarketingDigital': document.querySelector('#inicio h1'),
        'preparateParaElFuturo': document.querySelector('#inicio p'),
        'reservarAsesoria': document.querySelector('#btnAsesoria'),
        'masInformacion': document.querySelector('#btnInfo'),
        'nuestrosServicios': document.querySelector('#servicios h2'),
        'certificaciones': document.querySelector('section:nth-of-type(3) h2'),
        'somosAgencia': document.querySelector('section:nth-of-type(4) h2'),
        'porQueElegirnos': document.querySelector('section:nth-of-type(5) h2'),
        'clientesCreenEnNosotros': document.querySelector('#clientes h2'),
        'nuestroEquipo': document.querySelector('section:nth-of-type(7) h2'),
        'agendaAsesoria': document.querySelector('#contacto h2'),
        'descubreComoImpulsar': document.querySelector('#contacto p'),
        'preguntasFrecuentes': document.querySelector('section:nth-of-type(9) h2'),
    };

    Object.entries(translatableElements).forEach(([key, element]) => {
        if (element) {
            element.setAttribute('data-translate', key);
        }
    });

    // Initialize language
    updateLanguage(document.documentElement.lang);

    // Update dynamic content when language changes
    function updateDynamicContent(lang) {
        renderServices(lang);
        renderClients();
        renderTeam(lang);
        renderReasons(lang);
        renderAgencyFeatures(lang);
        renderFAQs(lang);
    }

    // Add updateDynamicContent to the updateLanguage function in translations.js
    window.updateDynamicContent = updateDynamicContent;
});