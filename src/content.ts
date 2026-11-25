/** Todo el texto editable de la landing. Cambia aquí, no en los componentes. */

export const site = {
  name: 'Ecovermis',
  tagline: 'Biofertilizante orgánico',
  url: 'https://ecovermis.com',
  lang: 'es-MX',
  logo: {
    src: '/logo.png',
    alt: 'Ecovermis — Biofertilizante orgánico',
    mark: '/img/logo-mark.png',
  },
  whatsappUrl: 'https://wa.me/522211802191',
  whatsappDisplay: '221 180 2191',
  whatsappPrefill:
    'Hola Ecovermis, quiero información sobre el fertilizante orgánico o cotizar un taller.',
  seo: {
    title: 'Ecovermis | Fertilizante orgánico para tu tierra',
    description:
      'Fertilizante orgánico para suelo cansado, huerto y maceta. Un litro se mezcla en 30 de agua. Talleres para escuelas, ONG y empresas.',
    ogImage: '/og.png',
    socialShare:
      'Ecovermis. Fertilizante orgánico para la parcela, el huerto y la maceta. Un litro se mezcla en 30 litros de agua. Escríbenos para pedirlo o cotizar un taller.',
  },
} as const;

export const cta = {
  label: 'Escríbenos por WhatsApp',
} as const;

/** Headline activo: opción 1. Opciones 2 y 3 listas por si se cambia. */
export const headlineOptions = [
  'Tu tierra pide más fertilizante y te da menos',
  'Nutre la planta sin echarle otro saco de químico',
  'Para la parcela, el huerto y las plantas de tu casa',
] as const;

export const hero = {
  brand: site.name,
  headline: headlineOptions[0],
  subheadline:
    'Fertilizante orgánico concentrado para el campo y para la casa. Un litro se mezcla en 30 litros de agua. Si eres escuela, ONG o empresa, también armamos el taller.',
  scrollHint: 'Desliza para descubrir',
  image: {
    src: '/img/hero.jpg',
    alt: 'Plántulas con raíces en suelo vivo — fertilizante orgánico Ecovermis',
  },
  media: {
    src: '/img/producto.jpg',
    alt: 'Presentaciones de biofertilizante orgánico Ecovermis',
  },
} as const;

export const problema = {
  title: 'La tierra se ve más seca',
  paragraphs: [
    'Le echas fertilizante y, al poco tiempo, te pide más. Gastas más agua para que la planta responda. Y cosechas menos que antes.',
    'Eso se ve en una parcela de lechuga. También en un huerto de casa. El químico no se quita solo. Cada ciclo, la tierra lo exige otra vez.',
  ],
} as const;

export const beneficios = {
  intro:
    'No se trata de echarle otro producto encima. Se trata de que la tierra vuelva a trabajar y la planta agarre mejor.',
  items: [
    {
      title: 'Tu suelo deja de exigirte más químico',
      body: 'Está hecho para una tierra cansada, la que ya no rinde con la misma dosis de antes.',
      image: {
        src: '/img/beneficio-1.jpg',
        alt: 'Raíces blancas en tierra oscura — suelo vivo',
      },
    },
    {
      title: 'La planta enraíza mejor y se defiende más',
      body: 'No solo le sacas hoja un rato. Le das de dónde agarrarse y con qué responder.',
      image: {
        src: '/img/beneficio-2.jpg',
        alt: 'Plántula vigorosa con raíces sanas',
      },
    },
    {
      title: 'Te rinde',
      body: 'Es concentrado. Un litro se mezcla en 30 litros de agua. Alcanza para la parcela y también para la maceta.',
      image: {
        src: '/img/beneficio-3.jpg',
        alt: 'Aplicación del fertilizante en cultivo',
      },
    },
  ],
} as const;

