import { CREATE_ARR, ADD_COUNT } from "./actionTypes";

export const create = (obj: IMatrix) => ({
   type: CREATE_ARR,
   payload: obj,
});

export const add = (element: itemSquare) => ({
   type: ADD_COUNT,
   payload: element,
});
// export const delete = (obj: IArticle) => ({
//    type: DELETE_COUNT,
//    payload: obj,
// });