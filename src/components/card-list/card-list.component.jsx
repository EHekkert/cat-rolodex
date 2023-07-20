import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ itemAltPrefix, listItems }) => {
    return (
        <div className='card-list'>
            {listItems.map((item) => {
                return (
                    <Card key={item.id} itemAltPrefix={itemAltPrefix} item={item} />
                )
            })}
        </div>           
    );
}

export default CardList;