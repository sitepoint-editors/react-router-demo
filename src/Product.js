import { useParams } from 'react-router-dom';

const Product = ({ data }) => {
  const { productId } = useParams();
  const product = data.find((p) => p.id === Number(productId));

  return (
    <div>
      {product ? (
        <div>
          <h3> {product.name} </h3>
          <p>{product.description}</p>
          <hr />
          <h4>{product.status}</h4>
        </div>
      ) : (
        <h2>Sorry. Product doesn't exist.</h2>
      )}
    </div>
  );
};

export default Product;
