import styled from 'styled-components';
import NewLabel from './../assets/new.png'
import { Stack } from '@mui/material';
import {css} from 'styled-components'
import StarIcon from './../assets/star.png'
import HeartIcon from './../assets/heart.svg'
import { checkAddedDate, checkFoodType, checkRating } from '../utils/cardValues';

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

const Circle = (css)`
height: 5px;
width: 5px;
border-radius: 50%;
`

const GrayCircle = styled.div`
${Circle}
background-color: gray;
`

const RedCircle = styled.div`
${Circle}
height: 8px;
width: 8px;
background: red;
`
const Price = styled.span`
font-weight: 600;
color: #ff264e;
`  

const GrayText = styled.p`
margin-top: 0.5rem;
color: gray;
`

const Rating = styled.div`
display: flex;
gap: 0.5rem;
align-items: center;
max-height: 24px;
padding: 0 0.5rem;
color: white;
border-radius: 5px;
margin-top: 1rem;
`

const Star = styled.img`
width: 100%;
max-width: 12px;
max-height: 18px
`
const Container = styled.div`
border: 2px solid black;
width: 14px;
height: 14px;
margin-top: 1rem;
display: flex;
justify-content: center;
align-items: center;
`

const ColorCircle = styled.div`
height: 8px;
width: 8px;
background-color: gray;
border-radius: 50%;
`

const NewCard = styled.div`
font-weight: 700;
position: absolute;
bottom: 1rem;
background: white;
left: 1rem;
display: flex;
gap: 0.5rem;
align-items: center;
padding: 0 0.8rem;
border-radius: 5px;
font-size: 70%;
`

const HeartContainer = styled.div`
position: absolute;
right: 1rem;
top: 1rem;
background: white;
padding: 0.5rem 0;
display: flex;
justify-content: center;
border-radius: 50%;
cursor: pointer;
&:hover {
  background: #fac3c5;
  color: white;
}
`

const Heart = styled.img`
width: 50%
`



const Card = ({frequentOrder,data}) => {

  return (
    <StyledCard>
        <ImageContainer style = {{height: frequentOrder ? "80%": "50%"}}>
            {frequentOrder && checkAddedDate(data?.addedAt) && <Label src = {NewLabel} alt = "Label" />}
            {!frequentOrder && checkAddedDate(data?.addedAt) && 
            <NewCard>
              <RedCircle></RedCircle>
              <p>NEW</p>
            </NewCard>
            }
            {!frequentOrder && <HeartContainer>
              <Heart src = {HeartIcon} alt = "Heart Icon" />
            </HeartContainer>}
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
            <Stack direction = "row" alignItems = "center" gap = "0.5rem" fontSize="small">
              <GrayText><Price>₹{data?.price}/-</Price> per head</GrayText>
              <GrayCircle></GrayCircle>
              <GrayText>{data?.totalDishes} dishes</GrayText>
            </Stack>
            <Stack direction = "row" justifyContent= "space-between" minWidth = {{md: "260px",sm: "220px", xs: "200px"}} fontSize = "small">
              <Stack direction = "row" >
                <Rating style = {{background: checkRating(data?.rating)}}>
                  <Star src = {StarIcon} alt = "Star Icon" />
                  <p>{data?.rating}</p>
                </Rating>
                <GrayText style = {{marginTop: "1.2rem", marginLeft: "0.5rem"}}>{data?.totalRatings} ratings</GrayText>
              </Stack>
              <Stack direction = "row" gap = "0.5rem" marginBottom = "1rem" marginTop = "0.1rem">
                {data?.foodType === "Vegetarian" && <Container style={{borderColor: checkFoodType(data?.foodType)}}>
                  <ColorCircle style = {{background: checkFoodType(data?.foodType)}}></ColorCircle>
                </Container>}
                {data?.foodType === "Non Vegetarian" && <Container style={{borderColor: checkFoodType(data?.foodType)}}>
                <ColorCircle style = {{background: checkFoodType(data?.foodType)}}></ColorCircle>
                </Container>}
                {data?.foodType === "Both" && 
                <>
                 <Container style={{borderColor: checkFoodType(data?.foodType)[0]}}>
                    <ColorCircle style = {{background: checkFoodType(data?.foodType)[0]}}></ColorCircle>
                  </Container>
                  <Container style={{borderColor: checkFoodType(data?.foodType)[1]}}>
                    <ColorCircle style = {{background: checkFoodType(data?.foodType)[1]}}></ColorCircle>
                  </Container>
                </>
               }
              </Stack >
            </Stack>
          </div>
        </CardFooterMain>}
    </StyledCard >
    
  )
}

export default Card
