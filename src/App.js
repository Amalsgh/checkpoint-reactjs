import React from 'react';
import './App.css';
import{Navbar, Container, Nav, Carousel, Button} from "react-bootstrap"

function App() {
  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <a href='#'>
          <img src='https://us.123rf.com/450wm/quartadis/quartadis2002/quartadis200200136/140606814-ensemble-de-chiffres-pour-les-%C3%A9checs-jeu-de-soci%C3%A9t%C3%A9-de-strat%C3%A9gie-.jpg?ver=6' alt='logo'></img>
          </a>
          
          <Nav className="me-auto">
            <Nav.Link href="#acceuil">Acceuil</Nav.Link>
            <Nav.Link href="#Qui sommes nous ?">Qui sommes nous ?</Nav.Link>
            <Nav.Link href="#nos offres">Nos offres</Nav.Link>
            <Nav.Link href="#exercices">Exercices</Nav.Link>
            <Nav.Link href="#membres">Membres</Nav.Link>
            <Nav.Link href="#S'inscrire">S'inscrire</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <div className='titre'> 
      <h1>ECHEC ET MAT !</h1>
      <Button variant="outline-dark">Cours en ligne</Button>
      </div>
      
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          img src="https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1588412079929-790b9f593d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    <h2>R??GLE DU JEU D?????CHECS</h2>
    <div className='txt'>
    <p>Initiez vos proches au jeu d?????checs ! Je vous propose ici, une r??gle du jeu d?????checs, ?? la fois simplifi??e, intelligible et synth??tique. Elle comblera les petits comme les grands. Aussi, pour les personnes (joueurs, collectionneurs ou autres) qui se demandent comment placer les pi??ces et les pions sur l?????chiquier, voir le diagramme ci-dessous</p>
      <p>??? Notez la couleur de la case en bas ?? droite : toujours blanche !</p>
      <p>??? Ainsi que la position des Cavaliers, ne pas les inverser avec les Fous ! (comme on le voit trop souvent sur certaines photos ?? artistiques ?? de personnes ne sachant pas jouer): A chaque pi??ce son emplacement.</p>
      <p>??? La Dame (et non la Reine. Le ?? R ?? majuscule ??tant r??serv?? au Roi dans la notation alg??brique) ??galement : toujours sur sa couleur : Dame blanche sur case blanche et Dame noire sur case??? noire (vous ??tes dou??) !</p>
      <p>??? On dit ??galement Cavalier. On ne doit pas dire Cheval ni canasson ni poney.</p>
      <p>??? Deuxi??me ??l??ment important (selon moi), jeu d?????checs prend un ?? s?? .</p>
      <p>??a y est, vous ??tes (presque) un joueur d?????checs  Emotic??ne Roi</p>
    </div>
    <div className='txt2'>
      <h3>NOTRE MISSION</h3>
      <p>Donner aux enfants le pouvoir de d??velopper leur concentration, leur calcul et leur cr??ativit?? et aux adultes l???envie d???apprendre ?? r??soudre des exercices pour stimuler leur strat??gie et leur m??moire.</p>
      <p>Se d??velopper en s???amusant !</p>
    </div>
    <hr></hr>
    <div className='footer'>
      <p>??Copyright 2022</p>
    </div>

    </div>
  );
}

export default App;
