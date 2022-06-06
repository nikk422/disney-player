
const ReducerFunc=(state,action)=>{
    
    switch(action.type){
        case "FILTER_BY_GENRE":
            return{...state,videosFilter:action.payload};
                        
         default:
             return {...state}   
    }

}
export {ReducerFunc};

