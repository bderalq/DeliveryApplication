import instance from ".";

const getAllCuisines = async () => {
    const res = await instance.get("/category");
    return res.data;
};

const getAllRestaurants = async () => {
    const res = await instance.get("/resturant");
    return res.data; 
}
export {getAllCuisines, getAllRestaurants}; 