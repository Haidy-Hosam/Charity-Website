import './Productcard.css'


const Productcard = (props) => {
  return (
    <div className="product_box">
      <img src={props.img} alt="bag" />

      <div className="description">
        <div className="title-price">
            <h2>{props.title}</h2>
            <p className="price">{props.Price}</p>
        </div>
        
        <p className="details">
        {props.Details}
        </p>
        <div className="btn-center"><button className="product-btn">اشتري الان</button></div>
      </div>
    </div>
  );
};

export default Productcard;

