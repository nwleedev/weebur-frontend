import { ProductModel } from "@/features/product/model";
import ProductListItem from "./ListItem";

export interface ProductListProps {
  products: ProductModel[];
}

const ProductList = (props: ProductListProps) => {
  const { products } = props;
  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductList;
