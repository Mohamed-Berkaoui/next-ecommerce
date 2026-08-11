import Link from "next/link";
import { notFound } from "next/navigation";

async function Page({ params }) {
  const { id } =await params;
  const res = await fetch(`http://localhost:3000/products/${id}`, {
    cache: "force-cache",//ssg
  });

//   if (!res.ok) {
//     notFound();
//   }

  const product = await res.json();

  return (
    <main className="product-details-page">
      <div className="product-details-shell">
        <div className="product-details-visual">
          <span className="product-details-category">{product.category}</span>
          <img
            src={product.image}
            alt={product.title}
            className="product-details-image"
          />
        </div>

        <section className="product-details-info">
          <Link href="/" className="product-details-backlink">
            ← Back to products
          </Link>

          <h1 className="product-details-title">{product.title}</h1>

          <div className="product-details-meta">
            <span className="product-details-price">${product.price}</span>
            {product.rating ? (
              <span className="product-details-rating">
                {product.rating.rate} rating · {product.rating.count} reviews
              </span>
            ) : (
              <span className="product-details-rating">No rating yet</span>
            )}
          </div>

          <p className="product-details-description">{product.description}</p>

          <div className="product-details-actions">
            <button
              type="button"
              className="product-details-button product-details-button--primary"
            >
              Add to cart
            </button>
            <button
              type="button"
              className="product-details-button product-details-button--secondary"
            >
              Buy now
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Page;
