import './card.styles.css';

const Card = ({ itemAltPrefix, item: { id, name, email }}) => (
    <div key={id} className='card-container'>
        <img alt={`${itemAltPrefix} ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
)

export default Card;