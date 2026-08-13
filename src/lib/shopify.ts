const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
const accessToken = process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN;
const shopifyVersion = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION;

export async function shopifyFetch<T>({ query, variables }: { query: string, variables?: any }): Promise<{ data: T} | never> {
  
  try {
    const response = await fetch(`https://${domain}/api/${shopifyVersion}/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": accessToken!,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 }
    });

    if(!response.ok) {
      throw new Error(`Shopify API error: ${response.status}`);
    }

    const result = await response.json();
   
    return result;

  } catch (error) {
    console.error("Shopify Fetch Caught Exception:", error)
    throw error
  }
}


