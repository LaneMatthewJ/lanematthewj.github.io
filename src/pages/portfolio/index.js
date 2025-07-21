import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { PortfolioCard } from "./portfolioCard";


export const Portfolio = () => {
  const [projects, setProjects] = React.useState([]);
  const [radioValue, setRadioValue] = React.useState('all');

  const radios = [
    { name: 'All', value: 'all' },
    { name: 'Software', value: 'software' },
    { name: 'Course Material', value: 'courseMaterial' },
    { name: 'Publications', value: 'journal' },
    { name: 'Posters/Talks', value: 'conference' },
  ];


  React.useEffect(() => {
    const sortedPortfolio = dataportfolio.sort((a, b) => new Date(b.date) - new Date(a.date));

    const filteredData = sortedPortfolio.filter( project => {
      if (radioValue === 'all') return true
      return radioValue ===  project.type
    })

    setProjects(filteredData);
  }, [radioValue]);


  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          <ButtonGroup className="mb-2">
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Row>
        <div className="mb-5 po_items_ho">
          {projects.map((data, i) => {
            return (
              <PortfolioCard data={data} elementKey={i} />
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
