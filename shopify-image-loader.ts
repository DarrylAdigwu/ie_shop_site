interface ShopifyLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function shopifyImageLoader({ src, width, quality }: ShopifyLoaderProps): string {

  if(!src.startsWith("http") || !src.includes("cdn.shopify.com")) {
    return src;
  }

  const url = new URL(src);

  url.searchParams.set("width", width.toString());

  if(quality) {
    url.searchParams.set("quality", quality.toString());
  }

  return url.toString();
}