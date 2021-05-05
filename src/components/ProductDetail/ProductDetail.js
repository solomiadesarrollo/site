import "./ProductDetail.css";
// import { ReactComponent as BackArrow } from "../../assets/icons/backarrow.svg";
import { useHistory } from "react-router";
// import WaButton from "../WaButton";

const ProductDetail = ({ title, imageUrl, price, description, size, cares }) => {
  let history = useHistory();
  return (
    <div className="container">
      <div className="card">
        <div className="product">
          <img src={imageUrl} />
        </div>
        <div className="info">
          <div className="productName">
            <h1 className="big">{title}</h1>

          </div>
          <div className="description">
            <h3 className="title">DESCRIPCION</h3>
            <p className="text">{description}</p>
          </div>
          <div className="description">
            <h3 className="title">TAMAÑO</h3>
            <p className="text">{size}</p>
          </div>
          <div className="description">
            <h3 className="title">CUIDADOS</h3>
            <p className="text">{cares}</p>
          </div>

          <div className="buy-price">
            <a href="#" className="buy"><i className="fas fa-shopping-cart"></i>HACE TU PEDIDO</a>
            <div className="price">
              <i className="fas fa-dollar-sign"></i>
              <h2>{price}</h2>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

//CÓDIGO MARTÍN

// const ProductDetail = ({ title, imageUrl, price, description }) => {
//   let history = useHistory();
//   return (
//     <div className="productdetail-container">
//       <div className="productdetail-img">
//         <img src={imageUrl} />
//       </div>
//       <div className="productdetail-info">
//         <div className="productdetail-header">
//           <div className="productdetail-title">
//             <h1>{title}</h1>
//             <h2>{price}</h2>
//           </div>
//           <div className="productdetail-buttons">
//             <button onClick={() => history.goBack()} className>
//               <BackArrow />
//             </button>
//           </div>
//         </div>
//         <h3>Descripción</h3>
//         <p>{description}</p>
//         <h3>Tamaño</h3>
//         <p>20 x 30 cm</p>
//         <h3>Cuidado</h3>
//         <p>
//           El ciudado es con una esponja/trapo humedo frotar sobre la superficie
//           de cuerina y secar con una toalla blanca y limpia.
//         </p>
//         <WaButton text="HACE TU PEDIDO" />
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
