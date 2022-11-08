import { ADD_COUNT, CREATE_ARR, DELETE_COUNT } from "../actions/actionTypes";




const initialState: IMatrix = {
   m: '',
   n: '',
   x: '',
   items: [],
   max: [],
   middle: []
}

const matrix = (state = initialState, action: MatrixAction | any) => {
   switch (action.type) {
      case CREATE_ARR:
      let count = 1;
      let items = Array.from(Array(Number(action.payload.m)*Number(action.payload.n)), () => {
         return {id: count++, amount: Math.floor(Math.random() * (999 - 100)) + 100};
      });

         return {
            ...state,
            items: items,
            m: action.payload.m,
            n: action.payload.n,
            max: determinationMax(action.payload.m, action.payload.n, items)
         };
      case ADD_COUNT:
            let amount = action.payload.amount++;
         console.log('amount', amount);
         
            return {
               ...state,
               max: determinationMax(state.m, state.n, state.items),
               items: [...state.items, amount]
         };
      case DELETE_COUNT:
         return {
            ...state,
      };
      default:
         return state;
   }
}


const determinationMax = (m: string, n: string, items: itemSquare[] | any) => {

   let max: number[] = [];
   let littleTimeMax:number =  0;
   [...new Array(Number(n))].map((x, rowIndex) => {


      if(rowIndex+1===Number(n)){

      }
         [...new Array(Number(m))].map((y, colIndex) => {
            littleTimeMax = littleTimeMax + items[rowIndex*Number(m) + colIndex].amount;
            
            if(colIndex+1===Number(m)) {
               
               max.push(littleTimeMax); 
               littleTimeMax=0;
            }
         })
   })

   return max
} 



export default matrix;