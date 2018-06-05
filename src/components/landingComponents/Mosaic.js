import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';

const Example = (props) => {
    return (
        <CardColumns>
            <Card>
                <CardImg top width="100%" src="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/shutterstock_96451256.jpg?itok=-YlDRkWt" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Anunturi Secretariat</CardTitle>
                    <CardSubtitle>Burse</CardSubtitle>
                    <CardText>Bursele se vor acorda in baza unei cereri depusa la secretariat pana pe 10.06.2018</CardText>
                    <Button>Detalii</Button>
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
                    <CardTitle>Sesiunea de vara</CardTitle>
                    <CardSubtitle>Program examene</CardSubtitle>
                    <CardText>Programul examenelor a fost stabilit si poate sa fie consultat online</CardText>
                    <Button>Detalii</Button>
                </CardBody>
            </Card>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle style={{ color:'white'}}>CARIERE V7.0</CardTitle>
                <CardText>Cariere este un targ de job-uri oragnizat de ASMI, aflat la a 7-a editie. Anul acesta vor participa peste 30 de firme din
                toate domeniile.</CardText>
                <Button>Vreau sa particip</Button>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://it.seattlecentral.edu/sites/it.seattlecentral.dev/files/inline-images/programming-student-at-seattle-central.jpg
" alt="Card image cap" />
                <CardBody>
                    <CardTitle>ERASMUS</CardTitle>
                    <CardSubtitle>Inscrierile vor incepe pe 8 iunie si se vor terminat pe 25 august. Va rugam sa citit regulamentul urmator : </CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button>Sa inceapa aventura</Button>
                </CardBody>
            </Card>
            <Card body inverse color="primary">
                <CardTitle>Rezultate test de laborator - Programare avansata pe obiecte</CardTitle>
                <CardText>Testele au fost corectare si notele sunt vizile din contul de student</CardText>
                <Button color="secondary">Button</Button>
            </Card>
        </CardColumns>
    );
};

export default Example;