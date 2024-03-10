import styled from "styled-components"

const StyledButton = styled.button`

color: #5b5b5c;
font-weight: 600;
padding: 0 1rem;
background: #edeef0;
min-height: 30px;
margin-bottom: 1rem;
border-radius: 5px;
border: 2px solid white;
&:hover {
  background: white;
  border: 2px solid gray;
}
`


const FilterButton = () => {
  return (
    <StyledButton>
        Filter Value
    </StyledButton>
  )
}

export default FilterButton
