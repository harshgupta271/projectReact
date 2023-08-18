import { Card,Button} from 'react-bootstrap';
import { useState } from 'react';
const cakesData = [
  { id:11,name: 'Blackforest cake', price: 799, image: 'cakesss/blackforest.jpeg' },
  { id:12,name: 'Blueberry cake', price: 699, image: 'cakesss/blueberry.jpeg' },
  { id:13,name:'Chocolate truffle',price: 899, image:'cakesss/chocolate truffle .jpeg'},
  { id:14,name:'Plum cake', price:599,image:'cakesss/plum cake.jpeg'},
  { id:15,name:'Red velvet', price:999,image:'cakesss/red velvet.jpeg'},
  { id:16,name:'Teddy cake', price:999,image:'cakesss/teddy cake.jpeg'},
  { id:17,name:'Vanilla cake', price:699,image:'cakesss/vanilla.jpeg'},
  { id:18,name:'White forest', price:999,image:'cakesss/white forest.jpeg'}
];

const CakeCard= ({addToCart}) => {
  const [showMessage, setShowMessage] = useState(false);
  const handleAddToCartClick = (cake) => {
    addToCart(cake);
    setShowMessage({ [cake.name]: true });
    setTimeout(() => {
      setShowMessage({ [cake.name]: false });
    }, 2000);
  };
  return (
    <div>
      <h3 className="mt-4 ms-4">Priceless cake collection:</h3>
      <div className="d-flex flex-nowrap scroll" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
        {cakesData.map((cake, index) => (
          <Card key={index} style={{ minWidth: '330px', marginRight: '10px' }} className="mycard">
            <Card.Img variant="top" src={cake.image} alt={cake.name} className="h-50 mt-2 mx-2 cake" />
            <Card.Body>
              <Card.Title>{cake.name}</Card.Title>
              <Card.Text>
                500gm- &#8377;{cake.price} 
                </Card.Text>
                <Button className="mt-1" variant="light" onClick={()=>handleAddToCartClick(cake)}>Add to cart</Button>
                {showMessage[cake.name] && <p className='mb-3'>Item added to cart!</p>}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CakeCard;
