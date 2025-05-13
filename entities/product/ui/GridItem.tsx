import { ProductModel } from "@/features/product/model";
import { LazyImage } from "@/shared/ui/image";

export interface ProductGridItemProps {
  product: ProductModel;
}

const ProductGridItem = (props: ProductGridItemProps) => {
  const { product } = props;
  return (
    <div className="border border-gray-100 rounded-xl shadow-md p-4 bg-white max-w-xs flex flex-col items-center transition-shadow hover:shadow-lg">
      <LazyImage
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-44 object-contain rounded-lg mb-3"
      />
      <h3 className="text-lg font-semibold mb-1 text-center">
        {product.title}
      </h3>
      <p className="text-sm text-gray-600 text-center min-h-[40px] line-clamp-3 mb-1">
        {product.description}
      </p>
      <div className="flex items-center gap-2 mt-auto">
        <span className="text-yellow-500 font-semibold">{product.rating}★</span>
        <span className="text-gray-500 text-xs">
          ({product.reviews} reviews)
        </span>
      </div>
    </div>
  );
};

export default ProductGridItem;
