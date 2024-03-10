import styled from "styled-components"

const StyledButton = styled.button`

color: #5b5b5c;
font-weight: 600;
padding: 0 1rem;
background: #edeef0;
min-height: 30px;
margin-bottom: 1rem;
border-radius: 5px;
border: 2px solid #edeef0;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
&:hover {
  background: white;
  border: 2px solid gray;
}
`


const FilterButton = ({data}) => {
  let value = data;
  const checkIfArray = () => {
    if(Array.isArray(data)) {
      if(data[0]< 100) {
        value = `${data[0]}km - ${data[1]}km`;
      } else {
        value = `₹${data[0]} - ₹${data[1]}`
      }
    }
  }
  checkIfArray();

  return (
    <StyledButton>
        {value}
    </StyledButton>
  )
}

export default FilterButton
