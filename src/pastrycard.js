import { Card,Button} from 'react-bootstrap';
import { useState } from 'react';
const PastryData = [
  { name: 'Choux', price: 399, image: 'pastry/choux.jpeg',id:1},
  { name: 'Filo', price: 299, image: 'pastry/filo.jpeg',id:2 },
  { name:'Flaky',price: 499, image:'pastry/flaky.jpeg',id:3},
  { name:'Puff', price:599,image:'pastry/puff.jpeg',id:4},
  { name:'Shortcrust', price:199,image:'pastry/shortcrust.jpeg',id:5}
];
const PastryCard = ({addToCart  }) => {
  const [showMessage, setShowMessage] = useState(false);
  const handleAddToCartClick = (pastry) => {
    addToCart(pastry);
    setShowMessage({ [pastry.name]: true });
    setTimeout(() => {
      setShowMessage({ [pastry.name]: false });
    }, 2000);
  };
  return (
    <div>
      <h3 className="mt-4 ms-4">Awesome pastry collection:</h3>
      <div className="d-flex flex-nowrap scroll" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
        {PastryData.map((pastry, index) => (
          <Card key={index} style={{ minWidth: '330px', marginRight: '10px' }} className="mycard">
            <Card.Img variant="top" src={pastry.image} alt={pastry.name} className="h-50 mt-2 mx-2 cake" />
            <Card.Body>
              <Card.Title>{pastry.name}</Card.Title>
              <Card.Text>
                2pcs- &#8377;{pastry.price} 
                </Card.Text>
                <Button className="mt-1" variant="light" onClick={()=>handleAddToCartClick(pastry)}>Add to cart</Button>
                {showMessage[pastry.name] && <p className='mb-3'>Item added to cart!</p>}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PastryCard;
