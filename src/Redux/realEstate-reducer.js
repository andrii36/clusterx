let initialState = {
    houses: [
        {id:1, description: "house 1"},
        {id:2, description: "house 2"},
        {id:3, description: "house 3"},
        {id:4, description: "house 4"},
        {id:5, description: "house 5"}
    ],
    appartments: [
        {id:1, description: "appartment 1"},
        {id:2, description: "appartment 2"},
        {id:3, description: "appartment 3"},
        {id:4, description: "appartment 4"},
        {id:5, description: "appartment 5"}
    ],
    multiFamily: [

    ]
}

const realEstateReducer = (state = initialState, action) => {
    switch (action.type){
        
        default: 
            return state;
    }
}

export default realEstateReducer;