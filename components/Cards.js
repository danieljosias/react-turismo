import React from 'react'
import './Cards.css';
import CardItem from './CardItem.js';

function Cards() {
    return (
        <div>
            <div className="cards">
                <h1>Cachoeiras RJ</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__item">
                            <CardItem 
                            src="img/card01-1.png"
                            text="Cachoeira do Mendanha"
                            label='Aventura'
                            path='/lugares'
                            />
                            <CardItem 
                            src="img/card01-2.png"
                            text="Cachoeira do Horto"
                            label='Aventura'
                            path='/lugares'
                            />
                            <CardItem 
                            src="img/card01-3.png"
                            text="Cachoeira do Chuveiro"
                            label='Aventura'
                            path='/lugares'
                            />
                        </ul>
                    </div>
                </div>

                <h1>Pontos Turísticos RJ</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__item">
                        <CardItem 
                            src="img/card02-1.png"
                            text="Cristo Redentor"
                            label='Turismo'
                            path='/lugares'
                            />
                            <CardItem 
                            src="img/card02-2.png"
                            text="Pão de Açucar"
                            label='Turismo'
                            path='/lugares'
                            />
                            <CardItem 
                            src="img/card02-3.png"
                            text="Arcos da Lapa"
                            label='Turismo'
                            path='/lugares'
                            />
                        </ul>
                    </div>
                </div>

                <h1>Praias RJ</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__item">
                        <CardItem 
                            src="img/card03-1.png"
                            text="Praia Vermelha"
                            label='Praias'
                            path='/lugares'
                            />
                             <CardItem 
                            src="img/card03-2.png"
                            text="Praia de Grumari"
                            label='Praias'
                            path='/lugares'
                            />
                             <CardItem 
                            src="img/card03-3.png"
                            text="Praia do Recreio"
                            label='Praias'
                            path='/lugares'
                            />
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards

