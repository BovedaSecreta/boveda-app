export const faq = [
	{
		question: '¿Qué necesito para inscribirme?',
		answer:
			'Primero, asegúrate de estar en condiciones de salud aptas para la práctica de ejercicio físico y esta disciplina de combate. Luego, simplemente llena el formulario en este enlace, y te contactaremos por WhatsApp para confirmar tu asistencia a los entrenamientos que elijas. Así, te guiaremos en el proceso de inscripción de clases. ¡Es fácil y rápido!'
	},
	{
		question: '¿Desde que edad puedo inscribirme?',
		answer:
			'La edad mínima es de 16 años con documento de autorización explícita de su tutor para la práctica de esta disciplina.'
	},
	{
		question: '¿Cómo me inscribo a una clase única?',
		answer:
			'Puedes inscribirte en el formulario que se encuentra al hacer click en el botón "Me quiero inscribir", como también contactarnos directamente a través del botón de Whatsapp.'
	},
	{
		question: '¿Qué necesito para entrenar?',
		answer:
			'Recomendamos ropa limpia, cómoda y ligera. La polera deberá contar con mangas (cortas o largas). Considera una polera extra para recambio. Se requiere calzado específico para entrenamiento distinto al de calle. Rodilleras, coderas y bucal son recomendadas pero no obligatorias.'
	},
	{
		question: '¿Tienen duchas en la Bóveda?',
		answer:
			'La Bóveda cuenta con baños y camarines operativos para hombres y mujeres, con todos los servicios higiénicos necesarios y duchas con agua caliente habilitadas todo el año. No incluye artículos de baño ni toallas.'
	},
	{
		question: '¿Qué pasa si llego tarde a un entrenamiento?',
		answer:
			'El límite para sumarte a un entrenamiento es de 15 minutos. Pasado ese tiempo te perderás parte esencial para el desarrollo correcto del resto del programa de la clase y pone en riesgo tu bienestar físico y el de tus compañeros.'
	},
	{
		question: '¿Qué pasa si no ocupo mis clases durante el mes que me inscribí?',
		answer:
			'Las clases tienen un (1) mes de validez a partir del día de tu inscripción, las perderás si no las ocupas según el plan que solicitaste.'
	},
	{
		question: '¿Puedo ir en bicicleta?',
		answer:
			'Si, la Bóveda cuenta con suficiente espacio para tu bici, sin embargo, es responsabilidad de sus propietarios y no nos hacemos responsables por pérdidas o deterioros de la misma.'
	},
	{
		question: '¿Tienen estacionamiento para autos o motos en la Bóveda?',
		answer:
			'No, la Bóveda ni la galería Nueva Copacabana cuentan con estacionamientos disponibles para vehículos motorizados.'
	}
];

export let coaches = [
    {
        status: true,
        name: 'Zatara',
        img: '/zatara.jpg',
        description:
            'Luchadora Chilena con más de 15 años de experiencia y diferentes reconocimientos y logros a nivel local e internacional.<br><br>El 2018 se presenta por primera vez en la Arena México, además de ser seleccionada para participar del Torneo “Mae Young Classic” de WWE y el Tryout Latinoamericano realizado en Chile por la misma empresa.  <br><br> <b>Ha trabajado para empresas como: </b>5 Luchas Clandestino, WWE`s Mae Young Classic Tournament, WWE Latin American try out, Dragonmania, Imperio Lucha Libre, Brazilian Wrestling Federation, Revolución Lucha Libre, entre otras.',
        igLink: 'https://www.instagram.com/zatara.cabrona/',
        profile: 'https://www.5luchas.cl/equipo/luchadores/zatara'
    },
    {
        status: false,
        name: 'Juan',
        img: 'https://res.cloudinary.com/dtj5xnlou/image/upload/v1669400279/JUAN-PROFESOR.jpg',
        description:
            'Preparador Físico de la Universidad Santo Tomás, debuta el 2017 como luchador bajo el alero de Guanchulo y Alejandro “XL” Saez como principales mentores. De estos últimos, toma las bases de su formación y visión de la lucha libre, siendo parte importante del círculo de trabajo más cerrado del “Yeyos Dojo”. La suma de sus conocimientos formativos sitúan a Juan como un sólido referente en la formación de luchadores profesionales capacitados para desenvolverse en la escena local e internacional.',
        work: '5 Luchas Clandestino, Chile Lucha Libre, Max Lucha Libre, Trash.',
        igLink: 'https://www.instagram.com/juancontreraspf/'
    },
    {
        status: false,
        name: 'Sara Phoenix',
        img: '/sara.avif',
        description:
            'Luchadora Chilena con más de 10 años de experiencia en la lucha libre. Alumna de Guanchulo y  pioneras en la evolución constante de la lucha libre femenina en Chile, abriendo el camino para las futuras generaciones femeninas en la industria nacional.',
        work: '5 Luchas Clandestino, Imperio Lucha Libre, Gladiadores, Trash',
        igLink: 'https://www.instagram.com/sara.phoenix.wrestler/'
    },
    {
        status: false,
        name: 'Alejandro Sáez',
        img: '/xl.avif',
        description:
            'Experimentado luchador con más de 15 años de trayectoria en la lucha libre nacional e internacional. Su vasta experiencia y conocimientos en la lucha libre lo convierten en un referente para las nuevas generaciones de luchadores y luchadoras.',
        work: '5 Luchas Clandestino, WWE, NOAH Prowrestling, Dragonmanía, Gladiadores, BWF, Trash, entre otras.',
    },
    {
        status: true,
        name: 'Owen Kampos',
        img: '/owen.webp',
        description:
            'Luchador profesional con más de 11 años de trayectoria en la lucha libre nacional. Su amplio conocimiento y experiencia lo han convertido en un referente clave para las nuevas generaciones de luchadores y luchadoras. <br><br><b>Ha trabajado para empresas como: </b>5 Luchas Clandestino, Xtreme Club, Revolución Lucha Libre, entre otras.',
        igLink: 'https://www.instagram.com/owenkampos/',
        profile: 'https://www.5luchas.cl/equipo/luchadores/owen'
    },
    {
        status: true,
        name: 'Mauri Parker',
        img: '/mauri.webp',
        description:
            'Exalumno del Yeyos Dojo y actual luchador consolidado en 5 Luchas Clandestino. Su disciplina y constancia lo han posicionado como un referente en los fundamentos de esta disciplina, mientras que su carisma inspira y motiva a quienes lo rodean.<br><br>  <b>Ha trabajado para empresas como: </b>5 Luchas Clandestino, Xtreme Club, entre otras.',
        igLink: 'https://www.instagram.com/mauriparker.wrestler/',
        profile: 'https://www.5luchas.cl/equipo/luchadores/mauri-parker'
    },
];

