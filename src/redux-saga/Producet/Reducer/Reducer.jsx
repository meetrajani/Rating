import { DELETE_PRODUCET_ERROR, DELETE_PRODUCET_PROGRESS, DELETE_PRODUCET_SUCCESS, GET_PRODUCET_ERROR, GET_PRODUCET_PROGRESS, GET_PRODUCET_SUCCESS, POST_PRODUCET_ERROR, POST_PRODUCET_PROGRESS, POST_PRODUCET_SUCCESS, UPDATE_PRODUCET_ERROR, UPDATE_PRODUCET_PROGRESS, UPDATE_PRODUCET_SUCCESS } from "../Action/Action"

const initlSatus = {
    producet : [],
    getProducetprogress : false,
    getProduceterror : null,
    
    dataIsLodad : true,

    postProducetprogress : false,
    postProduceterror : null,

    deleteProducetprogress : false,
    deleteProduceterror : null,
    fdeleteProducetprogress : false,
    fdeleteProduceterror : null,
}

const getProducerReducer = (status=initlSatus,action) =>{
    switch (action.type){
        case GET_PRODUCET_PROGRESS : {
            return{
                ...status,
                getProducetprogress : true
            }
        }
        case GET_PRODUCET_SUCCESS : {
            return{
                ...status,
                dataIsLodad : true,
                producet : action.data
            }
        }
        case GET_PRODUCET_ERROR : {
            return{
                ...status,
                getProduceterror : action.data      
            }
        }
        // post 

        case POST_PRODUCET_PROGRESS : {
            return{
                ...status,
                postProducetprogress : true
            }
        }
        case POST_PRODUCET_SUCCESS : {
            return{
                ...status,
                dataIsLodad : true,
                producet : status.producet.concat(action.data)
            }
        }
        case POST_PRODUCET_ERROR : {
            return{
                ...status,
                postProduceterror : action.data      
            }
        }

        // DELETE

        case DELETE_PRODUCET_PROGRESS : {
            return{
                ...status,
                deleteProducetprogress : true
            }
        }
        case DELETE_PRODUCET_SUCCESS : {
            return{
                ...status,
                dataIsLodad : true,
                producet : status.producet.filter((e)=>e.id !== action.data),
                fdeleteProducetprogress :true,
                fdeleteProduceterror :action.data
            }
        }
        case DELETE_PRODUCET_ERROR : {
            return{
                ...status,
                deleteProduceterror : action.data      
            }
        }

        default : {
            return{
                ...status,
            }
        }
    }
}
export default getProducerReducer;
