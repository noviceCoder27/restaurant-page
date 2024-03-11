import styled from 'styled-components';
import CardCarousel from '../components/Carousel';
import { Box, Grid, Pagination, Stack } from '@mui/material';
import Card from '../components/card/Card';
import { useState } from 'react';
import MenuIcon from'./../assets/menu.png'
import FilterDrawer, { Apply } from '../components/filter/FilterDrawer';
import FilterOptions from '../components/filter/FilterOptions';
import { useFilterContext } from '../context/FilterContext';
import { useMemo } from 'react';
import FilterButton from '../components/filter/FilterButton';


const Main = styled.main`
display: flex;
flex-direction: column;
min-height: 100vh;
`;

const FrequentOrders = styled.section`
height: fit-content;
padding: 2rem;
padding-top: 1rem;
background-color: #faedb4;
width: 100%
@media and(max-width: 450px) {
  padding-left: 0;
}
`;

const Header = styled.h2`
margin-left: 1rem;
font-size: clamp(1.3rem,1.2vw,2rem)
`

const StyledSection = styled.section `
padding: 0;
padding-bottom: 0;
display: flex;
@media (min-width: 330px) {
  padding: 2rem 3rem;
}
`

const Sort = styled.div`
display: flex;
margin-left: auto
`

const StyledSelect = styled.select`
background-color: transparent;
cursor: pointer;
width: 130px;
border: 2px solid #d1d1d1;
font-weight: 600;
margin-left: 1rem;
border-radius: 5px;
`

const StyledOption = styled.option`
font-size: medium;
`

const MenuImg = styled.img`
width:10vw;
min-width: 30px;
max-width: 40px;
cursor: pointer;
margin-left: 1rem;
@media (min-width: 1024px) {
  display:none
}
`

const FilterSection = styled.div`
border-right: 2px solid #d1d1d1;
padding-bottom: 2rem;
position: relative;
@media (max-width: 1024px) {
  display:none
}
`

const FilterOptionContainer = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
padding: 0 1rem;
`

const ResultSection = styled.div`
min-width: 70%;
`

const Text = styled.p`
transform: translateY(6px);
margin-right: 1rem;
cursor: pointer;
color: gray;
&:hover {
  color: black;
}
`

const Cover = styled.div`
width: 2px;
height: 60px;
background-color: white;
position: absolute;
right: -2px;
`

const Footer = styled.div`
min-height: 10vh;
width: 100%;
background-color: #faedb4
`

const SortText = styled.p`
font-weight: 600;
`

const ResultHeader = styled.h3`
margin-left: 2rem;
`
const FilterButtons = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
`



const Home = () => {
  const [text,setText] = useState("Most Popular")
  const [openDrawer,setOpenDrawer] = useState(false);
  const {restaurants,filter,filteredItems,reset,filterArr} = useFilterContext()
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const noOfPages = Math.ceil(filteredItems.length / itemsPerPage);
  const sortedItems = useMemo(() => {
    let sortedRestaurants = []
    switch(text) {
      
      case "Most Popular":
          sortedRestaurants = [...filteredItems].sort((a, b) => b.totalOrders - a.totalOrders);
          break;
      case "Highest Rated":
          sortedRestaurants = [...filteredItems].sort((a, b) => b.rating - a.rating);
          break
      case "Recently Added":
          sortedRestaurants = [...filteredItems].sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
          break
    }
    return sortedRestaurants
  },[text,filteredItems]);
  const itemsToDisplay = sortedItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const displayGridItems = itemsToDisplay.map((restaurant,index) => (
    <Grid item xs={12} sm = {4} md = {3} lg = {3} xl = {2} key = {index} minWidth = {{sm: "250px", md: "300px", lg: "320px"}}>
      <Card frequentOrder = {false} data = {restaurant}/>
    </Grid>
  ))
  
  const displayFilterButtons = filterArr.map((item,index) => (
    <FilterButton key = {index} data = {item}/>
  ))

  return (
    <Main> 
      <FilterDrawer openDrawer={openDrawer} setOpenDrawer = {setOpenDrawer} />
      <FrequentOrders>
        <MenuImg src = {MenuIcon} alt = "Hamburger menu" onClick={() => setOpenDrawer(true)}/>
          <Header>MOST FREQUENTLY ORDERED</Header>
        <CardCarousel data = {restaurants}/>
      </FrequentOrders>
      <StyledSection>
        <FilterSection>
          <Stack direction = "row" justifyContent= "space-between" borderBottom= "2px solid #d1d1d1" position = "relative">
            <h3>FILTERS</h3>
            <Text onClick = {reset}>Reset all</Text>
            <Cover></Cover>
          </Stack>
          <FilterOptionContainer>
            <FilterOptions />
          </FilterOptionContainer>
          <Apply style = {{position: "absolute", right: "2rem"}} onClick = {filter}>APPLY</Apply>
        </FilterSection>
        <ResultSection>
          <ResultHeader>RESULTS({filteredItems?.length})</ResultHeader>
          <Box borderTop= "2px solid #d1d1d1" p = "2rem">
            <Stack direction = "row" width = "100%" flexWrap= "wrap">
              <FilterButtons>
                {displayFilterButtons}
              </FilterButtons>
              <Sort>
                <SortText>Sort by:</SortText>
                <StyledSelect onChange = {function(e) { setText(e.target.value) }}>
                  <StyledOption value="Most Popular">Most Popular</StyledOption>
                  <StyledOption value="Recently Added">Recently Added</StyledOption>
                  <StyledOption value="Highest Rated">Highest Rated</StyledOption>
                </StyledSelect>
              </Sort>
            </Stack>
            <Grid container mt = '2rem' ml = {{lg: "2rem"}} columnGap = "1rem" rowGap = "2rem" justifyContent={{sm: "center",lg: "start"}}>
              {displayGridItems}
            </Grid>
            <Stack spacing={2} direction = "row" justifyContent = "center" marginTop = "auto" >
              <Pagination count={noOfPages} page={page} onChange={(event, value) => setPage(value)} variant="outlined" shape="rounded" />
            </Stack>
          </Box>
        </ResultSection>
      </StyledSection>
      <Footer>
      </Footer>
    </Main>
    
  )
}

export default Home
