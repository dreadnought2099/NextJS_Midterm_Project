import Link from "next/link";

export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

const Card = ({ product }: { product: Product }) => {
    return (
      <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer group">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          {/* Group-hover applies the hover effect when the card is hovered */}
          <h2 className="text-lg font-bold text-gray-700 group-hover:text-[var(--text-color)] truncate">
            {product.title}
          </h2>
          <p className="text-sm text-gray-500 group-hover:text-[var(--text-secondary-color)] line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>
    );
  };
  
const Page = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    return <p className="text-center text-red-500">Failed to load products.</p>;
  }

  const data = await res.json();
  const products: Product[] = data.products;

  return (
    <div className="min-h-screen py-8 px-6 bg-gray-100">
      <div className="mb-6">
        <Link href="/" className="button">
          &larr; Back
        </Link>
      </div>

      <h1 className="text-center text-3xl font-extrabold text-secondary-color mb-6">
        All Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {products.length > 0 ? (
          products.map((p) => <Card key={p.id} product={p} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
