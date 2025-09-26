document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA DE TRADUCCIÓN ---

    const translations = {
        es: {
            contact_tooltip: "Contactar por correo",
            hero_name: "Ignacio Eiguren",
            hero_role: "AI Engineer & Data Architect",
            hero_tagline: "⚡ Automatizando flujos de trabajo con IA y potenciando el crecimiento con soluciones basadas en datos.",
            hero_location: "Buenos Aires, Argentina",
            hero_cta: "Hablemos de tu proyecto",
            about_title: "Mi Pasión",
            about_text: "Mi pasión es facilitar la vida de personas y organizaciones a través de la Inteligencia Artificial y los Datos. ¿Cómo? Transformando datos crudos en estrategias y conocimientos accionables que impulsan decisiones inteligentes, y automatizando tareas humanas repetitivas con software de IA a medida.",
            expertise_title: "Áreas de Expertise",
            expertise_card1_title: "IA Generativa y Machine Learning",
            expertise_card1_text: "Desarrollo de modelos (LLMs, Deep Learning) y aplicaciones como Chatbots y software de IA con Langchain, OpenAI y Vector Databases para resolver desafíos de negocio.",
            expertise_card2_title: "Data Engineering",
            expertise_card2_text: "Construcción de pipelines de datos robustos, procesos ETL y soluciones de data warehousing. Garantizo datos limpios, fiables y accesibles con Python, SQL, Docker, Airflow y DBT.",
            expertise_card3_title: "Data Analysis & Visualization",
            expertise_card3_text: "Uso de técnicas analíticas avanzadas y herramientas como Tableau, Looker y Power BI para crear visualizaciones y dashboards que convierten datos en decisiones estratégicas.",
            expertise_card4_title: "Automatización de Flujos",
            expertise_card4_text: "Mi enfoque combina código e IA para hacer los procesos lo más eficientes posible, ahorrando tiempo y dinero a empresas y equipos a través de la automatización inteligente.",
            tech_title: "Top Tech Stack",
            experience_title: "Experiencia Profesional",
            exp1_role: "AI Engineer",
            exp1_company: "Aureum Technologies",
            exp1_desc: "Diseño y despliegue de agentes de IA generativa para automatizar tareas complejas y mejorar procesos de negocio.",
            exp1_date: "2024 - Presente",
            exp2_role: "Software Engineer: Data Scientist",
            exp2_company: "HBX Group",
            exp2_desc: "Rol híbrido Data Engineer/Scientist, desarrollando procesos ETL en Snowflake y modelos de Machine Learning.",
            exp2_date: "2023 - 2024",
            exp3_role: "Software Engineer: Data Analyst",
            exp3_company: "Rappi",
            exp3_desc: "Desarrollo de soluciones de datos de extremo a extremo, desde la generación hasta la visualización y modelado.",
            exp3_date: "2021 - 2023",
            exp4_role: "Data Analyst",
            exp4_company: "Think Thanks",
            exp4_desc: "Extracción, transformación y análisis de datos para presentar hallazgos en dashboards interactivos.",
            exp4_date: "2020 - 2021",
            contact_title: "¿Listo para innovar?",
            contact_text: "Exploremos juntos cómo podemos impulsar el éxito de tu organización con soluciones de datos y automatización inteligente. Contáctame y empecemos a construir el futuro.",
            footer_text: "© 2024 Ignacio Eiguren. Diseñado para la nueva era de la IA."
        },
        en: {
            contact_tooltip: "Contact by email",
            hero_name: "Ignacio Eiguren",
            hero_role: "AI Engineer & Data Architect",
            hero_tagline: "⚡ Automating workflows using AI & boosting growth with Data-driven solutions.",
            hero_location: "Buenos Aires, Argentina",
            hero_cta: "Let's talk about your project",
            about_title: "My Passion",
            about_text: "Making life easier for people and organizations with Artificial Intelligence & Data is my passion. How? Turning raw data into actionable strategies & insights that boost data-driven decisions, and automating repetitive human tasks with custom AI software.",
            expertise_title: "Areas of Expertise",
            expertise_card1_title: "Generative AI & Machine Learning",
            expertise_card1_text: "Developing models (LLMs, Deep Learning) and applications like Chatbots & AI software using Langchain, OpenAI, and Vector Databases to solve business challenges.",
            expertise_card2_title: "Data Engineering",
            expertise_card2_text: "Building robust data pipelines, ETL processes, and data warehousing solutions. Ensuring data is clean, reliable, and accessible using Python, SQL, Docker, Airflow, and DBT.",
            expertise_card3_title: "Data Analysis & Visualization",
            expertise_card3_text: "Leveraging advanced analytical techniques and tools like Tableau, Looker, and Power BI to create insightful visualizations and dashboards that turn data into strategic decisions.",
            expertise_card4_title: "Workflow Automation",
            expertise_card4_text: "My approach combines code and AI to make processes as efficient as possible, saving time and money for companies and teams through intelligent automation.",
            tech_title: "Top Tech Stack",
            experience_title: "Professional Experience",
            exp1_role: "AI Engineer",
            exp1_company: "Aureum Technologies",
            exp1_desc: "Designing and deploying generative AI agents to automate complex tasks and enhance business processes.",
            exp1_date: "2024 - Present",
            exp2_role: "Software Engineer: Data Scientist",
            exp2_company: "HBX Group",
            exp2_desc: "Hybrid Data Engineer/Scientist role, developing ETL processes in Snowflake and Machine Learning models.",
            exp2_date: "2023 - 2024",
            exp3_role: "Software Engineer: Data Analyst",
            exp3_company: "Rappi",
            exp3_desc: "Developing end-to-end data solutions, from generation to visualization and modeling.",
            exp3_date: "2021 - 2023",
            exp4_role: "Data Analyst",
            exp4_company: "Think Thanks",
            exp4_desc: "Extracting, transforming, and analyzing data to present findings in interactive dashboards.",
            exp4_date: "2020 - 2021",
            contact_title: "Ready to innovate?",
            contact_text: "Let's explore how we can drive your organization's success with data-driven solutions and intelligent automation. Reach out to me, and let's start building the future.",
            footer_text: "© 2024 Ignacio Eiguren. Designed for the new era of AI."
        }
    };

    const langEsBtn = document.getElementById('lang-es');
    const langEnBtn = document.getElementById('lang-en');

    const setLanguage = (lang) => {
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                // Para el tooltip del email, actualizamos el atributo 'title'
                if (element.tagName === 'A' && key === 'contact_tooltip') {
                    element.setAttribute('title', translations[lang][key]);
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Actualizar la clase activa en los botones
        if (lang === 'es') {
            langEsBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langEsBtn.classList.remove('active');
        }

        // Guardar la preferencia de idioma
        localStorage.setItem('language', lang);
    };

    langEsBtn.addEventListener('click', () => setLanguage('es'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));

    // Cargar el idioma guardado o usar español por defecto
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);


    // --- LÓGICA DE ANIMACIÓN DE SCROLL ---

    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
});
