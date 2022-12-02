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

class Event {
  title: string;
  speakerName: string;
  description: string;
  speakerJob: string;
  speakerImg: string;
  track: string;
  isActive: boolean;

  constructor(
    title: string,
    speakerName: string,
    speakerImg: string,
    description: string,
    speakerJob: string,
    track: string,
    isActive: boolean
  ) {
    this.title = title;
    this.speakerName = speakerName;
    this.description = description;
    this.speakerJob = speakerJob;
    this.track = track;
    this.speakerImg = speakerImg;
    this.isActive = isActive;
  }
}

const Events = {
  regular: [
    new Event(
      "The State of DevOps: Security Enables Velocity",
      "Alvaro Huanca",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "sala principal",
      false
    ),
    new Event(
      "(Surpresa)",
      "Luciano",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "sala principal",
      false
    ),
    new Event(
      "Mesa Redonda: O Poder das Comunidades Google",
      "Organizadores de GDGs e Fernanda (Mediadora)",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "sala principal",
      false
    ),
    new Event(
      "Novidades e Últimos Lançamentos do Firebase",
      "Luis Leão",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "sala principal",
      false
    ),
  ],
  mobile: [
    new Event(
      "A magia do Firebase em seus Apps",
      "Filipe Nunes",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "mobile",
      false
    ),
    new Event(
      "Novidades sobre acessibilidade no Android",
      "Larissa Guimarães",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "mobile",
      false
    ),
    new Event(
      "Conceitos de Arquitetura de Projetos no Flutter",
      "Mariza Louise Pereira",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "mobile",
      false
    ),
  ],
  cloud: [
    new Event(
      "Eleições Presidenciais: Usando Google Cloud para acompanhar a apuração",
      "Fernando Sedrez",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "cloud",
      false
    ),
    new Event(
      "Criando sua Própria Inteligência Artificial com Google Vertex AI",
      "Sandro Moreira",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "cloud",
      false
    ),
    new Event(
      "Aplicação de redes neurais convolucionais (CNN) na classificação de imagens com Tensorflow/Keras ",
      "Vinicius Caridá",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "cloud",
      false
    ),
  ],
  carreira: [
    new Event(
      "Infraestrutura como produto - Deixando de ser um balcão de demandas",
      'Rafael Brito Gomes "Gomex"',
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "carreira",
      false
    ),
    new Event(
      "MLOPS",
      "Rodolfo Teles",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "carreira",
      false
    ),
    new Event(
      "Teste suas DAGs: boas práticas para usar o Cloud Composer",
      "André Luiz Figueiredo de Castro",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "carreira",
      false
    ),
  ],
  devops: [
    new Event(
      "Processos seletivos na área tech: por onde começar?",
      "Gabriela Amâncio de Souza e Leticia Aparecida Coelho",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "devops/infra",
      false
    ),
    new Event(
      "Mulher Tech Lead: O que a literatura não nos ensina",
      "Karine Paz Fagundes Cordeiro",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "devops/infra",
      false
    ),
    new Event(
      "Como avaliar uma proposta salarial com equity (Stock options, Ações restritas)",
      "Ana Carolina Barbosa Silva",
      "https://cdn-icons-png.flaticon.com/512/5526/5526465.png",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dapibus sapien, id iaculis elit dapibus ac. Phasellus tempus orci molestie libero malesuada laoreet. In in maximus sapien, sit amet aliquam neque. Maecenas sed arcu ac quam pellentesque commodo eget eget diam",
      "XXXXXXXXXXXXXXX",
      "devops/infra",
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
              <>
                <CardText className={styles.EventSpeaker}>
                  Com {props.event.speakerName}
                  <Badge className={styles.BadgeStyle} color={props.trackColor}>
                    {props.event.track}
                  </Badge>
                </CardText>
              </>
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
                  src={props.event.speakerImg}
                ></img>
              </div>
              <Col>
                <CardTitle className={styles.ListTileTitle}>
                  {props.event.speakerName}
                </CardTitle>
                <CardText className={styles.ListTileSubtitle}>
                  {props.event.speakerJob}
                </CardText>
              </Col>

              <Col sm="2">
                <Badge className={styles.BadgeStyle} color={props.trackColor}>
                  {props.event.track}
                </Badge>
              </Col>
            </Row>
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
