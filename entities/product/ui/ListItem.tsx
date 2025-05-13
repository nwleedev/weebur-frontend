import { ProductModel } from "@/features/product/model";
import { LazyImage } from "@/shared/ui/image";

export interface ProductListItemProps {
  product: ProductModel;
}

const ProductListItem = (props: ProductListItemProps) => {
  const { product } = props;
  return (
    <div className="flex border border-gray-100 rounded-xl shadow-md p-4 bg-white max-w-2xl w-full items-center gap-4 transition-shadow hover:shadow-lg">
      <LazyImage
        src={product.thumbnail}
        alt={product.title}
        className="w-28 h-28 object-contain rounded-lg flex-shrink-0"
      />
      <div className="flex flex-col flex-1 justify-between">
        <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-yellow-500 font-semibold">
            {product.rating}★
          </span>
          <span className="text-gray-500 text-xs">
            ({product.reviews} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
