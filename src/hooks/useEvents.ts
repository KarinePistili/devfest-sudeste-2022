import { speakers } from "../hooks/useSpeakers";
import { Event } from "../models/event";

export const events: any = {
  regular: [
    new Event(
      "The State of DevOps: Security Enables Velocity",
      [speakers[0]],
      "Alvaro trabalha no Google Cloud como Developer Relations Engineer. Abordará o seguinte questionamento: Podemos enfrentar os desafios de segurança sem diminuir nossa velocidade de entrega de software?",
      "sala principal",
      false
    ),
    new Event(
      "Como meu modelo tirou essa conclusão? Uma jornada na explicabilidade de modelos",
      [speakers[1]],
      "Luciano é engenheiro de software e mestrando em inteligência artificial aplicada à área da saúde. Também é Developer Advocate no time de engenharia de Cloud AI do Google. Nesta sessão iremos juntos na jornada de entender como modelos complexos de machine learning tomam suas conclusões, desde a visão dos conceitos basicos de explicabilidade de modelos, as abordagens possíveis e alguns exemplos.",
      "sala principal",
      false
    ),
    new Event(
      "Mesa Redonda: O Poder das Comunidades Google",
      [
        speakers[2],
        // new Speaker(
        //   "Fernanda Costa",
        //   "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",
        //   "Mediadora"
        // ),
      ],
      "Em breve mais informações!",
      "sala principal",
      false
    ),
    new Event(
      "Novidades e Últimos Lançamentos do Firebase",
      [speakers[3]],
      "Leão é desenvolvedor na Twilio e vai apresentar nesta palestra as novidades do Firebase e ver ao vivo algumas implementações para que você possa tirar o máximo da plataforma e aprender como deixá-la mais segura.",
      "sala principal",
      false
    ),
  ],
  mobile: [
    new Event(
      "A magia do Firebase em seus Apps",
      [speakers[4]],
      "Filipe é Android Software Engineer e sua ideia é percorrer os principais recursos Firebase para o contexto mobile, entender as formas de aplicá-los, como usá-los e claro como não usá-los",
      "mobile",
      false
    ),
    new Event(
      "Novidades sobre acessibilidade no Android",
      [speakers[5]],
      "Formada em Sistemas de Informação, Dev Android, estuda Acessibilidade desde a faculdade. Em sua palestra vai mostrar as novidades criadas para oferecer acessibilidade no Android.",
      "mobile",
      false
    ),
    new Event(
      "Conceitos de Arquitetura de Projetos no Flutter",
      [speakers[6]],
      "Desenvolvedora Flutter formada em Tecnologia em Banco de dados. A palestra traz conceitos básicos para quem é iniciante na área de tecnologia, abordando organização do projeto, a escolha da arquitetura e como garantir um dia a dia mais produtivo.",
      "mobile",
      false
    ),
  ],
  cloud: [
    new Event(
      "Eleições Presidenciais: Usando Google Cloud para acompanhar a apuração",
      [speakers[7]],
      "Fernando Sedrez é engenheiro de dados. Nessa palestra vamos explorar como montar um sistema com serviços do Google Cloud, e usaremos as informações da apuração das eleições disponibilizadas pelo TSE.",
      "cloud",
      false
    ),
    new Event(
      "Criando sua Própria Inteligência Artificial com Google Vertex AI",
      [speakers[8]],
      "Sandro é líder de comunidades em Goiás e Professor e Gestor de Tecnologia da Universidade de Rio Verde - UNIRV. Iremos criar um projeto com Google Vertex AI, fazendo coleta de dados, treinamento, teste e deploy sem necessidade de escrever nenhuma linha de código.",
      "cloud",
      false
    ),
    new Event(
      "Aplicação de redes neurais convolucionais (CNN) na classificação de imagens com Tensorflow/Keras ",
      [speakers[9]],
      "Vinícius é Doutor em Inteligência Artificial, GDE Machine Learning e Head de Plataformas de Atendimento Digital, PCP, WFM, Dados e IA do maior banco do hemisfério sul. Nessa palestra vai mostrar como as CNNs funcionam e como o Tensorflow/keras facilita na criação dessas redes.",
      "cloud",
      false
    ),
  ],
  devops: [
    new Event(
      "Infraestrutura como produto - Deixando de ser um balcão de demandas",
      [speakers[10]],
      "Trabalha na DNSFilter, focado em infraestrutura como código. É fundador da Mentoria de IaC. Organizador e Autor dos livros: Docker para desenvolvedores e Deploy em produção para desenvolvedores. Na sua palestra vai mostrar como a formatação da sua entrega como produto interno de infraestrutura pode ajudar a mudar a entregar o valor que o time de operações/sysadmin sempre desejaram",
      "devops/infra",
      false
    ),
    new Event(
      "MLOPS em Sistemas de Recomendação: Como são os princípios na prática?",
      [speakers[11]],
      "Rodolfo é Engenheiro de Machine Learning e atua com sistemas de recomendação na página da globo.com. Nesta palestra vai apresentar os princípios das operações de machine learning e mostrar como eles funcionam na prática em sistemas de recomendação.",
      "devops/infra",
      false
    ),
    new Event(
      "Teste suas DAGs: boas práticas para usar o Cloud Composer",
      [speakers[12]],
      "André é Engenheiro de Machine Learning. Apresentará boas práticas de DevOps para times de Engenharia de Dados, mostrando os conceitos de testes, Airflow, Composer e boas práticas. ",
      "devops/infra",
      false
    ),
  ],
  carreira: [
    new Event(
      "Processos seletivos na área tech: por onde começar?",
      [speakers[13], speakers[14]],
      "Gabriela Amâncio é psicóloga especialista em Gestão de Talentos e Carreiras e hoje atua no time de Talent Acquisition do Nubank e junto com Letícia Coelho, que é Software Engineer na ArcTouch, criadora de conteúdo, palestrante, escritora e mentora, vai falar sobre como se preparar para processos seletivos do mercado de tecnologia, com orientações sobre entrevistas, Linkedin, GitHub e construção de portifólio.",
      "carreira",
      false
    ),
    new Event(
      "Mulher Tech Lead: O que a literatura não nos ensina",
      [speakers[15]],
      "Karine é  Tech Lead de Plataforma em Take Blip e co-autora do livro Jornada Devops. Nesta palestra vou abordar algumas situações que vivi e o que aprendi com elas nessa trajetória de Mulher Líder Técnica.",
      "carreira",
      false
    ),
    new Event(
      "Como avaliar uma proposta salarial com equity (Stock options, Ações restritas)",
      [speakers[16]],
      "Ana é Product Manager de um software para controle de incentivos chamado Basement, e vai explicar o que é um incentivo de longo prazo,mostrando como avaliar uma proposta salarial, benefícios, e seu real valor para tomar a melhor decisão.",
      "carreira",
      false
    ),
  ],
};
