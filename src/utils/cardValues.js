export const checkFoodType = (type) => {
    if(type === "Vegetarian") {
        return "#0aff12"
    } else if (type === "Non Vegetarian") {
        return "#ff264e"
    } else {
        return ["#0aff12","#ff264e"]
    }
}

export const checkRating = (value) => {
    const rating = Number(value);
    if(rating >= 4) {
        return "#03fc3d"
    }
    if(rating >=3) {
        return "#fcc203"
    }
    if(rating >=2) {
        return "#fc4e03"
    }
    return "#fc1703"
}

export const checkAddedDate = () => {

}