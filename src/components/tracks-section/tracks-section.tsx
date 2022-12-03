/*eslint-disable*/
import React, { useState } from "react";
import classnames from "classnames";
import {
  Col,
  Container,
  Row,
  TabPane,
  TabContent,
  Card,
  CardTitle,
  CardText,
  Button,
  Nav,
  NavLink,
  NavItem,
  Badge,
} from "reactstrap";

import styles from "styles/Tracks.module.css";

const Tracks: Record<string, string> = {
  mobile: "Mobile",
  carreiras: "Carreira",
  devops: "Infra e DevOps",
  cloud: "Cloud",
};

class Speaker {
  name: string;
  img: string;
  job: string;

  constructor(name: string, img: string, job: string) {
    this.name = name;
    this.img = img;
    this.job = job;
  }
}

class Event {
  title: string;
  speakers: Speaker[];
  description: string;
  track: string;
  isActive: boolean;

  constructor(
    title: string,
    speakers: Speaker[],
    description: string,
    track: string,
    isActive: boolean
  ) {
    this.title = title;
    this.speakers = speakers;
    this.description = description;
    this.track = track;
    this.isActive = isActive;
  }
}

const Events = {
  regular: [
    new Event(
      "The State of DevOps: Security Enables Velocity",
      [
        new Speaker(
          "Alvaro Huanca",
          "./speakers/alvarohuanca.jpeg",
          "Developer Relations Engineer at Google Cloud"
        ),
      ],
      "Alvaro trabalha no Google Cloud como Developer Relations Engineer. Abordará o seguinte questionamento: Podemos enfrentar os desafios de segurança sem diminuir nossa velocidade de entrega de software?",
      "sala principal",
      false
    ),
    new Event(
      "Em breve!",
      [new Speaker("Convidado Especial", "./speakers/gdg.png", "")],
      "Em breve mais informações!",
      "sala principal",
      false
    ),
    new Event(
      "Mesa Redonda: O Poder das Comunidades Google",
      [
        new Speaker("Organizadores de GDGs", "./speakers/gdg.png", ""),
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
      [
        new Speaker(
          "Luís Leão",
          "./speakers/luisleao.jpeg",
          "Staff Developer Evangelist na Twilio"
        ),
      ],
      "Leão é desenvolvedor na Twilio e vai apresentar nesta palestra as novidades do Firebase e ver ao vivo algumas implementações para que você possa tirar o máximo da plataforma e aprender como deixá-la mais segura.",
      "sala principal",
      false
    ),
  ],
  mobile: [
    new Event(
      "A magia do Firebase em seus Apps",
      [new Speaker("Filipe Nunes", "./speakers/gdg.png", "Software Engineer")],
      "Filipe é Android Software Engineer e sua ideia é percorrer os principais recursos Firebase para o contexto mobile, entender as formas de aplicá-los, como usá-los e claro como não usá-los",
      "mobile",
      false
    ),
    new Event(
      "Novidades sobre acessibilidade no Android",
      [new Speaker("Larissa Guimarães", "./speakers/gdg.png", "")],
      "Em breve mais informações!",
      "mobile",
      false
    ),
    new Event(
      "Conceitos de Arquitetura de Projetos no Flutter",
      [new Speaker("Mariza Louise Pereira", "./speakers/gdg.png", "")],
      "Em breve mais informações!",
      "mobile",
      false
    ),
  ],
  cloud: [
    new Event(
      "Eleições Presidenciais: Usando Google Cloud para acompanhar a apuração",
      [
        new Speaker(
          "Fernando Sedrez",
          "./speakers/fernandosedrez.jpeg",
          "Data Engineer | Big Data | GCP | Python"
        ),
      ],
      "Fernando Sedrez é engenheiro de dados. Nessa palestra vamos explorar como montar um sistema com serviços do Google Cloud, e usaremos as informações da apuração das eleições disponibilizadas pelo TSE.",
      "cloud",
      false
    ),
    new Event(
      "Criando sua Própria Inteligência Artificial com Google Vertex AI",
      [
        new Speaker(
          "Sandro Moreira",
          "./speakers/sandromoreira.jpg",
          "Líder de comunidades em Goiás | Professor e Gestor de Tecnologia da Universidade de Rio Verde - UNIRV"
        ),
      ],
      "Sandro é líder de comunidades em Goiás e Professor e Gestor de Tecnologia da Universidade de Rio Verde - UNIRV. Iremos criar um projeto com Google Vertex AI, fazendo coleta de dados, treinamento, teste e deploy sem necessidade de escrever nenhuma linha de código.",
      "cloud",
      false
    ),
    new Event(
      "Aplicação de redes neurais convolucionais (CNN) na classificação de imagens com Tensorflow/Keras ",
      [
        new Speaker(
          "Vinicius Caridá",
          "./speakers/viniciuscarida.jpg",
          "PhD Inteligência Artificial | GDE Machine Learning | Head de Plataformas de Atendimento Digital, PCP, WFM, Dados e IA"
        ),
      ],
      "Vinícius é Doutor em Inteligência Artificial, GDE Machine Learning e Head de Plataformas de Atendimento Digital, PCP, WFM, Dados e IA do maior banco do hemisfério sul. Nessa palestra vai mostrar como as CNNs funcionam e como o Tensorflow/keras facilita na criação dessas redes.",
      "cloud",
      false
    ),
  ],
  devops: [
    new Event(
      "Infraestrutura como produto - Deixando de ser um balcão de demandas",
      [new Speaker('Rafael Brito Gomes "Gomex"', "./speakers/gdg.png", "")],
      "Em breve mais informações!",
      "devops/infra",
      false
    ),
    new Event(
      "MLOPS",
      [new Speaker("Rodolfo Teles", "./speakers/gdg.png", "")],
      "Em breve mais informações!",
      "devops/infra",
      false
    ),
    new Event(
      "Teste suas DAGs: boas práticas para usar o Cloud Composer",
      [
        new Speaker(
          "André Luiz Figueiredo de Castro",
          "./speakers/andreluiz.jpeg",
          "Engenheiro de Machine Learning"
        ),
      ],
      "André é Engenheiro de Machine Learning. Apresentará boas práticas de DevOps para times de Engenharia de Dados, mostrando os conceitos de testes, Airflow, Composer e boas práticas. ",
      "devops/infra",
      false
    ),
  ],
  carreira: [
    new Event(
      "Processos seletivos na área tech: por onde começar?",
      [
        new Speaker("Gabriela Amâncio de Souza", "./speakers/gdg.png", ""),

        new Speaker("Leticia Aparecida Coelho", "./speakers/gdg.png", ""),
      ],
      "Em breve mais informações!",
      "carreira",
      false
    ),
    new Event(
      "Mulher Tech Lead: O que a literatura não nos ensina",
      [
        new Speaker(
          "Karine Paz Fagundes Cordeiro",
          "./speakers/karinepaz.jpeg",
          "Tech Lead de Plataforma em Take Blip | Co-autora do livro Jornada DevOps"
        ),
      ],
      "Karine é  Tech Lead de Plataforma em Take Blip e co-autora do livro Jornada Devops. Nesta palestra vou abordar algumas situações que vivi e o que aprendi com elas nessa trajetória de Mulher Líder Técnica.",
      "carreira",
      false
    ),
    new Event(
      "Como avaliar uma proposta salarial com equity (Stock options, Ações restritas)",
      [
        new Speaker(
          "Ana Carolina Barbosa Silva",
          "./speakers/anacarolina.jpeg",
          "Product Manager do Software Basement"
        ),
      ],
      "Ana é Product Manager de um software para controle de incentivos chamado Basement, e vai explicar o que é um incentivo de longo prazo,mostrando como avaliar uma proposta salarial, benefícios, e seu real valor para tomar a melhor decisão.",
      "carreira",
      false
    ),
  ],
};

function CardSection(props: {
  trackColor: string;
  styleClass: string;
  event: Event;
}) {
  var [active, setActive] = useState(false);

  function toggleActive() {
    setActive(!active);
  }

  return (
    <>
      <Card
        body
        className={styles[`${props.styleClass}`]}
        onClick={() => toggleActive()}
      >
        <Row className={styles.CardTitleContainer}>
          <Col>
            <CardTitle className={styles.EventTitle}>
              {props.event.title}
            </CardTitle>

            {active == false && (
              <CardText className={styles.EventSpeaker}>
                <span>Com {props.event.speakers[0].name}</span>
                {props.event.speakers[1] && (
                  <span> e {props.event.speakers[1].name}</span>
                )}
                <Badge className={styles.BadgeStyle} color={props.trackColor}>
                  {props.event.track}
                </Badge>
              </CardText>
            )}
            {active == true && (
              <CardText className={styles.DescriptionContainer}>
                {props.event.description}
              </CardText>
            )}
          </Col>
          <Col sm="2">
            {active == true && (
              <Button color="link" onClick={() => toggleActive()}>
                Ver Menos
              </Button>
            )}
            {active == false && (
              <Button color="link" onClick={() => toggleActive()}>
                Ver Mais
              </Button>
            )}
          </Col>
        </Row>
        {active == true && (
          <>
            <Row className={styles.ExtraInfoContainer}>
              <div className={styles.AvatarContainer}>
                <img
                  className={styles.AvatarImg}
                  src={props.event.speakers[0].img}
                ></img>
              </div>
              <Col>
                <CardTitle className={styles.ListTileTitle}>
                  {props.event.speakers[0].name}
                </CardTitle>
                <CardText className={styles.ListTileSubtitle}>
                  {props.event.speakers[0].job}
                </CardText>
              </Col>

              <Col sm="2">
                <Badge className={styles.BadgeStyle} color={props.trackColor}>
                  {props.event.track}
                </Badge>
              </Col>
            </Row>
            {props.event.speakers[1] && (
              <Row className={styles.ExtraInfoContainer}>
                <div className={styles.AvatarContainer}>
                  <img
                    className={styles.AvatarImg}
                    src={props.event.speakers[1].img}
                  ></img>
                </div>
                <Col>
                  <CardTitle className={styles.ListTileTitle}>
                    {props.event.speakers[1].name}
                  </CardTitle>
                  <CardText className={styles.ListTileSubtitle}>
                    {props.event.speakers[1].job}
                  </CardText>
                </Col>
              </Row>
            )}
          </>
        )}
      </Card>
    </>
  );
}

function TimeSection(props: { startTime: string; endTime: string }) {
  return (
    <>
      <Card body className={styles.TimeContainer}>
        <CardText>{props.startTime}</CardText>
        <CardText>ás</CardText>
        <CardText>{props.endTime}</CardText>
      </Card>
    </>
  );
}

const TracksSection: React.FC = ({}) => {
  var [activeTab, setActiveTab] = useState("1");

  function toggle(tab: React.SetStateAction<string>) {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  return (
    <>
      <Container id="tracks">
        <Row>
          <h1> Trilhas </h1>
          <p className={styles.Description}>O evento contará com 4 trilhas:</p>
        </Row>
      </Container>
      <Container>
        <section className={styles.Tracks}>
          <ul className={styles.TracksList}>
            {Object.keys(Tracks).map((key) => (
              <li className={styles.TracksListItem} key={key}>
                <span className={styles.TracksListItem__text}></span>
                {Tracks[key]}
              </li>
            ))}
          </ul>
        </section>
      </Container>
      <Container id="agenda">
        <h2 className={styles.Agenda}> Agenda </h2>
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                <CardTitle className={styles.TabTitle}>
                  DIA 1 (16 de Dezembro)
                </CardTitle>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                <CardTitle className={styles.TabTitle}>
                  DIA 2 (17 de Dezembro)
                </CardTitle>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Container className={styles.TabContentContainer}>
                <Row className={styles.TabContentContainer}>
                  <Col sm="2">
                    <TimeSection startTime="17:00" endTime="18:00" />
                  </Col>
                  <Col>
                    <CardSection
                      trackColor="dark"
                      styleClass={"CardDefault"}
                      event={Events.regular[3]}
                    />
                  </Col>
                </Row>
              </Container>
            </TabPane>
            <TabPane tabId="2">
              <Container className={styles.TabContentContainer}>
                <Row>
                  <Col sm="2">
                    <TimeSection startTime="13:00" endTime="14:00" />
                  </Col>
                  <Col sm="10">
                    <CardSection
                      trackColor="dark"
                      styleClass={"CardDefault"}
                      event={Events.regular[0]}
                    />
                  </Col>
                </Row>

                <Row className={styles.TabContentContainer}>
                  <Col sm="2">
                    <TimeSection startTime="14:00" endTime="15:00" />
                  </Col>
                  <Col sm="10">
                    <CardSection
                      trackColor="primary"
                      styleClass={"CardMobile"}
                      event={Events.mobile[0]}
                    />
                    <CardSection
                      trackColor="danger"
                      styleClass={"CardCarreira"}
                      event={Events.carreira[0]}
                    />
                    <CardSection
                      trackColor="success"
                      styleClass={"CardCloud"}
                      event={Events.cloud[0]}
                    />
                    <CardSection
                      trackColor="warning"
                      styleClass={"CardDevops"}
                      event={Events.devops[0]}
                    />
                  </Col>
                </Row>

                <Row className={styles.TabContentContainer}>
                  <Col sm="2">
                    <TimeSection startTime="15:00" endTime="16:00" />
                  </Col>
                  <Col sm="10">
                    <CardSection
                      trackColor="primary"
                      styleClass={"CardMobile"}
                      event={Events.mobile[1]}
                    />
                    <CardSection
                      trackColor="danger"
                      styleClass={"CardCarreira"}
                      event={Events.carreira[1]}
                    />
                    <CardSection
                      trackColor="success"
                      styleClass={"CardCloud"}
                      event={Events.cloud[1]}
                    />
                    <CardSection
                      trackColor="warning"
                      styleClass={"CardDevops"}
                      event={Events.devops[1]}
                    />
                  </Col>
                </Row>
                <Row className={styles.TabContentContainer}>
                  <Col sm="2">
                    <TimeSection startTime="16:00" endTime="17:00" />
                  </Col>
                  <Col sm="10">
                    <CardSection
                      trackColor="primary"
                      styleClass={"CardMobile"}
                      event={Events.mobile[2]}
                    />
                    <CardSection
                      trackColor="danger"
                      styleClass={"CardCarreira"}
                      event={Events.carreira[2]}
                    />
                    <CardSection
                      trackColor="success"
                      styleClass={"CardCloud"}
                      event={Events.cloud[2]}
                    />
                    <CardSection
                      trackColor="warning"
                      styleClass={"CardDevops"}
                      event={Events.devops[2]}
                    />
                  </Col>
                </Row>

                <Row className={styles.TabContentContainer}>
                  <Col sm="2">
                    <TimeSection startTime="17:00" endTime="18:00" />
                  </Col>
                  <Col>
                    <CardSection
                      trackColor="dark"
                      styleClass={"CardDefault"}
                      event={Events.regular[1]}
                    />
                  </Col>
                </Row>

                <Row className={styles.TabContentContainer}>
                  <Col sm="2">
                    <TimeSection startTime="18:00" endTime="19:00" />
                  </Col>
                  <Col>
                    <CardSection
                      trackColor="dark"
                      styleClass={"CardDefault"}
                      event={Events.regular[2]}
                    />
                  </Col>
                </Row>
              </Container>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </>
  );
};

export default TracksSection;
