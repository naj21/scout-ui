import { gql } from 'apollo-boost';

export const getCountriesQuery = gql`
    {
        countries {
            name
            code
            native
            languages {
                name
            }
            continent {
                name
            }
        }
    }
`

export const getCountryQuery = gql`
    query($code:String) {
        country(code:$code) {
            name
            code
            currency
            phone
            native
            continent {
                name
            }
        }
    }
`