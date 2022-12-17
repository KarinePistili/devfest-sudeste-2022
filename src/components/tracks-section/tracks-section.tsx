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
import { events } from "hooks/useEvents";
import { Event } from "models/event";

const Tracks: Record<string, string> = {
  mobile: "Mobile",
  carreiras: "Carreira",
  devops: "Infra e DevOps",
  cloud: "Cloud",
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
          <Row className={styles.TracksList}>
            {Object.keys(Tracks).map((key) => (
              <Col className={styles.TracksListItem} key={key}>
                <span className={styles.TracksListItem__text}></span>
                {Tracks[key]}
              </Col>
            ))}
          </Row>
        </section>
        <h2> Assista </h2>

        <Row
          style={{
            marginTop: "50px",
            marginBottom: "20px",
            justifyContent: "space-between",
          }}
        >
          <Col>
            <h4>(14/12) Esquenta - com Cami Martins</h4>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/K09-nxC3J20"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          <Col>
            <h4>(16/12) Dia 1 - DevFest Sudeste 2022</h4>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/23-jd51zLqo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
        <h3 style={{ marginTop: "80px" }}>
          (17/12) Dia 2 - DevFest Sudeste 2022
        </h3>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <h4>Trilha Cloud</h4>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/7VzWvr3i1Pg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          <Col>
            <h4>Trilha Mobile</h4>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dDqLBDVnC68"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <h4>Trilha DevOps/Infra</h4>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/hm2lOcYIAlw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          <Col>
            <h4>Trilha Carreiras</h4>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/8al7ZzBmZKM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
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
                    <TimeSection startTime="20:00" endTime="21:00" />
                  </Col>
                  <Col>
                    <CardSection
                      trackColor="dark"
                      styleClass={"CardDefault"}
                      event={events.regular[3]}
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
                      event={events.regular[0]}
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
                      event={events.mobile[0]}
                    />
                    <CardSection
                      trackColor="danger"
                      styleClass={"CardCarreira"}
                      event={events.carreira[0]}
                    />
                    <CardSection
                      trackColor="success"
                      styleClass={"CardCloud"}
                      event={events.cloud[0]}
                    />
                    <CardSection
                      trackColor="warning"
                      styleClass={"CardDevops"}
                      event={events.devops[0]}
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
                      event={events.mobile[1]}
                    />
                    <CardSection
                      trackColor="danger"
                      styleClass={"CardCarreira"}
                      event={events.carreira[1]}
                    />
                    <CardSection
                      trackColor="success"
                      styleClass={"CardCloud"}
                      event={events.cloud[1]}
                    />
                    <CardSection
                      trackColor="warning"
                      styleClass={"CardDevops"}
                      event={events.devops[1]}
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
                      event={events.mobile[2]}
                    />
                    <CardSection
                      trackColor="danger"
                      styleClass={"CardCarreira"}
                      event={events.carreira[2]}
                    />
                    <CardSection
                      trackColor="success"
                      styleClass={"CardCloud"}
                      event={events.cloud[2]}
                    />
                    <CardSection
                      trackColor="warning"
                      styleClass={"CardDevops"}
                      event={events.devops[2]}
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
                      event={events.regular[1]}
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
                      event={events.regular[2]}
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
