import React from 'react';
import BaseLayout from '../layouts/base-layout';
import { Col, Row, Container } from 'reactstrap';

const SpeakersPage = ({ }) => {
    const sectionStyle = {
        marginTop: '60px'
    }

    const _center = {
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <>
            <Container>
                <div id="sponsors" style={{ margin: "60px", height: '90vh' }}>
                    <h1>Patrocinadores e Apoiadores</h1>



                    <Row style={{ ..._center, textAlign: 'center', marginTop: '120px' }}>
                        <h4> Que tal colocar sua marca neste evento?</h4>
                        <p>
                            <a style={{ textDecoration: 'underline' }} href="https://docs.google.com/presentation/d/18L58cFLqdb2kV4rjxGnXthOSjwuHb_duosIOJNBehZ4">
                                Clique aqui e acesse nosso midia kit!
                            </a>
                        </p>
                        <p>
                            Fale conosco pelo e-mail:
                            <a href="mailto:gdg.uberlandia@gmail.com" target="_blank" rel="noreferrer">gdg.uberlandia@gmail.com</a>
                        </p>
                    </Row>
                </div>
            </Container>
        </>
    )
}

SpeakersPage.layout = BaseLayout;



export default SpeakersPage
