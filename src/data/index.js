const nikeAirMax = require("../assets/1.png");
const nikeDownshifter = require("../assets/2.png");
const nikeSquidward = require("../assets/3.png");
const nikeEpic = require("../assets/4.png");
const nikeJoyride = require("../assets/5.png");
const nikeAirMaxDia = require("../assets/6.png");
const nikeAirMaxD = require("../assets/1p.png");
const nikeDownshifterD = require("../assets/2p.png");
const nikeSquidwardD = require("../assets/3p.png");
const nikeEpicD = require("../assets/4p.png");
const nikeJoyrideD = require("../assets/5p.png");
const nikeAirMaxDiaD = require("../assets/6p.png");

export const productList = [
  {
    id: 1,
    name: "Nike Air Max Dia",
    preco: 199,
    img: nikeAirMax,
    imgDetail: nikeAirMaxD,
    tamanhos: [{tamanho: 38}, {tamanho: 39}, {tamanho: 40}, {tamanho: 41}],
    cores: [{cor: 'black'}, {cor: '#2379f4'}, {cor: '#fb6e53'}, {cor: '#ddd'}],
    descricao: 'O Nike Air Max Dia é um tênis moderno e estiloso, projetado para as mulheres que desejam conforto e estilo no dia a dia. Com uma entressola Air Max, ele proporciona amortecimento responsivo a cada passo. Seu design elegante e minimalista é complementado por uma parte superior em mesh respirável, que mantém os pés frescos durante todo o dia. Com o Nike Air Max Dia, você estará sempre pronta para enfrentar qualquer desafio com confiança.',
  },
  {
    id: 2,
    name: "Nike Downshifter 10",
    preco: 280.9,
    img: nikeDownshifter,
    imgDetail: nikeDownshifterD,
    tamanhos: [{tamanho: 37}, {tamanho: 39}, {tamanho: 40}, {tamanho: 41}],
    cores: [{cor: 'black'}, {cor: '#2379f4'}, {cor: '#fb6e53'}, {cor: '#ddd'}],
    descricao: 'O Nike Downshifter 10 é um tênis versátil e durável, perfeito para corridas e treinos diários. Seu amortecimento macio proporciona conforto e absorção de impacto, enquanto a parte superior em mesh permite uma excelente ventilação, mantendo os pés frescos. Com o Nike Downshifter 10, você terá o suporte e a tração necessários para alcançar seus objetivos de fitness, seja na esteira ou na rua.',
  },
  {
    id: 3,
    name: "Nike Squidward Tentacle",
    preco: 560.9,
    img: nikeSquidward,
    imgDetail: nikeSquidwardD,
    tamanhos: [{tamanho: 35}, {tamanho: 37}],
    cores: [{cor: '#2379f4'}, {cor: 'red'}],
    descricao: 'O Nike Squidward Tentacle é uma edição especial que celebra o personagem icônico do desenho animado. Com um design exclusivo inspirado nas características do Squidward Tentacle, este tênis chama a atenção pela sua originalidade. Além disso, oferece conforto e desempenho com sua entressola responsiva e solado aderente. Com o Nike Squidward Tentacle, você pode expressar seu amor pelo desenho animado enquanto aproveita o máximo conforto durante as atividades do dia a dia.',
  },
  {
    id: 4,
    name: "Nike Epic React Flynit 2",
    preco: 220,
    img: nikeEpic,
    imgDetail: nikeEpicD,
    tamanhos: [{tamanho: 38}, {tamanho: 39}, {tamanho: 40}, {tamanho: 41}, {tamanho: 42}],
    cores: [{cor: 'black'}, {cor: '#2379f4'}, {cor: '#fb6e53'}, {cor: 'green'}],
    descricao: 'O Nike Epic React Flyknit 2 é um tênis revolucionário que combina conforto e desempenho excepcionais. Sua entressola React proporciona um amortecimento suave e responsivo, absorvendo o impacto a cada passo. A parte superior em Flyknit se adapta ao formato do pé, oferecendo suporte e ajuste personalizado. Com o Nike Epic React Flyknit 2, você desfrutará de uma experiência de corrida leve e ágil, além de um visual moderno e elegante',
  },
  {
    id: 5,
    name: "Nike Joyride Run Flynit",
    preco: 199,
    img: nikeJoyride,
    imgDetail: nikeJoyrideD,
    tamanhos: [{tamanho: 35}, {tamanho: 37}, {tamanho: 38}, {tamanho: 39}, {tamanho: 40}, {tamanho: 41}, {tamanho: 42}],
    cores: [{cor: 'black'}, {cor: '#2379f4'}, {cor: '#fb6e53'}, {cor: '#ddd'}],
    descricao: 'O Nike Joyride Run Flyknit é um tênis inovador que proporciona uma experiência de corrida única. Com seu sistema de amortecimento Joyride, que utiliza pequenas contas de espuma em sua entressola, ele oferece um amortecimento adaptativo e responsivo, tornando cada passada mais confortável e eficiente. A parte superior em Flyknit proporciona suporte e respirabilidade, garantindo um ajuste perfeito. O Nike Joyride Run Flyknit é a escolha ideal para quem busca conforto excepcional e desempenho durante suas corridas.',
  },
  {
    id: 6,
    name: "Nike Air Max Dia 20",
    preco: 199,
    img: nikeAirMaxDia,
    imgDetail: nikeAirMaxDiaD,
    tamanhos: [{tamanho: 38}, {tamanho: 39}, {tamanho: 40}, {tamanho: 41}, {tamanho: 42}],
    cores: [{cor: 'black'}, {cor: '#2379f4'}, {cor: '#fb6e53'}, {cor: '#ddd'}],
    descricao: 'O Nike Air Max Dia 20 é uma versão atualizada do clássico Air Max Dia, trazendo ainda mais estilo e conforto. Com sua entressola Air Max, este tênis oferece amortecimento superior e absorção de impacto, proporcionando uma sensação de leveza e suavidade a cada passo. Sua parte superior em mesh respirável mantém os pés frescos e confortáveis durante todo o dia. Com o Nike Air Max Dia 20, você estará pronto para enfrentar qualquer desafio com estilo e confiança.',
  },
];