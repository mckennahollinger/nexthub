import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

export class Login extends React.Component{
    render(){
        return (
            <div>
                <Container>
                    <Row>
                        <Col><div class ="login-bg"></div></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}