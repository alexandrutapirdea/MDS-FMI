import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';

const Example = (props) => {
    return (
        <CardColumns>
            <Card>
                <CardImg top width="100%" src="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/shutterstock_96451256.jpg?itok=-YlDRkWt" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="http://www.bu.edu/today/files/2012/02/h_11-4411-PHYSICS-276.jpg" alt="Card image cap" />
            </Card>
            <Card>
                <CardImg top width="100%" src="http://blog.intostudy.com/wp-content/uploads/2013/01/INTO-Newcastle-teacher-Helen-1024x681.jpg" alt="Card image cap" />
            </Card>
            <Card>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://it.seattlecentral.edu/sites/it.seattlecentral.dev/files/inline-images/programming-student-at-seattle-central.jpg
" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card body inverse color="primary">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button color="secondary">Button</Button>
            </Card>
        </CardColumns>
    );
};

export default Example;