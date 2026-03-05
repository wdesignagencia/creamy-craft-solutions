export interface ProductData {
  slug: string;
  name: string;
  shortName: string;
  type: 'moinho' | 'tanque';
  capacity: string;
  dailyProduction: string;
  motor: string;
  voltage: string;
  dimensions?: string;
  weight: string;
  segments: string[];
  description: string;
  features: string[];
  pdfUrl?: string;
}

export const products: ProductData[] = [
  {
    slug: 'j10',
    name: 'Newtech J10',
    shortName: 'J10',
    type: 'moinho',
    capacity: '10 kg',
    dailyProduction: '80 kg/dia',
    motor: '3 CV',
    voltage: '110 / 220 / 380V',
    dimensions: '1100 x 780 x 840 mm',
    weight: '91 kg',
    segments: ['Confeitarias', 'Sorveterias'],
    description: 'Moinho compacto ideal para confeitarias e pequenas produções artesanais de chocolate.',
    features: ['Inox 304', 'Esferas cromo duro 3,9mm', '60 min/batelada', 'Granulometria <25 microns'],
    pdfUrl: '/fichas/j10.pdf',
  },
  {
    slug: 'j60',
    name: 'Newtech J60',
    shortName: 'J60',
    type: 'moinho',
    capacity: '60 kg',
    dailyProduction: '480 kg/dia',
    motor: '7,5 CV principal + 2 CV bomba',
    voltage: '220 / 380V',
    dimensions: '',
    weight: '480 kg',
    segments: ['Sorveterias', 'Confeitarias', 'Panificadoras'],
    description: 'Moinho versátil para produções médias. Ideal para sorveterias e confeitarias com demanda constante.',
    features: ['Inox 304', 'Esferas cromo duro 3,9mm', '60 min/batelada', 'Granulometria <25 microns'],
    pdfUrl: '/fichas/j60.pdf',
  },
  {
    slug: 'j120',
    name: 'Newtech J120',
    shortName: 'J120',
    type: 'moinho',
    capacity: '120 kg',
    dailyProduction: '960 kg/dia',
    motor: '12,5 CV principal + 2 CV bomba',
    voltage: '220 / 380V',
    dimensions: '',
    weight: '660 kg',
    segments: ['Sorveterias', 'Distribuidores', 'Panificadoras'],
    description: 'Moinho de alta capacidade para produções industriais de médio porte.',
    features: ['Inox 304', 'Esferas cromo duro 3,9mm', '60 min/batelada', 'Granulometria <25 microns'],
    pdfUrl: '/fichas/j120.pdf',
  },
  {
    slug: 'j240',
    name: 'Newtech J240',
    shortName: 'J240',
    type: 'moinho',
    capacity: '240 kg',
    dailyProduction: '1.920 kg/dia',
    motor: '20 CV principal + 2 CV bomba',
    voltage: '220 / 380V',
    dimensions: '',
    weight: '650 kg',
    segments: ['Distribuidores', 'Panificadoras'],
    description: 'Moinho industrial para grandes volumes de produção diária.',
    features: ['Inox 304', 'Esferas cromo duro 3,9mm', '60 min/batelada', 'Granulometria <25 microns'],
  },
  {
    slug: 'j500',
    name: 'Newtech J500',
    shortName: 'J500',
    type: 'moinho',
    capacity: '500 kg',
    dailyProduction: '4.000 kg/dia',
    motor: '30 CV + 5 CV + 2 CV',
    voltage: '220 / 380V',
    dimensions: '',
    weight: '',
    segments: ['Distribuidores'],
    description: 'Nosso maior moinho, projetado para operações industriais de grande escala.',
    features: ['Inox 304', 'Esferas cromo duro 3,9mm', '60 min/batelada', 'Granulometria <25 microns'],
  },
  {
    slug: 't1000d',
    name: 'Newtech T1000D',
    shortName: 'T1000D',
    type: 'tanque',
    capacity: '1.000 kg (2x500)',
    dailyProduction: 'Armazenagem',
    motor: '',
    voltage: '220 / 380V',
    dimensions: '',
    weight: '500 kg',
    segments: ['Distribuidores'],
    description: 'Tanque duplo de armazenamento para produto refinado, mantendo temperatura e qualidade.',
    features: ['Inox 304', 'Duplo tanque 500 kg', 'Controle de temperatura', 'Agitação contínua'],
  },
];

export const getProduct = (slug: string) => products.find(p => p.slug === slug);
