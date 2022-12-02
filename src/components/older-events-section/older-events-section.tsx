/*eslint-disable*/
import React, { useState } from "react";
import {
    Col,
    Container,
    Row,
} from "reactstrap";

import Image from 'next/image';
import styles from 'styles/OlderEvents.module.css';

const OlderEvenstsSection: React.FC = ({ }) => {

    return (
        <>
            <Container id="about">
                <Row>
                    <Col lg={6} sm={12}>
                        <h1> O que é o Devfest? </h1>

                        <p className={styles.Description}>

                            O DevFest é um evento organizado por comunidades do Google Developers Group (GDG), para a troca de conhecimento e fomento tecnológico das regiões. A conferência é preparada para profissionais, estudiosos, pessoas desenvolvedoras e demais pessoas com interesse em aprendizado, ambiente de troca de experiências e networking.
                        </p>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className={styles.VideoContainer}><iframe src='https://www.youtube.com/embed/8VbKty9jtdM' allowFullScreen></iframe></div>

                    </Col>
                </Row>

            </Container>

            <div className={styles.MarqueeOuter}>
                <div className={styles.MarqueeInner}>
                    <div className={styles.ConstructItems}>
                        <div className={styles.ConstructItem}>A magia do Firebase</div>
                        <div className={styles.ConstructItem}>Acessibilidade no Android</div>
                        <div className={styles.ConstructItem}>Carreiras: processos seletivos</div>
                        <div className={styles.ConstructItem}>CNN e TensorFlow</div>
                        <div className={styles.ConstructItem}>Inteligência Artifical com Google Vertex</div>
                        <div className={styles.ConstructItem}>Boas práticas com Cloud Composer</div>
                        <div className={styles.ConstructItem}>Mulher Tech Lead</div>
                        <div className={styles.ConstructItem}>E muito mais!</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OlderEvenstsSection;

