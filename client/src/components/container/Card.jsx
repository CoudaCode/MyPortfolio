import { Card, Button } from "antd";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";
function ContainerCard() {
  return (
    <>
      <div className="container">
        <Row className="g-4">
          <Col xs="12" md="6" lg="3">
            <Card title="COMPETENCE" bordered={false} style={{}}>
              <Link to={"/addCompetence"}>
                <Button style={{ background: "#CDaBD6", color: "white" }}>
                  Ajouter +
                </Button>{" "}
                <br />
              </Link>
              <Link to={"/addCompetence"}>
                <Button
                  className="mt-2"
                  style={{ background: "#CDaBD6", color: "white" }}
                >
                  Voir tous
                </Button>
              </Link>
            </Card>
          </Col>
          <Col xs="12" md="6" lg="3">
            <Card title="EXPERIENCE" bordered={false} style={{}}>
              <Link to={"/addExperience"}>
                <Button style={{ background: "#CDaBD6", color: "white" }}>
                  Ajouter +
                </Button>{" "}
                <br />
              </Link>
              <Link to={"/addExperience"}>
                <Button
                  className="mt-2"
                  style={{ background: "#CDaBD6", color: "white" }}
                >
                  Voir tous
                </Button>
              </Link>
            </Card>
          </Col>
          <Col xs="12" md="6" lg="3">
            <Card title="FORMATION" bordered={false}>
              <Link to={"/addFormation"}>
                <Button style={{ background: "#CDaBD6", color: "white" }}>
                  Ajouter +
                </Button>{" "}
                <br />
              </Link>
              <Link to={"/addFormation"}>
                <Button
                  className="mt-2"
                  style={{ background: "#CDaBD6", color: "white" }}
                >
                  Voir tous
                </Button>
              </Link>
            </Card>
          </Col>
          <Col xs="12" md="6" lg="3">
            <Card title="PROJETS" bordered={false} style={{}}>
              <Link to={"/addProjet"}>
                <Button style={{ background: "#CDaBD6", color: "white" }}>
                  Ajouter +
                </Button>{" "}
                <br />
              </Link>
              <Link to={"/addProjet"}>
                <Button
                  className="mt-2"
                  style={{ background: "#CDaBD6", color: "white" }}
                >
                  Voir tous
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ContainerCard;