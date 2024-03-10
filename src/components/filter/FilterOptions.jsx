import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import styled from 'styled-components';
import DownArrow from './../../assets/down.svg'
import Filter from "./Filter";
import { useState } from "react";



const Container = styled.div`
width: 40vw;
min-width: 250px;
max-width: 300px;
margin-bottom: 1rem;
`

const Image = styled.img`
width: 10px
`

const StyledFromGroup = styled(FormGroup)`
padding: 0 1rem;
`
const Title = styled.p`
font-weight: 600;
`

const FilterOptions = () => {

    const marksPrice = [
        {
            value: 100,
            label: '₹100',
        },
        {
            value: 200,
            label: '₹200',
        },
        {
            value: 300,
            label: '₹300',
        },
        {
            value: 400,
            label: '₹400',
        },
        {
            value: 500,
            label: '₹500',
        },
    ];

    const marksDistance = [
        {
            value: 0,
            label: '0km',
        },
        {
            value: 5,
            label: '5km',
        },
        {
            value: 10,
            label: '10km',
        },
        {
            value: 15,
            label: '15km',
        },
        {
            value: 20,
            label: '20km',
        },
    ]
    const [priceText,setPriceText] = useState("");
    const [distanceText,setDistanceText] = useState("")
    

    return (
        <Container>
            <Accordion>
                <AccordionSummary expandIcon={<Image src = {DownArrow} />}>
                    <Title>Format</Title>
                </AccordionSummary>
                <AccordionDetails>
                    <Filter 
                    type = {"format"} 
                    isSlider = {false} 
                    options = {["Buffet","Mini Buffet","Lunch Box","Snack box","Food Truck"]}/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<Image src = {DownArrow} />}>
                    <Title>Price {priceText}</Title>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledFromGroup>
                        <Filter 
                        type = {"price"} 
                        setPriceText = {setPriceText}
                        isSlider = {true} 
                        marks = {marksPrice} 
                        distance = {100} 
                        values = {[100,500]}/>
                    </StyledFromGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<Image src = {DownArrow} />}>
                    <Title>Occasion</Title>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <Filter 
                        type = {"occasion"} 
                        isSlider = {false} 
                        options = {["BirthDay Celebration","House Warming","House Party", "Society Event"]}/>
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<Image src = {DownArrow} />}>
                    <Title>Food Type</Title>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <Filter 
                        type = {"foodType"} 
                        isSlider = {false} 
                        options = {["Vegetarian", "Non Vegetarian"]}/>  
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<Image src = {DownArrow} />}>
                    <Title>Distance {distanceText}</Title>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledFromGroup>
                        <Filter 
                        type = {"distance"}
                        setDistanceText = {setDistanceText}
                        isSlider = {true} 
                        marks = {marksDistance} 
                        values = {[0,20]}/>
                    </StyledFromGroup>
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}

export default FilterOptions
