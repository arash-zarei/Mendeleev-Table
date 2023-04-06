import { gql } from "@apollo/client"

const GET_PROPERTIES_ELEMENT = gql`
query getPropertiesElement($slug: String!) {
  element(where: {slug: $slug}) {
    atomicmass
    atomicnumber
    atomicradius
    bgColor
    boilingpoint
    category
    electronaffinity
    density
    electronegativity
    ionizationenergy
    meltingpoint
    name
    oxidationstates
    standardstate
    symbol
    yeardiscovered
    electronconfiguration {
      raw
    }
  }
}
`
export { GET_PROPERTIES_ELEMENT };
