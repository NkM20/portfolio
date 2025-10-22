type Repo = {
  name: string
  description: string | null
  html_url?: string
  url?: string
  language?: string | null
  stargazers_count?: number
}

export async function fetchPinnedOrRecent(username: string, token?: string, max = 6): Promise<Repo[]> {
  // Use the built-in fetch available in Next.js runtime instead of node-fetch
  if (token) {
    try {
      const query = `query($login:String!,$n:Int!){user(login:$login){pinnedItems(first:$n,types:REPOSITORY){nodes{...on Repository{name description url primaryLanguage{ name } stargazerCount }}}}}`;
      const res = await fetch('https://api.github.com/graphql',{
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':`bearer ${token}`,'User-Agent':'next-portfolio'},
        body:JSON.stringify({query,variables:{login:username,n:max}})
      })
      const json = await res.json()
      const nodes = (((json || {}).data || {}).user || {}).pinnedItems?.nodes || []
      if (Array.isArray(nodes) && nodes.length > 0) {
        return nodes.map((n:any) => ({
          name: n.name,
          description: n.description,
          html_url: n.url || n.html_url,
          language: n.primaryLanguage?.name,
          stargazers_count: n.stargazerCount || 0
        }))
      }
    } catch (e) {
      // fall through to REST
    }
  }
  // fallback to REST list of repos
  const url = `https://api.github.com/users/${username}/repos?per_page=${max}&sort=pushed`
  const headers: Record<string,string> = {'User-Agent':'next-portfolio'}
  if (token) headers.Authorization = `token ${token}`
  const res = await fetch(url,{headers})
  const data = await res.json()
  if (!Array.isArray(data)) return []
  return data.map((r:any)=>({name:r.name,description:r.description,html_url:r.html_url,language:r.language,stargazers_count:r.stargazers_count}))
}

export default fetchPinnedOrRecent