export const pasos = {
  fertilizante: {
    title: 'Si pides el fertilizante',
    steps: [
      {
        title: 'Eliges la presentación',
        body: 'El atomizador de 500 ml ya viene diluido y se aplica directo. El concentrado (500 ml, 1 litro, 4 litros o 20 litros) se prepara.',
        image: {
          src: '/img/paso-1.jpg',
          alt: 'Presentaciones Ecovermis: atomizador y concentrados',
        },
      },
      {
        title: 'Mezclas si es concentrado',
        body: 'Mezclas 1 litro por cada 30 litros de agua. El de 500 ml concentrado rinde la mitad: 15 litros de agua.',
        image: {
          src: '/img/paso-2.jpg',
          alt: 'Mezcla del concentrado 1 litro por 30 de agua',
        },
      },
      {
        title: 'Lo aplicas según el momento',
        body: 'En la hoja, por aspersión, al preparar la tierra, en la germinación o en el enraizamiento.',
        image: {
          src: '/img/paso-3.jpg',
          alt: 'Aplicación foliar o al suelo del fertilizante',
        },
      },
    ],
  },
  taller: {
    title: 'Si pides un taller',
    steps: [
      { title: 'Teoría', body: 'Vemos la teoría, en corto.' },
      { title: 'Práctica', body: 'Lo hacemos en la práctica.' },
      { title: 'Cierre', body: 'Cerramos con un ejemplo o una actividad.' },
    ],
    note: 'El taller se cotiza. El precio cambia según el grupo, la escuela, el tiempo y los días.',
  },
} as const;

export const precios = {
  title: 'Presentaciones y precios',
  listo: {
    title: 'Listo para usar',
    items: [
      {
        name: 'Atomizador de 500 ml, ya diluido',
        price: '40 pesos',
        image: {
          src: '/img/producto-atomizador.jpg',
          alt: 'Atomizador Ecovermis de 500 ml listo para usar',
        },
      },
    ],
  },
  concentrado: {
    title: 'Concentrado',
    note: 'Se mezcla 1 litro por cada 30 litros de agua',
    items: [
      { name: '500 ml', price: '65 pesos' },
      { name: '1 litro', price: '120 pesos' },
      { name: '4 litros', price: '460 pesos' },
      { name: '20 litros', price: '2,200 pesos' },
    ],
    image: {
      src: '/img/producto.jpg',
      alt: 'Presentaciones de biofertilizante orgánico Ecovermis',
    },
    bottleImage: {
      src: '/img/producto-concentrado.jpg',
      alt: 'Botella de concentrado Ecovermis 1 litro con etiqueta',
    },
  },
  taller: {
    title: 'Taller',
    body: 'No tiene un precio fijo. Cambia según el número de niños, la escuela, el tiempo y los días.',
    note: 'A veces hay cuota de recuperación de 20 pesos por alumno. No incluye el material.',
  },
  midCtaNote:
    'Para pedir el fertilizante o cotizar el taller, usa el mismo botón de WhatsApp.',
} as const;

export const faq = {
  title: 'Preguntas frecuentes',
  items: [
    {
      q: '¿Lleva plástico? Me da desconfianza.',
      a: 'Sí: degradamos plástico y el carbono de eso entra al fertilizante. No es basura molida que le avientas a la planta.\n\nSi quieres el proceso con calma, escríbenos. Te lo explicamos sin letra chiquita.',
    },
    {
      q: '¿Tienen certificado o una prueba con un productor?',
      a: 'Un certificado que te podamos mostrar hoy, no. Una parcela de productor ya medida, tampoco.\n\nLo que sí hay es una prueba en fresa, hecha en macetas nuestras. Por eso no te prometemos un porcentaje de cosecha.',
    },
    {
      q: '¿Me sirve si yo todavía uso químico?',
      a: 'Sí lo puedes probar si hoy abonas con químico, si mezclas, o si ya trabajas orgánico. No te pedimos que tires lo que usas de un día para otro.\n\nCuéntanos qué siembras y cómo abonas. Te decimos cómo empezarlo.',
    },
    {
      q: '¿Es solo para el campo o también para mis plantas?',
      a: 'Para los dos. En casa puedes usar el atomizador de 500 ml, que ya viene diluido. En la parcela conviene el concentrado: 1 litro se mezcla en 30 litros de agua.',
    },
    {
      q: 'Somos escuela. ¿Quién da el taller? Se ven jóvenes.',
      a: 'Somos un equipo joven. No te vamos a inventar años de experiencia que no tenemos.\n\nEl taller se sostiene en lo que pasa en la sesión: teoría, práctica y una actividad. Si eres escuela, ONG o empresa, pide la propuesta y la cotización antes de agendar.',
    },
  ],
} as const;

export const ctaFinal = {
  title: '¿Tu tierra ya te está pidiendo más fertilizante del que debería?',
  body: 'Escríbenos. Dinos si es para la parcela, para tus plantas o para un taller. Te contestamos con el precio o con la cotización.',
} as const;

export const footer = {
  brand: site.name,
  tagline: site.tagline,
  contactLabel: 'WhatsApp',
} as const;

export function whatsappHref(message = site.whatsappPrefill): string {
  return `${site.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
