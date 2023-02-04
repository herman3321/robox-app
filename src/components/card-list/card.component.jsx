
import './card-list.style.css';

const Card =({monster}) => {
    const{ name, email, id, phone, website}= monster;
    return (
            
                <div className='card-container' key={id}>
                    <img alt={`monster ${name}`}
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{website}</p>
                    

                    </div>

    )
}

     

export default Card;