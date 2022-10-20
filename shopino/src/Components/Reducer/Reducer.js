
export const initialState = {
    basket:[],
    user:null
};

//Selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.Price + amount, 0);





const reducer = (state, action) => {
console.log(action);

    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
            case "REMOVE_FROM_BASKET":

                //in lines 28 to 45 we use this code to remove from basket base on the index of product not their id so same  product wont remove when we remove one of them.
                
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );
                let newbasket = [...state.basket];

                if (index >= 0){
                    newbasket.splice(index, 1);
                }
                else{
                    console.warn(
                        'Cant remove product (id: ${action.id}) as its not in basket!'
                    )
                }

                return{
                    ...state,
                    basket: newbasket
                }

                //if we use code below it will remove all of the same product because their Id is unique.

                // return{ ...state, 
                //         basket:state.basket.filter(item => item.id !== action.id)
                //     }

            case "SET_USER":
                return{
                    ...state,
                    user:action.user
                }
            default:
                return state;
    }
};
export default reducer;