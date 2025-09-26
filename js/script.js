document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA DE TRADUCCIÓN ---

    const translations = {
        es: {
            contact_tooltip: "Contactar por correo",
            hero_name: "Ignacio Eiguren",
            hero_role: "AI Engineer | Especialista en Automatización y GenAI",
            hero_tagline: "⚡ Diseño e integro soluciones de IA a medida que automatizan tus procesos y potencian a tu equipo.",
            hero_location: "Buenos Aires, Argentina",
            hero_cta: "Impulsemos tu proyecto",
            
            // CAMBIO FINAL: Título y texto enfocados en la acción de construir y potenciar.
            about_title: "Ingeniería de IA para la Acción",
            about_text: "Mi especialidad es construir sistemas de automatización que potencian tus procesos existentes. Integro IA directamente en tus flujos de trabajo para aumentar la eficiencia, reducir la carga manual y acelerar tus resultados. Es ingeniería aplicada para un impacto inmediato.",
            
            expertise_title: "Mis Servicios: IA Aplicada a tu Negocio",
            expertise_card1_title: "Agentes de IA y Automatización Cognitiva",
            expertise_card1_text: "Creo 'trabajadores digitales' a medida. Agentes de IA que pueden leer correos, analizar documentos, completar formularios y ejecutar tareas complejas, operando 24/7 con precisión y sin descanso.",
            expertise_card2_title: "Integración de IA en Sistemas Existentes",
            expertise_card2_text: "No necesitas cambiar todo tu software. Me especializo en conectar el poder de los modelos de lenguaje (LLMs) con tus herramientas actuales (CRMs, ERPs, bases de datos), potenciando lo que ya tienes.",
            expertise_card3_title: "Optimización de Datos para IA",
            expertise_card3_text: "La mejor IA se alimenta de buenos datos. Me aseguro de que tu información esté limpia, estructurada y lista para ser utilizada por los modelos de IA, garantizando respuestas precisas y un rendimiento óptimo.",
            expertise_card4_title: "Consultoría y Estrategia de IA",
            expertise_card4_text: "Más allá del código, te ayudo a identificar las oportunidades de automatización con mayor retorno de inversión. Analizamos juntos tus flujos de trabajo para diseñar una hoja de ruta de IA que genere valor real y medible.",
            tech_title: "Top Tech Stack",
            experience_title: "Experiencia Profesional",
            exp1_role: "AI Engineer",
            exp1_company: "Aureum Technologies",
            exp1_desc: "Diseño y despliegue de agentes de IA generativa para automatizar tareas complejas y mejorar procesos de negocio.",
            exp1_date: "2024 - Presente",
            exp2_role: "Data Scientist",
            exp2_company: "HBX Group",
            exp2_desc: "Rol híbrido Data Engineer/Scientist, desarrollando procesos ETL en Snowflake y modelos de Machine Learning.",
            exp2_date: "2023 - 2024",
            exp3_role: "Data Analyst",
            exp3_company: "Rappi",
            exp3_desc: "Desarrollo de soluciones de datos de extremo a extremo, desde la generación hasta la visualización y modelado.",
            exp3_date: "2021 - 2023",
            exp4_role: "Data Analyst",
            exp4_company: "Think Thanks",
            exp4_desc: "Extracción, transformación y análisis de datos para presentar hallazgos en dashboards interactivos.",
            exp4_date: "2020 - 2021",
            contact_title: "Hablemos de tu Proyecto",
            contact_text: "Si lo que has leído resuena con los desafíos u oportunidades de tu empresa, el siguiente paso es una conversación. Podemos analizar tus objetivos y explorar de qué manera una solución de IA a medida puede ayudarte a alcanzarlos. Sin compromiso, solo ideas y estrategia.",
            footer_text: "© 2024 Ignacio Eiguren. Diseñado para la nueva era de la IA."
        },
        en: {
            contact_tooltip: "Contact by email",
            hero_name: "Ignacio Eiguren",
            hero_role: "AI Engineer | Automation & GenAI Specialist",
            hero_tagline: "⚡ I design and integrate custom AI solutions that automate your processes and empower your team.",
            hero_location: "Buenos Aires, Argentina",
            hero_cta: "Let's boost your project",

            // FINAL CHANGE: Title and text focused on the action of building and enhancing.
            about_title: "AI Engineering for Action",
            about_text: "My specialty is building automation systems that enhance your existing processes. I integrate AI directly into your workflows to increase efficiency, reduce manual workload, and accelerate your results. This is applied engineering for an immediate impact.",

            expertise_title: "My Services: AI Applied to Your Business",
            expertise_card1_title: "AI Agents & Cognitive Automation",
            expertise_card1_text: "I create custom 'digital workers.' AI agents that can read emails, analyze documents, fill out forms, and execute complex tasks, operating 24/7 with precision and without breaks.",
            expertise_card2_title: "AI Integration with Existing Systems",
            expertise_card2_text: "You don't need to replace all your software. I specialize in connecting the power of Large Language Models (LLMs) to your current tools (CRMs, ERPs, databases), enhancing what you already have.",
            expertise_card3_title: "Data Optimization for AI",
            expertise_card3_text: "The best AI is fueled by good data. I ensure your information is clean, structured, and ready to be used by AI models, guaranteeing accurate responses and optimal performance.",
            expertise_card4_title: "AI Consulting & Strategy",
            expertise_card4_text: "Beyond the code, I help you identify automation opportunities with the highest return on investment. Together, we analyze your workflows to design an AI roadmap that generates real, measurable value.",
            tech_title: "Top Tech Stack",
            experience_title: "Professional Experience",
            exp1_role: "AI Engineer",
            exp1_company: "Aureum Technologies",
            exp1_desc: "Designing and deploying generative AI agents to automate complex tasks and enhance business processes.",
            exp1_date: "2024 - Present",
            exp2_role: "Data Scientist",
            exp2_company: "HBX Group",
            exp2_desc: "Hybrid Data Engineer/Scientist role, developing ETL processes in Snowflake and Machine Learning models.",
            exp2_date: "2023 - 2024",
            exp3_role: "Data Analyst",
            exp3_company: "Rappi",
            exp3_desc: "Developing end-to-end data solutions, from generation to visualization and modeling.",
            exp3_date: "2021 - 2023",
            exp4_role: "Data Analyst",
            exp4_company: "Think Thanks",
            exp4_desc: "Extracting, transforming, and analyzing data to present findings in interactive dashboards.",
            exp4_date: "2020 - 2021",
            contact_title: "Let's Discuss Your Project",
            contact_text: "If what you've read resonates with your company's challenges or opportunities, the next step is a conversation. We can analyze your goals and explore how a custom AI solution can help you achieve them. No strings attached, just ideas and strategy.",
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
