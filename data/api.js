export function getStrapiURL(path = "") {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_DOMAIN 
    }${path}`
  }

  // Helper to make GET requests to Strapi
export async function fetchAPI(path) {
    const requestUrl = getStrapiURL(path)
    const response = await fetch(requestUrl)
    const data = await response.json()
    return data
  }