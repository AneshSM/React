import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_Products = [
  {
    id: "p1",
    price: 6,
    title: "The first book",
    description: "handwriten book",
  },
  {
    id: "p2",
    price: 9,
    title: "The first book",
    description: "handwriten book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
