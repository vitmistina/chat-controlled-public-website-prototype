export const company = {
  name: 'MK Dveře',
  legalName: 'MK dveře podlahy s.r.o.',
  tagline: 'Showroom dveří, oken a podlah v Týništi nad Orlicí',
  description:
    'MK Dveře provozuje v Týništi nad Orlicí showroom oken, interiérových a vchodových dveří, podlah a kování. Na ploše 500 m² si můžete prohlédnout a porovnat více než 70 vystavených dveří a setů.',
  phoneDisplay: '+420 736 513 520',
  phoneHref: '+420736513520',
  email: 'info@mkdvere.cz',
  ico: '24010227',
  address: {
    street: 'Mostecká 24',
    city: 'Týniště nad Orlicí',
    postalCode: '517 21',
    country: 'CZ'
  },
  geo: {
    latitude: 50.1496018,
    longitude: 16.0683333
  },
  visitNote: 'Návštěvu showroomu doporučujeme předem domluvit telefonicky.',
  areaServed: [
    'Týniště nad Orlicí',
    'Kostelec nad Orlicí',
    'Rychnov nad Kněžnou',
    'Hradec Králové',
    'Královéhradecký kraj'
  ],
  links: {
    googleMaps:
      'https://www.google.com/maps/place/MK+Dve%C5%99e,+Mosteck%C3%A1+24,+517+21+T%C3%BDni%C5%A1t%C4%9B+nad+Orlic%C3%AD/@50.1496018,16.0683333,16z/data=!4m6!3m5!1s0x470dd9a80778738f:0x239d2f797192520!8m2!3d50.1496018!4d16.0683333!16s%2Fg%2F11z6810vxq',
    googleMapsEmbed:
      'https://www.google.com/maps?q=MK+Dve%C5%99e,+Mosteck%C3%A1+24,+517+21+T%C3%BDni%C5%A1t%C4%9B+nad+Orlic%C3%AD&output=embed',
    firmy:
      'https://www.firmy.cz/detail/14039675-mk-dvere-podlahy-s-r-o-tyniste-nad-orlici.html'
  }
} as const;

export const services = [
  {
    slug: 'interierove-dvere-a-zarubne',
    title: 'Interiérové dveře a zárubně',
    lead: 'Více než 70 vystavených dveří a setů pro skutečné porovnání dekorů, konstrukcí a detailů.',
    description:
      'Interiérové dveře, zárubně a různé varianty provedení si prohlédnete přímo v showroomu MK Dveře v Týništi nad Orlicí.',
    icon: 'door'
  },
  {
    slug: 'okna-a-vchodove-dvere',
    title: 'Okna a vchodové dveře',
    lead: 'Porovnání profilů, povrchů a řešení pro novostavby i rekonstrukce.',
    description:
      'V showroomu nabízíme výběr oken a vchodových dveří a konzultaci vhodného řešení pro konkrétní dům nebo byt.',
    icon: 'window'
  },
  {
    slug: 'podlahy',
    title: 'Podlahy',
    lead: 'Vzorky podlah můžete posoudit vedle dveří a dalších prvků interiéru.',
    description:
      'Vyberte podlahu podle vzhledu, způsobu používání prostoru a návaznosti na dveře, zárubně a další materiály.',
    icon: 'floor'
  },
  {
    slug: 'dverni-kovani',
    title: 'Dveřní kování',
    lead: 'Kliky a další detaily, které rozhodují o vzhledu i každodenním používání dveří.',
    description:
      'Vystavené dveře můžete rovnou porovnat s různými variantami kování a vybrat sourodou kombinaci pro celý interiér.',
    icon: 'handle'
  }
] as const;
