import Image from "next/image";
import Link from "next/link";
import { shopifyFetch } from "@/lib/shopify";
import { ShopifyProductType } from "@/types/shopifyTypes";
import { GET_PRODUCT_QUERY } from "@/graphql/queries/products";
import { notFound } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiArrowLongLeft } from "react-icons/hi2";

interface Props {
  params: Promise<{ handle: string }>;
}

export default async function Product({ params }: Props) {

  const { handle } = await params;

  const response = await shopifyFetch<ShopifyProductType>({
    query: GET_PRODUCT_QUERY,
    variables: { handle }
  });

  const product = response?.data?.product;
  
  if(!product) {
    notFound()
  }

  const title = product.seo.title;
  const imageEdge = product.images.edges[0];
  const productImage = imageEdge.node;
  const price = product.variants.edges[0].node.price;

  const selectSizes = product.options[0].values.map((size, index) => {
    return(
      <option value={size} key={index}>
        {`Size: ${size}`}
      </option>
    )
  })
  
  console.log(response.data)
  console.log(productImage)
  return(
    <main id="main-product-content">
      <Link
        href={"/shop"}
        className="back-to-link"
      >
        <HiArrowLongLeft className="back-to-icon"/>
        Back to shop
      </Link>

      <div className="product-container">
        <div className="product-image-container">
          <Image 
            src={productImage.url}
            alt={productImage.altText}
            className="product-main-image"
            fill
          />
        </div>
        <section className="product-info">
          <div className="product-title">
            <p>{title}</p>
          </div>
          <div className="product-price">
            <p className="price-amount">{`$${price.amount}`}</p>
          </div>
        </section>
        <div className="product-page-btns">
          <div className="sizes-container">
            <label htmlFor="select-sizes" className="sr-only">Select a size:</label>
            <select
              name="select-sizes"
              id="select-sizes" 
              className="sizes-dropdown"
              defaultValue={"Select a size:"}
            >
              <option
                value={"Select a size:"}
                disabled
              >
                Select a size: 
              </option>
              {selectSizes}
            </select>
            <IoMdArrowDropdown className="drop-arrow"/>
          </div>
          <button className="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  )
}