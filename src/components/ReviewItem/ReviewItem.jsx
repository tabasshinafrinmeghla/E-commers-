/* eslint-disable no-unused-vars */
import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
const ReviewItem = ({product ,handleRemoveFromCart}) => {
  // eslint-disable-next-line react/prop-types
  const {id,price,name,img,quantity }=product;
  return (
    <div className='reviewItem'>
      {/* <h2>Review Item:</?h2> */}
      
        <div className='reviewItemBox'>
          <div>
              <img src={img} alt="" />
          </div>
        <div >
          
           <h3 className='reviewItemBoxText'>Name:{name} </h3>
           <h5 className='reviewItemBoxText'>Price: <span className='orange-text'> {price}</span></h5>
           <h5 className='reviewItemBoxText'>Quantity: <span className='orange-text'> {quantity}</span></h5>
        </div>
      </div>
      
      <button  onClick={() => handleRemoveFromCart (id)} className='reviewItemBtn'><FontAwesomeIcon icon={faTrashAlt} /></button>
    </div>
  );
};

export default ReviewItem;