

export type ShopifySeoType = {
  title: string | null;
  description: string | null;
};

export type ShopifyImageType = {
  url: string;
  altText: string
};

export type ShopifyVariantType = {
  id: string;
  title: string;
  availableForSale?: boolean | null;
  price: { 
    amount: string;
    currencyCode: string;
  };
  compareAtPrice?: {
    amount: string;
    currencyCode: string;
  } | null
};

export type ShopifyProductType = {
  product: ShopifyProductFieldsType | null;
};

export type ShopifyProductFieldsType = {
  id: string;
  title: string;
  handle: string;
  description: string;
  seo: ShopifySeoType;
  options: Array<{
    name: string;
    values: string[];
  }>;
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    }
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    }
  };
  images: {
    edges: Array<{ node: ShopifyImageType }>
  };
  variants: {
    edges: Array<{ node: ShopifyVariantType }>
  };
}

export type ShopifyCollectionType = {
  collection: {
    id: string;
    title: string;
    handle: string;
    description: string;
    products: {
      edges: Array<{ node: ShopifyProductFieldsType }>
    }
  } | null
}