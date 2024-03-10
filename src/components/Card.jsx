import styled from 'styled-components';
import NewLabel from './../assets/new.png'
import { Stack } from '@mui/material';
import {css} from 'styled-components'


const StyledCard = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
height: 100%;
margin-right: 1rem;
`

const ImageContainer = styled.div`
position: relative;
@media (min-width: 464px) {
  min-width: 250px
}

@media (min-width: 1024px) {
  min-width: 300px;
}

`

const Image = styled.img`
width: 100%;
height: 100%;
border-radius: 5px 5px 0 0;
`

const FooterStyles = css`
background-color: white;
display: flex;
padding: 1rem;
align-items: center;
height: 20%;
border: 2px solid #d1d1d1;
border-radius: 0 0 5px 5px;
border-top: none;
`
const CardFooter = styled.div`
${FooterStyles}
justify-content: space-between;
`

const CardFooterMain = styled.div`
${FooterStyles}
min-height: 100px
`


const Button = styled.button`
cursor: pointer;
color: #ff264e;
background: white;
border: none;
font-weight:bold;
margin-top: 1rem;
font-size: clamp(0.8rem,1vw,1rem)
`

const Name = styled.p`
font-weight: 600;
margin-bottom: 0.2rem;
font-size: clamp(0.8rem,1vw,1.2rem);
`

const Location = styled.p`
color: #8f8f8f;
margin: 0;
font-size: clamp(0.8rem,0.8vw,1rem);
font-weight: 500
`

const Label = styled.img`
position: absolute;
width: 30%;
top: -10px;
left: -10px
`

const Circle = styled.div`
height: 5px;
width: 5px;
background-color: gray;
border-radius: 50%;
`
const Price = styled.span`
font-weight: 600;
color: #ff264e;
`  

const GrayText = styled.p`
color: gray;
`

const Card = ({frequentOrder,data}) => {

  return (
    <StyledCard>
        <ImageContainer style = {{height: frequentOrder ? "80%": "50%"}}>
            {/* <Label src = {NewLabel} alt = "Label" /> */}
            <Image src = {data?.imgUrl} alt = "Food image" />
        </ImageContainer>
        {frequentOrder ? <CardFooter>
            <div>
              <Name>{data?.name}</Name>
              <Location>{data?.location}</Location>
            </div>
            <Button>RE-ORDER</Button>
        </CardFooter>:
        <CardFooterMain>
          <div>
            <Name>{data?.name}</Name>
            <Stack direction = "row" alignItems = "center" gap = "0.5rem">
              <GrayText><Price>₹{data?.price}/-</Price> per head</GrayText>
              <Circle></Circle>
              <GrayText>{data?.totalDishes} dishes</GrayText>
            </Stack>
            <Stack direction = "row" justifyContent= "space-between">
              <Stack direction = "row" >
                <div>
                  <p>{data?.rating}</p>
                </div>
                <GrayText>{data?.totalRatings} ratings</GrayText>
              </Stack>
              <Stack direction = "row" marginBottom = "1rem">
                <p>Red</p>
                <p>Green</p>
              </Stack >
            </Stack>
          </div>
        </CardFooterMain>}
    </StyledCard >
    
  )
}

export default Card
