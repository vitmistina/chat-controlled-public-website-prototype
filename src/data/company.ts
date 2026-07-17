export const company = {
  name: 'Orlice Stavby & Interiéry',
  legalName: 'Doplňte právní název firmy s.r.o.',
  tagline: 'Rekonstrukce, koupelny a showroom v Týništi nad Orlicí',
  description:
    'Kompletní rekonstrukce interiérů, koupelen a stavební práce v Týništi nad Orlicí, Hradci Králové a okolí. Návrh materiálů si můžete prohlédnout v našem showroomu.',
  phoneDisplay: '+420 777 123 456',
  phoneHref: '+420777123456',
  email: 'info@doplnit-domenu.cz',
  ico: 'DOPLNIT',
  address: {
    street: 'Doplňte ulici a číslo',
    city: 'Týniště nad Orlicí',
    postalCode: '517 21',
    country: 'CZ'
  },
  openingHours: [
    ['Pondělí', '8:00–17:00'],
    ['Úterý', '8:00–17:00'],
    ['Středa', '8:00–17:00'],
    ['Čtvrtek', '8:00–17:00'],
    ['Pátek', '8:00–15:00'],
    ['Sobota', 'Po domluvě']
  ],
  areaServed: [
    'Týniště nad Orlicí',
    'Kostelec nad Orlicí',
    'Rychnov nad Kněžnou',
    'Hradec Králové',
    'Holice'
  ],
  social: {
    googleBusiness: '#',
    mapy: '#',
    instagram: '#',
    facebook: '#'
  }
} as const;

export const services = [
  {
    slug: 'rekonstrukce-koupelen',
    title: 'Rekonstrukce koupelen',
    lead: 'Od demontáže přes rozvody a hydroizolaci až po poslední spáru.',
    description:
      'Kompletní rekonstrukce koupelen na klíč, včetně koordinace řemesel, obkladů, sanity a finálního předání.',
    icon: 'bath'
  },
  {
    slug: 'rekonstrukce-interieru',
    title: 'Rekonstrukce interiérů',
    lead: 'Byty, domy i menší komerční prostory bez chaosu mezi řemesly.',
    description:
      'Stavební úpravy, podlahy, omítky, příčky, elektroinstalace a koordinace navazujících profesí.',
    icon: 'home'
  },
  {
    slug: 'obklady-a-dlazby',
    title: 'Obklady a dlažby',
    lead: 'Přesná pokládka běžných i velkoformátových materiálů.',
    description:
      'Pokládka obkladů a dlažeb, příprava podkladu, hydroizolace, spárování a řešení detailů.',
    icon: 'tiles'
  },
  {
    slug: 'showroom',
    title: 'Showroom materiálů',
    lead: 'Materiály si prohlédnete vedle sebe, ne jen na displeji telefonu.',
    description:
      'Výběr obkladů, dlažeb, sanity a povrchů s praktickou konzultací pro konkrétní prostor.',
    icon: 'showroom'
  }
] as const;
