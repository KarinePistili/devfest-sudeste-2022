/*eslint-disable*/
import React, { useState } from "react";
import {
    Col,
    Container,
    Row,
} from "reactstrap";

import styles from 'styles/Tracks.module.css';

const Tracks: Record<string, string> = {
    mobile: 'Mobile',
    carreiras: 'Carreira',
    cloud: 'Cloud',
    devops: 'Infra e DevOps',
}

const TracksSection: React.FC = ({ }) => {

    return (
        <>
            <Container id="tracks">
                <Row>
                    <h1> Trilhas </h1>
                    <p className={styles.Description}>
                        O evento será dividido em 4 trilhas:
                    </p>
                </Row>
            </Container>
            <section className={styles.Tracks}>
                <ul className={styles.TracksList}>
                    {Object.keys(Tracks).map(key => (
                        <li className={styles.TracksListItem} key={key}>
                            <span className={styles.TracksListItem__text}></span>
                            {Tracks[key]}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default TracksSection;
