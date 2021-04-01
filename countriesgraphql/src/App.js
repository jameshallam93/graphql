import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client"
import {onError} from "@apollo/client/link/error"
import GetCountries from "./components/GetCountries"

const errorLink = onError(({graphqlErrors, networkErrors})=> {
  if (graphqlErrors){
    graphqlErrors.map(({message, location, path})=>
      alert(`graphql error ${message}`)
    )
  }

})

const link = from([
  errorLink, 
  new HttpLink({uri: "https://countries.trevorblades.com/"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link:link
})

function App() {
  return (
    <ApolloProvider client= {client}>
      {" "}
      <GetCountries/>
    </ApolloProvider>
  );
}

export default App;
