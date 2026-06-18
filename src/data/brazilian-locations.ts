export interface State {
  sigla: string;
  nome: string;
  cidades: string[];
}

export const estados: State[] = [
  {
    sigla: "AC",
    nome: "Acre",
    cidades: [
      "Rio Branco",
      "Cruzeiro do Sul",
      "Sena Madureira",
      "Tarauacá",
      "Xapuri",
      "Brasileia",
      "Plácido de Castro",
      "Porto Acre",
      "Feijó",
      "Mâncio Lima",
      "Assis Brasil",
      "Epitaciolândia"
    ]
  },
  {
    sigla: "AL",
    nome: "Alagoas",
    cidades: [
      "Maceió",
      "Arapiraca",
      "Rio Largo",
      "Quebrangulo",
      "Delmiro Gouveia",
      "Pilar",
      "São Miguel dos Campos",
      "Marechal Deodoro",
      "Santana do Ipanema",
      "Palmeira dos Índios",
      "Japaratinga",
      "Murici",
      "União dos Palmares",
      "Olho d'Água das Flores",
      "Pão de Açúcar"
    ]
  },
  {
    sigla: "AP",
    nome: "Amapá",
    cidades: [
      "Macapá",
      "Santana",
      "Oiapoque",
      "Laranjal do Jari",
      "Vitória do Jari",
      "Pedra Branca do Amapari",
      "Porto Grande",
      "Calçoene",
      "Cutias",
      "Itaubal",
      "Amapá",
      "Pracuúba"
    ]
  },
  {
    sigla: "AM",
    nome: "Amazonas",
    cidades: [
      "Manaus",
      "Parintins",
      "Itacoatiara",
      "Maués",
      "Coari",
      "Tefé",
      "Tabatinga",
      "Borba",
      "Careiro",
      "Iranduba",
      "Manacapuru",
      "Autazes",
      "Presidente Figueiredo",
      "Novo Airão",
      "Humaitá",
      "Eirunepé",
      "São Gabriel da Cachoeira"
    ]
  },
  {
    sigla: "BA",
    nome: "Bahia",
    cidades: [
      "Salvador",
      "Feira de Santana",
      "Vitória da Conquista",
      "Camaçari",
      "Itabuna",
      "Lauro de Freitas",
      "Ilhéus",
      "Jequié",
      "Alagoinhas",
      "Barreiras",
      "Valéria",
      "Paulo Afonso",
      "Teixeira de Freitas",
      "Santo Estêvão",
      "Juazeiro",
      "Eunápolis",
      "Caucaia",
      "Valença"
    ]
  },
  {
    sigla: "CE",
    nome: "Ceará",
    cidades: [
      "Fortaleza",
      "Caucaia",
      "Juazeiro do Norte",
      "Maracanaú",
      "Sobral",
      "Crato",
      "Maranguape",
      "Aquiraz",
      "Iguatu",
      "Quixadá",
      "Itapipoca",
      "Pacajus",
      "Russas",
      "Tianguá",
      "Canindé",
      "Crateús"
    ]
  },
  {
    sigla: "DF",
    nome: "Distrito Federal",
    cidades: [
      "Brasília",
      "Ceilândia",
      "Taguatinga",
      "Samambaia",
      "Gama",
      "Nucleamento Bandeirante",
      "Recanto das Emas",
      "Riacho Fundo",
      "Guará",
      "Cruzeiro",
      "Sudoeste",
      "Varjão"
    ]
  },
  {
    sigla: "ES",
    nome: "Espírito Santo",
    cidades: [
      "Vitória",
      "Vila Velha",
      "Cariacica",
      "Serra",
      "Linhares",
      "Aracruz",
      "Cachoeiro de Itapemirim",
      "Colatina",
      "Marataízes",
      "São Mateus",
      "Venda Nova do Imigrante",
      "Iúna",
      "Afonso Cláudio",
      "Fundão",
      "Domingos Martins"
    ]
  },
  {
    sigla: "GO",
    nome: "Goiás",
    cidades: [
      "Goiânia",
      "Aparecida de Goiânia",
      "Anápolis",
      "Rio Verde",
      "Luziânia",
      "Águas Lindas de Goiás",
      "Valparaíso de Goiás",
      "Novo Gama",
      "Jataí",
      "Mineiros",
      "Trindade",
      "Formosa",
      "Aragarças",
      "Morrinhos",
      "Itumbiara",
      "Pirenópolis"
    ]
  },
  {
    sigla: "MA",
    nome: "Maranhão",
    cidades: [
      "São Luís",
      "Imperatriz",
      "Paço do Lumiar",
      "Santa Rita",
      "Codó",
      "Timon",
      "Caxias",
      "Bacabal",
      "Balsas",
      "Açailândia",
      "Rosário",
      "Castanhal",
      "São José de Ribamar",
      "Grajaú",
      "Itapecuru-Mirim"
    ]
  },
  {
    sigla: "MG",
    nome: "Minas Gerais",
    cidades: [
      "Belo Horizonte",
      "Uberlândia",
      "Contagem",
      "Juiz de Fora",
      "Betim",
      "Montes Claros",
      "Divinópolis",
      "Ipatinga",
      "Governador Valadares",
      "Ribeirão das Neves",
      "Uberaba",
      "Viçosa",
      "Teófilo Otoni",
      "Poços de Caldas",
      "Araxá",
      "Passos",
      "Ituiutaba",
      "Três Corações",
      "Ouro Preto",
      "Coronel Fabriciano"
    ]
  },
  {
    sigla: "MS",
    nome: "Mato Grosso do Sul",
    cidades: [
      "Campo Grande",
      "Dourados",
      "Três Lagoas",
      "Corumbá",
      "Naviraí",
      "Maracaju",
      "Ponta Porã",
      "Nova Andradina",
      "Aquidauana",
      "Paranaíba",
      "Caarapó",
      "Miranda",
      "Bataguassu"
    ]
  },
  {
    sigla: "MT",
    nome: "Mato Grosso",
    cidades: [
      "Cuiabá",
      "Várzea Grande",
      "Rondonópolis",
      "Sinop",
      "Tangará da Serra",
      "Lucas do Rio Verde",
      "Caceres",
      "Sorriso",
      "Alta Floresta",
      "Primavera do Leste",
      "Cáceres",
      "Araputanga",
      "Nova Mutum",
      "Pontes e Lacerda"
    ]
  },
  {
    sigla: "PA",
    nome: "Pará",
    cidades: [
      "Belém",
      "Ananindeua",
      "Santarém",
      "Parauapebas",
      "Castanhal",
      "Marabá",
      "Abaetetuba",
      "Altamira",
      "Tucuruí",
      "Itaituba",
      "Conceição do Araguaia",
      "Redenção",
      "São Félix do Xingu",
      "Barcarena",
      "Bragança",
      "Breves"
    ]
  },
  {
    sigla: "PB",
    nome: "Paraíba",
    cidades: [
      "João Pessoa",
      "Campina Grande",
      "Santa Rita",
      "Patos",
      "Sousa",
      "Guarabira",
      "Bayeux",
      "Cabedelo",
      "Sapé",
      "Araruna",
      "Brejo dos Santos",
      "Pombal",
      "Areia",
      "Queimadas",
      "Mari"
    ]
  },
  {
    sigla: "PE",
    nome: "Pernambuco",
    cidades: [
      "Recife",
      "Jaboatão dos Guararapes",
      "Olinda",
      "Caruaru",
      "Paulista",
      "Petrolina",
      "Garanhuns",
      "Arcoverde",
      "Vitória de Santo Antão",
      "Ouricuri",
      "Salgueiro",
      "Gravatá",
      "Igarassu",
      "Goiana",
      "Santa Cruz do Capibaribe",
      "Belo Jardim"
    ]
  },
  {
    sigla: "PI",
    nome: "Piauí",
    cidades: [
      "Teresina",
      "Parnaíba",
      "Picos",
      "Comemorações",
      "Campo Maior",
      "Oeiras",
      "Amarante",
      "União",
      "São Raimundo Nonato",
      "Corrente",
      "Floriano",
      "Espírito Santo do Montes",
      "Cocal",
      "Valença do Piauí"
    ]
  },
  {
    sigla: "PR",
    nome: "Paraná",
    cidades: [
      "Curitiba",
      "Londrina",
      "Maringá",
      "Ponta Grossa",
      "Cascavel",
      "São José dos Pinhais",
      "Foz do Iguaçu",
      "Colombo",
      "Guarapuava",
      "Paranaguá",
      "Apucarana",
      "Araçatuba",
      "Cornélio Procópio",
      "Sarandi",
      "Piraquara",
      "Campo Largo",
      "Toledo",
      "Cambé"
    ]
  },
  {
    sigla: "RJ",
    nome: "Rio de Janeiro",
    cidades: [
      "Rio de Janeiro",
      "Niterói",
      "Duque de Caxias",
      "São Gonçalo",
      "Nova Iguaçu",
      "São João de Meriti",
      "Campos dos Goytacazes",
      "Petrópolis",
      "Itaboraí",
      "Mesquita",
      "Nilópolis",
      "Itaguaí",
      "Maricá",
      "Cabo Frio",
      "Araruama",
      "Angra dos Reis",
      "Magé"
    ]
  },
  {
    sigla: "RN",
    nome: "Rio Grande do Norte",
    cidades: [
      "Natal",
      "Mossoró",
      "Parnamirim",
      "Ponta Negra",
      "Caicó",
      "Assu",
      "Currais Novos",
      "Açu",
      "Canguaretama",
      "São Gonçalo do Amarante",
      "Touros",
      "Bom Jesus",
      "Extremoz",
      "Goianinha"
    ]
  },
  {
    sigla: "RO",
    nome: "Rondônia",
    cidades: [
      "Porto Velho",
      "Ariquemes",
      "Vilhena",
      "Ji-Paraná",
      "Cacoal",
      "Jaru",
      "Pimenta Bueno",
      "Ouro Preto do Oeste",
      "Costa Marques",
      "Rolim de Moura",
      "Buritis",
      "Guajará-Mirim"
    ]
  },
  {
    sigla: "RR",
    nome: "Roraima",
    cidades: [
      "Boa Vista",
      "Rorainópolis",
      "Caracaraí",
      "Mucajaí",
      "Iracema",
      "Cantá",
      "Pacaraima",
      "Amajari",
      "Uiramutã",
      "Caroebe"
    ]
  },
  {
    sigla: "RS",
    nome: "Rio Grande do Sul",
    cidades: [
      "Porto Alegre",
      "Caxias do Sul",
      "Pelotas",
      "Santa Maria",
      "Viamão",
      "Santo Ângelo",
      "Canoas",
      "Gravataí",
      "Novo Hamburgo",
      "Lajeado",
      "Sapucaia do Sul",
      "Passo Fundo",
      "Almeida",
      "Benfica",
      "Bento Gonçalves",
      "Camargo",
      "Cruz Alta",
      "Garibaldi"
    ]
  },
  {
    sigla: "SC",
    nome: "Santa Catarina",
    cidades: [
      "Florianópolis",
      "Joinville",
      "Blumenau",
      "Sobral",
      "Criciúma",
      "Chapecó",
      "Itajaí",
      "Brusque",
      "Lages",
      "Tubarão",
      "Jaraguá do Sul",
      "São Bento do Sul",
      "Concórdia",
      "Caçador",
      "São João Batista",
      "Indaial"
    ]
  },
  {
    sigla: "SP",
    nome: "São Paulo",
    cidades: [
      "São Paulo",
      "Guarulhos",
      "Campinas",
      "São Bernardo do Campo",
      "Santo André",
      "Osasco",
      "Sorocaba",
      "Mauá",
      "São José dos Campos",
      "Ribeirão Preto",
      "Santos",
      "Diadema",
      "Carapicuíba",
      "Bauru",
      "Piracicaba",
      "Jundiaí",
      "Itapevi",
      "Franca",
      "Araraquara",
      "São Vicente",
      "Jacareí",
      "Salto"
    ]
  },
  {
    sigla: "SE",
    nome: "Sergipe",
    cidades: [
      "Aracaju",
      "Nossa Senhora do Socorro",
      "Lagarto",
      "Itabaiana",
      "Estância",
      "Maruim",
      "Japaratuba",
      "São Cristóvão",
      "Poço Redondo",
      "Porto da Folha",
      "Tobias Barreto",
      "Penedo"
    ]
  },
  {
    sigla: "TO",
    nome: "Tocantins",
    cidades: [
      "Palmas",
      "Araguaína",
      "Gurupi",
      "Porto Nacional",
      "Tocantinópolis",
      "Guaraí",
      "Formoso do Araguaia",
      "Paraíso do Tocantins",
      "Miranorte",
      "Colinas do Tocantins",
      "Peixoto de Azevedo",
      "Dueré"
    ]
  }
];
