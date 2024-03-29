import { createContext, useState, useContext } from "react";
import restaurants from './../resturants.json'

export const CreateFilterContext = createContext("");

export const FilterContextProvider = ({children}) => {
    const [filterValues,setFilterValues] = useState({format: [], price: [],occasion: [],foodType: [],distance: []});
    const [filterArr,setFilterArr] = useState([]);
    const [filteredItems,setFilteredItems] = useState(restaurants);
    const [isDefault,setIsDefault] = useState(false);

    const filterArrayValues = () => {
        const allValues = Object.keys(filterValues).reduce((arr, key) => {
            if ((key === 'price' || key === 'distance') && filterValues[key].length > 0) {
              return [...arr, filterValues[key]];
            } else if (filterValues[key].length > 0) {
              return [...arr, ...filterValues[key]];
            } else {
              return arr;
            }
        }, []);
        setFilterArr(allValues);
    }

    const filter = () => {
        const filteredRestaurants = restaurants.filter(restaurant => {
            for (let key in filterValues) {
                if (Array.isArray(filterValues[key])) {
                    if (filterValues[key].length > 0) {
                        if (key === "price" || key === "distance") {
                            if (restaurant[key] < filterValues[key][0] || restaurant[key] > filterValues[key][1]) {
                                return false;
                            }
                        } else if (key === "foodType") {
                            if (!filterValues[key].includes(restaurant[key]) && restaurant[key] !== "Both") {
                                return false;
                            }
                        } else {
                            if (!filterValues[key].includes(restaurant[key])) {
                                return false;
                            }
                        }
                    }
                }
            }
        return true;
    });    
    setFilteredItems(filteredRestaurants);
    filterArrayValues();
    }

    const reset = () => {
        setIsDefault(true);
        setFilterArr([]);
        setFilterValues({format: [], price: [],occasion: [],foodType: [],distance: []});
        setFilteredItems(restaurants);
    }

    return (
        <CreateFilterContext.Provider value = {{
            filter,
            reset,
            filterValues,
            setFilterValues,
            filteredItems,
            setFilteredItems,
            isDefault,
            setIsDefault,
            restaurants,
            filterArr,
            setFilterArr
        }}>
            {children}
        </CreateFilterContext.Provider>
    )
}

export const useFilterContext = () => {
   return useContext(CreateFilterContext);
}



