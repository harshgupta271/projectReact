import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Foot(){
    return(
    <div className='text-center'> 
        <hr className='mt-4' />
        <p>Follow us on:</p> 
        <div className='d-flex justify-content-center'>
            
            <FontAwesomeIcon icon={faYoutube} size="2xl" className='mx-2 mt-2' />
            <FontAwesomeIcon icon={faFacebook} size="2xl" className='mx-2 mt-2' />
            <FontAwesomeIcon icon={faInstagram} size="2xl" className='mx-2 mt-2' />
            <FontAwesomeIcon icon={faTwitter} size="2xl" className='mx-2 mt-2' />

            
        </div>
        </div>  
    );
}
export default Foot;