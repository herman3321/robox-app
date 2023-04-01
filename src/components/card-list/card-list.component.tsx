import React from 'react'
import Card from './card.component';
import { Monster } from '../../App'

import './card-list.style.css';

type CardListProps ={ 
    monster: Monster[]
}

const CardList =({monster}: CardListProps) => (

        <div className='card-list'>
            {monster.map((monster) =>{
                return <Card key={monster.id} monster={monster}/>
            })}
        </div>
    
);

     

export default CardList;