import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const educationCard = (data, elementKey) => {
    return (
        <Card key={elementKey} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{data.audience}</ListGroup.Item>
                <ListGroup.Item>{data.level}</ListGroup.Item>
                <ListGroup.Item>{data.topic}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href={data.link}>See Material</Card.Link>
            </Card.Body>
        </Card>
    )
}



const softwareCard = (data, elementKey) => {
    return (
         <Card key={elementKey} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{data.language}</ListGroup.Item>
                <ListGroup.Item>{data.topic}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href={data.link}>See Software Page</Card.Link>
            </Card.Body>
        </Card>
    )
}

const journalCard = (data, elementKey) => {
    return (
        <Card key={elementKey} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{data.language}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href={data.link}> Access Paper </Card.Link>
            </Card.Body>
        </Card>
    )
}

const conferenceCard = (data, elementKey) => {
    return (
        <Card key={elementKey} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{data.language}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href={data.link}> Access Paper </Card.Link>
            </Card.Body>
        </Card>
    )
}

export const PortfolioCard =({data, elementKey}) => {
    return (
        <div key={elementKey} className="po_item">
            <img src={data.img} alt="" />
            <div className="content">
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <a href={data.link}>view project</a>
            </div>
        </div>
    );
};