// Sumar un bloque Intermedio al día Sábado, 
// la distribución de bloques quedaría de la siguiente manera:
// Bloque Básico 10:00 a 11:30 hrs
// Bloque Intermedio 11:35 a 13:05 hrs
// Bloque Avanzado 13:30 a 15:00 hrs

export const horarios = [
    {
        bloque: 'Bloque Básico',
        profesor: 'Zatara, Owen y Mauri',
        horarios: [
            {
                dia: 'Lunes',
                hora: '18:00 a 19:30 hrs'
            },
            {
                dia: 'Miércoles',
                hora: '11:00 a 12:30 hrs'
            },
            {
                dia: 'Jueves',
                hora: '19:35 a 20:50 hrs'
            },
            {
                dia: 'Sábado',
                hora: '10:00 a 11:30 hrs'
            },
        ]
    },
    {
        bloque: 'Bloque Intermedio',
        profesor: 'Zatara, Owen y Mauri',
        horarios: [
            {
                dia: 'Martes',
                hora: '19:35 a 20:50 hrs'
            },
            {
                dia: 'Jueves',
                hora: '18:00 a 19:30 hrs'
            },
            {
                dia: 'Sábado',
                hora: '11:35 a 13:05 hrs'
            },
        ]
    },
    {
        bloque: 'Bloque Avanzado',
        profesor: 'Zatara, Owen y Mauri',
        horarios: [
            {
                dia: 'Lunes',
                hora: '19:35 a 20:50 hrs'
            },
            {
                dia: 'Martes',
                hora: '18:00 a 19:35 hrs'
            },
            {
                dia: 'Sábado',
                hora: '13:30 a 15:00 hrs'
            }
        ]
    },
    {
        bloque: 'Master Class',
        profesor: 'Zatara, Owen y Mauri',
        horarios: [
            {
                dia: 'Viernes',
                hora: '11:00 a 12:30 hrs'
            },
        ]
    },
];

export const blocks = [
    {
        title: 'Bloque Básico',
        content: '¡Este es tu lugar para comenzar o retomar tu camino en la lucha libre!<br><br>Aquí, te proporcionaremos las herramientas esenciales para formarte como luchador, con un enfoque en desarrollar tu condición física y dominar los fundamentos del deporte. <br><br>En este nivel, aprenderás ejercicios clave que fortalecerán tu cuerpo y te prepararán para controlar cada movimiento sobre el ring. <br><br><b>¡Es hora de dar el primer paso hacia tu grandeza!</b>',
        video: 'https://5lc-website-assets.pages.dev/boveda/bloque_basico.mp4'

    },
    {
        title: 'Bloque Intermedio',
        content: 'Si quieres pulir tus habilidades y reforzar tu destreza técnica, ¡el bloque intermedio es para ti! <br><br> Aquí, perfeccionarás lo básico y desarrollarás técnicas avanzadas para enfrentar desafíos más exigentes. <br><br> Te prepararás en un entorno competitivo que te llevará a dar lo mejor de ti. <br><br> <b>¡Es el momento de subir de nivel!</b>',
        video: 'https://5lc-website-assets.pages.dev/boveda/bloque_intermedio.mp4'
    },
    {
        title: 'Bloque Avanzado',
        content: 'El bloque avanzado es donde los prospectos de la Bóveda y los luchadores en competencia se encuentran para refinar sus habilidades y enfrentar desafíos mayores. <br><br>Aquí, potenciarás tu presencia en el ring, mejorarás tu flujo de combate, afinarás tu estrategia ofensiva y te prepararás para brillar en el entorno profesional. <br><br> <b>¡Es el momento de consolidar tu carrera como luchador!</b>',
        video: 'https://5lc-website-assets.pages.dev/boveda/bloque_avanzado.mp4'
    }
];