
const ReducerFunc=(state,action)=>{
    
    switch(action.type){
        case "FILTER_BY_GENRE":
            return{...state,videosFilter:action.payload};
        case "SHOW_ICON":
            return {...state,showIcon:action.payload.id};
        case "SEARCH":
            return {...state,bySearch:action.payload}
                        
         default:
             return {...state}   
    }

}
export {ReducerFunc};

