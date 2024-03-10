import { Drawer, Stack } from "@mui/material"
import FilterOptions from "./FilterOptions"
import styled from "styled-components"
import DrawerTheme from "../../utils/DrawerTheme"
import { useFilterContext } from "../../context/FilterContext"



const Buttons = styled.div`
display:flex;
gap: 1rem;
margin: auto 0 2rem auto;
`

const Close = styled.button`
padding: 0.5rem 1rem;
font-weight: 600;
border-radius: 10px;
border: 2px solid gray;
color: #6e6d6d;
cursor: pointer;
background-color: transparent;
&:hover {
  background-color: #f5f3f2
}
`

export const Apply = styled.button`
padding: 0.5rem 1rem;
font-weight: 600;
border-radius: 10px;
border: none;
background-color: #fa7528;
cursor: pointer;
color: white;
&:hover {
  background-color: darkorange
}
`

const FilterDrawer = ({openDrawer,setOpenDrawer}) => {
  const {reset,filter} = useFilterContext();
  const applyFilter = () => {
    filter();
    setOpenDrawer(false)
  }

  const cancel = () => {
    reset();
    setOpenDrawer(false)
  }

  return (
    <DrawerTheme>
      <Drawer open={openDrawer}>
        <Stack direction = "row" justifyContent= "space-between">
          <h3>FILTERS</h3>
          <p onClick = {reset}>Reset all</p>
        </Stack>
        <FilterOptions />
        <Buttons>
          <Close onClick = {cancel}>CANCEL</Close>
          <Apply onClick = {applyFilter}>APPLY</Apply>
        </Buttons>
      </Drawer>
    </DrawerTheme>
      
  )
}

export default FilterDrawer
