import { ProductModel } from "@/features/product/model";
import ProductGridItem from "./GridItem";

export interface ProductGridProps {
  products: ProductModel[];
}

const ProductGrid = (props: ProductGridProps) => {
  const { products } = props;
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductGridItem key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductGrid;
