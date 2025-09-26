document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA DE TRADUCCIÓN ---

    const translations = {
        es: {
            contact_tooltip: "Contactar por correo",
            hero_name: "Ignacio Eiguren",
            hero_role: "AI Engineer & Data Architect",
            // CAMBIO: Tagline más orientada a la acción y al beneficio directo.
            hero_tagline: "⚡ Convierto datos complejos en tu ventaja competitiva. Automatizo procesos para liberar el potencial de tu equipo.",
            hero_location: "Buenos Aires, Argentina",
            // CAMBIO: CTA más enérgico y colaborativo.
            hero_cta: "Impulsemos tu proyecto",
            // CAMBIO: Título más estratégico.
            about_title: "Tu Aliado Estratégico en Datos e IA",
            // CAMBIO: Texto más narrativo y centrado en el valor.
            about_text: "En un mundo inundado de datos, la verdadera ventaja no está en tenerlos, sino en saber qué hacer con ellos. Mi misión es ser ese puente: traduzco el potencial oculto en tus datos en crecimiento real y tangible para tu negocio, automatizando lo tedioso para que tu equipo pueda enfocarse en innovar.",
            expertise_title: "Áreas de Expertise",
            // CAMBIO: Títulos y textos de las tarjetas enfocados en la solución/beneficio.
            expertise_card1_title: "Soluciones de IA a Medida",
            expertise_card1_text: "Más allá de los chatbots. Creo agentes de IA que automatizan tareas complejas, optimizan flujos de trabajo y generan insights que antes eran imposibles, dándote una ventaja competitiva única.",
            expertise_card2_title: "Arquitectura de Datos Sólida",
            expertise_card2_text: "Transformo datos caóticos en un activo fiable y escalable. Construyo la infraestructura que tu empresa necesita para crecer sin límites, garantizando que cada decisión se base en información precisa.",
            expertise_card3_title: "Inteligencia Accionable",
            expertise_card3_text: "Los datos solo son útiles si cuentan una historia. Convierto números en visualizaciones claras y dashboards interactivos que revelan oportunidades, responden preguntas críticas y guían tu estrategia.",
            expertise_card4_title: "Eficiencia y Escalabilidad",
            expertise_card4_text: "Libero a tu equipo de tareas repetitivas para que puedan centrarse en lo que realmente importa. Diseño sistemas de automatización que no solo ahorran tiempo y dinero, sino que escalan con tu negocio.",
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
            // CAMBIO: Título y texto final más inspiradores y con un llamado a la acción más fuerte.
            contact_title: "El Futuro es Ahora. ¿Lo Construimos Juntos?",
            contact_text: "Cada día que pasa es una oportunidad perdida para que tus datos trabajen para ti. Si estás listo para dejar de reaccionar y empezar a anticipar, hablemos. Juntos podemos diseñar la solución que tu negocio necesita.",
            footer_text: "© 2024 Ignacio Eiguren. Diseñado para la nueva era de la IA."
        },
        en: {
            contact_tooltip: "Contact by email",
            hero_name: "Ignacio Eiguren",
            hero_role: "AI Engineer & Data Architect",
            // CAMBIO: Tagline más orientada a la acción y al beneficio directo.
            hero_tagline: "⚡ I turn complex data into your competitive edge. I automate processes to unlock your team's potential.",
            hero_location: "Buenos Aires, Argentina",
            // CAMBIO: CTA más enérgico y colaborativo.
            hero_cta: "Let's boost your project",
            // CAMBIO: Título más estratégico.
            about_title: "Your Strategic Partner in Data & AI",
            // CAMBIO: Texto más narrativo y centrado en el valor.
            about_text: "In a world flooded with data, the real advantage isn't having it, but knowing what to do with it. My mission is to be that bridge: I translate the hidden potential in your data into real, tangible growth for your business, automating the tedious so your team can focus on innovation.",
            expertise_title: "Areas of Expertise",
            // CAMBIO: Títulos y textos de las tarjetas enfocados en la solución/beneficio.
            expertise_card1_title: "Custom AI Solutions",
            expertise_card1_text: "Beyond chatbots. I create intelligent AI agents that automate complex tasks, optimize workflows, and generate previously impossible insights, giving you a unique competitive advantage.",
            expertise_card2_title: "Solid Data Architecture",
            expertise_card2_text: "I transform chaotic data into a reliable, scalable asset. I build the data infrastructure your company needs to grow without limits, ensuring every decision is based on accurate information.",
            expertise_card3_title: "Actionable Intelligence",
            expertise_card3_text: "Data is only useful if it tells a story. I turn numbers into clear visualizations and interactive dashboards that reveal opportunities, answer critical questions, and guide your business strategy.",
            expertise_card4_title: "Efficiency & Scalability",
            expertise_card4
