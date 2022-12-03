import React from 'react';
import { speakers } from "../hooks/useSpeakers";
import BaseLayout from '../layouts/base-layout';
import { Col, Row, Container } from 'reactstrap';
import styles from '../styles/Speakers.module.css'
import SpeakerCard from 'components/speakers-section/speaker-card';
import { Speaker } from 'models/speaker';

const SpeakersPage = ({ }) => {
    const sectionStyle = {
        marginTop: '60px'
    }

    const _center = {
        justifyContent: 'center',
    }

    const constructSpeakerCol = (_speaker: Speaker) => {
        return (
          <Col
            lg="4"
            style={{ margin: "20px 20px" }}
            key={_speaker.name}
            className={styles.card_container}
          >
            <SpeakerCard {..._speaker} />
          </Col>
        );
    }

    return (
      <>
        <div style={{ margin: "60px 60px" }}>
          <Container fluid>
            <h1>Palestrantes</h1>

            <p style={{ marginTop: "60px" }}>
              As pessoas palestrantes do Devfest possuem uma variedade de
              experiências, que vão desde pessoas desenvolvedoras experientes à
              lideres de comunidades. As pessoas que palestram com frenquência
              se engajam em conversas técnicas em suas empresas, cidades e
              países. No Devfest você pode esperar palestras de Google Developer
              Experts, Tech Leads, pessoas desenvolvedoras e resolvedores de
              problemas.
            </p>
            <section style={sectionStyle}>
              <Row style={_center}>
                {speakers.map((speaker) => constructSpeakerCol(speaker))}
              </Row>
            </section>
          </Container>
        </div>
      </>
    );
}

SpeakersPage.layout = BaseLayout;



export default SpeakersPage
