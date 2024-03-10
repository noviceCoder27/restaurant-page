import styled from 'styled-components'

const ErrorPage = styled.div`
height: 100dvh;
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-color: #edeff2;
`

const Header = styled.h1`
font-size: 5rem;

`

const Text = styled.h3`
transform: translateY(-2rem)
`


const Error = () => {
  return (
    <ErrorPage>
      <Header>404</Header>
      <Text>Page Not Found</Text>
    </ErrorPage>
  )
}

export default Error
