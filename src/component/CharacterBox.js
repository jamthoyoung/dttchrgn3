import React from 'react';
import { Form, Card, Container, Row, Col } from 'react-bootstrap';
import NameContainer from '../containers/NameContainer.js';
import AgeContainer from '../containers/AgeContainer.js';
import HairContainer from '../containers/HairContainer.js';
import AttributeBoxContainer from '../containers/AttributeBoxContainer.js';
import KindredInputContainer from '../containers/KindredInputContainer.js';
import RerollContainer from '../containers/RerollContainer.js';
import WeightContainer from '../containers/WeightContainer.js';
import HeightContainer from '../containers/HeightContainer.js';
import ClassContainer from '../containers/ClassContainer.js';
import GenderContainer from '../containers/GenderContainer.js';
import GoldContainer from '../containers/GoldContainer.js';
import PersonalAddsContainer from '../containers/PersonalAddsContainer.js';
import LevelContainer from '../containers/LevelContainer.js';
import PrintContainer from '../containers/PrintContainer.js'
import Trademark from './Trademark.js'
import PortraitContainer from '../containers/PortraitContainer.js'
import TalentContainer from '../containers/TalentContainer.js'
import RogueTalentContainer from '../containers/RogueTalentContainer.js'

class CharacterBox extends React.Component {
  render(){
    return (
      <Container fluid>
      <Row>
        <Col xs={12}>
            Character Dice Roller for Deluxe Tunnels and Trolls
        </Col>
      </Row>
      <Form>
      <Row>
        <Col xs={6} sm={8} md={9}>
          <Row>
          <Col xs={12} sm={6} md={4}>
            <NameContainer />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <KindredInputContainer />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <ClassContainer />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <GenderContainer />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <AgeContainer />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <HairContainer />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <TalentContainer />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <RogueTalentContainer />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <RerollContainer />
          </Col>
          </Row>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <div>
            <PortraitContainer />
          </div>
        </Col>
      </Row>
      </Form>
          <Card header="Generated Results">
              <AttributeBoxContainer />

              <Row>
                <Col xs={6} sm={4} md={3} lg={2}>
                  <PersonalAddsContainer />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                  <LevelContainer />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                  <WeightContainer />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                  <HeightContainer />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                  <GoldContainer />
                </Col>
              </Row>
            <Row>
              <Col xs={12}>
                <PrintContainer/>
              </Col>
            </Row>
          </Card>
          <Row>
            <Col xs={12}>
              <Trademark/>
            </Col>
          </Row>
     </Container>
    );
  }
}

export default CharacterBox;
