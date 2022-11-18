async function fetchGraphQL(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractCardEntries(fetchResponse) {
  return fetchResponse?.data?.cardCollection?.items
}

export async function getAllCards() {
  const entries = await fetchGraphQL(
    `query {
      cardCollection {
        items {
          title,
          body,
          logo{
            url
          }
          sys {
            id
          }
        }
      }
    }`
  )
  return extractCardEntries(entries)
}
