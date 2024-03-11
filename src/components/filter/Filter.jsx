import { Checkbox, FormControlLabel, FormGroup, Slider } from "@mui/material"
import SliderTheme from "../../utils/SliderTheme"
import { useState } from "react";
import { useEffect } from "react";
import { useFilterContext } from "../../context/FilterContext";



const Filter = ({type,options,isSlider,marks,setPriceText,setDistanceText,distance = 0, values = [0,0]}) => {

    const {setIsDefault,isDefault,setFilterValues,filterValues} = useFilterContext();

    const getSliderValues = () => {
        
        if(type === "price") {
            if(filterValues.price.length) {
                return filterValues.price
            }
        } 
        if(type === "distance") {
            if(filterValues.distance.length) {
                return filterValues.distance
            }
        }
        return [values[0], values[1]]
    }
    const [value, setValue] = useState(getSliderValues());
    const [checkedValues, setCheckedValues] = useState([]);

    useEffect(() => {
        setValue(getSliderValues());
    },[filterValues])

    useEffect(() => {
        if (isDefault) {
            setValue([values[0], values[1]]);
            setCheckedValues([]);
            type === "price" && setPriceText("");
            type === "distance" && setDistanceText("");
        }
    }, [isDefault]);

    const handleCheckboxChange = (option) => {
        setCheckedValues(prevCheckedValues => {
            if (prevCheckedValues.includes(option)) {
                return prevCheckedValues.filter(value => value !== option);
            } else {
                return [...prevCheckedValues, option];
            }
        });
        filterOptionValues(option);
    };

    const filterOptionValues = (value) => {
        setIsDefault(false);
        setFilterValues(prevState => {
            if (type === "price" || type === "distance") {
                return {...prevState, [type]: value};
            } else {
                if (prevState[type].includes(value)) {
                    return {...prevState, [type]: prevState[type].filter(item => item !== value)};
                } else {
                    return {...prevState, [type]: [...prevState[type], value]};
                }
            }
        });
    }
      
    function valuetext(value) {
        return `${value}`;
    }
        
    const minDistance = distance;

    const handleChange = (event,newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
        return;
        }
    
        if (activeThumb === 0) {
        setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        const ans = [Math.min(newValue[0], value[1] - minDistance), value[1]];
        type === "price" ? setFilterValues(prev => ({...prev,price:ans})): setFilterValues(prev => ({...prev,distance:ans}))
        type === "price"? setPriceText(`₹${ans[0]}-${ans[1]}`): setDistanceText(`${ans[0]}km-${ans[1]}km`);
        filterOptionValues(ans);
        } else {
        setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        const ans = [value[0], Math.max(newValue[1], value[0] + minDistance)];
        type === "price" ? setFilterValues(prev => ({...prev,price:ans})): setFilterValues(prev => ({...prev,distance:ans}))
        type === "price"? setPriceText(`₹${ans[0]}-${ans[1]}`): setDistanceText(`${ans[0]}km-${ans[1]}km`);
        filterOptionValues(ans);
        }
    };

    const displayOptions = options?.map((option,index) => (
        <FormControlLabel 
        key = {index} 
        control={<Checkbox checked={filterValues[type].includes(option)} onChange={function() {handleCheckboxChange(option)}}/>} 
        label= {option} 
        sx = {{'&.Mui-checked': {
        color: "#ff264e"
        }}}/>
    ))

    return (
        <FormGroup>
            {isSlider ? 
            <SliderTheme>
                <Slider
                getAriaLabel={() => 'Minimum distance'}
                min = {values[0]}
                max = {values[1]}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                marks = {marks}
                />
            </SliderTheme> 
            : 
            displayOptions}
        </FormGroup>
    )
}

export default Filter
