const initialState = {
    postItems: [],
    fetchItems: [],
    editItems:[],
    loading:false,
}

let postReducers = (state = initialState, action) => {
    switch (action.type) {
      case "CREATE_POST":
        return {
          ...state,
          postItems: action.payload,
        };
      case "FETCH_POST":
        return {
          ...state,
          fetchItems: action.payload,
        };
      case "EDIT_POST":
        return {
          ...state,
          editItems: action.payload,
        };
      case "DELETE_POST":
        return state;
      default:
        return state;
    }
}

export default postReducers;