document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA DE TRADUCCIÓN ---

    const translations = {
        es: {
            contact_tooltip: "Contactar por correo",
            hero_name: "Ignacio Eiguren",
            hero_role: "AI Engineer & Data Architect",
            hero_tagline: "⚡ Convierto datos complejos en tu ventaja competitiva. Automatizo procesos para liberar el potencial de tu equipo.",
            hero_location: "Buenos Aires, Argentina",
            hero_cta: "Impulsemos tu proyecto",
            about_title: "Tu Aliado Estratégico en Datos e IA",
            about_text: "En un mundo inundado de datos, la verdadera ventaja no está en tenerlos, sino en saber qué hacer con ellos. Mi misión es ser ese puente: traduzco el potencial oculto en tus datos en crecimiento real y tangible para tu negocio, automatizando lo tedioso para que tu equipo pueda enfocarse en innovar.",
            
            // CAMBIO: Tono más natural y profesional en la sección de Expertise.
            expertise_title: "Mi Enfoque: Soluciones Estratégicas",
            
            expertise_card1_title: "Automatización y Eficiencia",
            expertise_card1_text: "Mi foco es crear sistemas inteligentes que se encargan del trabajo repetitivo. El objetivo es simple: liberar el tiempo de tu equipo para que puedan dedicarse a la innovación y a las tareas de alto impacto.",
            
            expertise_card2_title: "Datos Fiables, Decisiones Inteligentes",
            expertise_card2_text: "Construyo una base de datos centralizada y ordenada: una única fuente de verdad. Esto garantiza que cada decisión estratégica se apoye en información precisa y coherente, eliminando la incertidumbre.",

            expertise_card3_title: "Insights Accionables, no solo Métricas",
            expertise_card3_text: "Voy más allá de los reportes básicos. Mi trabajo es transformar datos crudos en insights claros que respondan a tus preguntas de negocio. A través de visualizaciones interactivas, identificamos patrones y oportunidades.",

            expertise_card4_title: "Procesos Fluidos y Escalables",
            expertise_card4_text: "Diseño flujos de trabajo que conectan tus herramientas y sistemas. El resultado es una operación más ágil, con menos errores manuales y preparada para crecer sin que los procesos se conviertan en un obstáculo.",

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
            contact_title: "El Futuro es Ahora. ¿Lo Construimos Juntos?",
            contact_text: "Cada día que pasa es una oportunidad perdida para que tus datos trabajen para ti. Si estás listo para dejar de reaccionar y empezar a anticipar, hablemos. Juntos podemos diseñar la solución que tu negocio necesita.",
            footer_text: "© 2024 Ignacio Eiguren. Diseñado para la nueva era de la IA."
        },
        en: {
            contact_tooltip: "Contact by email",
            hero_name: "Ignacio Eiguren",
            hero_role: "AI Engineer & Data Architect",
            hero_tagline: "⚡ I turn complex data into your competitive edge. I automate processes to unlock your team's potential.",
            hero_location: "Buenos Aires, Argentina",
            hero_cta: "Let's boost your project",
            about_title: "Your Strategic Partner in Data & AI",
            about_text: "In a world flooded with data, the real advantage isn't having it, but knowing what to do with it. My mission is to be that bridge: I translate the hidden potential in your data into real, tangible growth for your business, automating the tedious so your team can focus on innovation.",

            // CHANGE: More natural and professional tone in the Expertise section.
            expertise_title: "My Approach: Strategic Solutions",

            expertise_card1_title: "Automation & Efficiency",
            expertise_card1_text: "My focus is on creating intelligent systems that handle repetitive work. The goal is simple: to free up your team's time so they can focus on innovation and high-impact tasks.",

            expertise_card2_title: "Reliable Data, Smart Decisions",
            expertise_card2_text: "I build a centralized and orderly data foundation: a single source of truth. This ensures that every strategic decision is backed by accurate and consistent information, eliminating uncertainty.",

            expertise_card3_title: "Actionable Insights, Not Just Metrics",
            expertise_card3_text: "I go beyond basic reports. My job is to transform raw data into clear insights that answer your business questions. Through interactive visualizations, we identify patterns and opportunities.",

            expertise_card4_title: "Fluid and Scalable Processes",
            expertise_card4_text: "I design workflows that connect your tools and systems. The result is a more agile operation, with fewer manual errors, ready to grow without processes becoming an obstacle.",

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
            contact_title: "The Future is Now. Shall We Build It Together?",
            contact_text: "Every day that goes by is a missed opportunity for your data to work for you. If you're ready to stop reacting and start anticipating, let's talk. Together, we can design the solution your business needs.",
            footer_text: "© 2024 Ignacio Eiguren. Designed for the new era of AI."
        }
    };

    // El resto del código JavaScript permanece igual...
    const langEsBtn = document.getElementById('lang-es');
    const langEnBtn = document.getElementById('lang-en');

    const setLanguage = (lang) => {
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'A' && key === 'contact_tooltip') {
                    element.setAttribute('title', translations[lang][key]);
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        
        if (lang === 'es') {
            langEsBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langEsBtn.classList.remove('active');
        }

        localStorage.setItem('language', lang);
    };

    langEsBtn.addEventListener('click', () => setLanguage('es'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));

    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);

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
