import Link from "next/link";
import Image from "next/image";

// Export props of the Product interface
export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

const Card = ({ product }: { product: Product }) => {
  return (
    //Group is declared here
    <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer group">
      {/* <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover"
        /> */}
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={200}
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
// Fetches and displays the api
const Page = async () => {
  // Performs a fetch request
  const res = await fetch("https://dummyjson.com/products");

  // Checks if fetch request was successful
  if (!res.ok) {
    return <p className="text-center text-red-500">Failed to load products.</p>;
  }

  // Converts the response into a JSON object
  const data = await res.json();
  const products: Product[] = data.products;

  // Defines the React Component that will be rendered when the page component is called
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Back Button and Heading Container */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-white py-4 px-6 shadow-md">
        <div className="flex items-center space-x-4">
          <div>
            <Link href="/" className="button text-lg">
              &larr; Back
            </Link>
          </div>
          <h1 className="text-3xl font-extrabold text-secondary-color">
            All Products
          </h1>
        </div>
      </div>

      {/* Content Below the Header */}
      <div className="pt-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {products.length > 0 ? (
            products.map((p) => <Card key={p.id} product={p} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
