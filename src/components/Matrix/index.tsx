import * as React from "react"

import s from './Matrix.module.scss'
import Square from "./Square"

type Props = {
  state: IMatrix,
  addAmount: (state: IMatrix | any) => void
}

const Matrix: React.FC<Props> = ({ state, addAmount }) => {

  const [isShown, setIsShown] = React.useState(false);

  const mouseEvent = (obj: itemSquare, e:React.FormEvent<HTMLInputElement>) => {
    setIsShown(true)
    aroundNumb(obj)
  }

  const aroundNumb = (obj: itemSquare) => {
    let near: number;

      
    // state.items.map((item)=>{ 
    //   if(Math.abs(obj.amount - item.amount) < near && Math.abs(obj.amount - item.amount) !== 0){ 
    //   }
    // })

  }

  // const dispatch: Dispatch<any> = useDispatch()

const createSquare = (obj: itemSquare) =>{
  

  return(
    <Square element={obj} key={obj.amount} onClick={addAmount}  onMouseEnter={(e: React.FormEvent<HTMLInputElement>) => mouseEvent(obj,e)} onMouseLeave={() => setIsShown(false)}/>
  )
}

  return (
    <div className={s.matrix_container}>
      <div className={s.column}>
        {[...new Array(Number(state.n) ? Number(state.n) : 0)].map((x, rowIndex) => {
          return (
            <div className={s.row} key={rowIndex}>
              {[...new Array(Number(state.m) ? Number(state.m) : 0)].map((y, colIndex) => 
              createSquare(state.items[rowIndex*Number(state.m) + colIndex])
                 )}
            </div>
          )
        })
        }
      </div>
      <div className={s.sum_row}>
        {
          state.max.map((item, index)=>(
            <Square item={item} bg='turquoise' key={index} />
          ))
        }
      </div>
      {/* <div className={s.sum_row}>
        {
          state.max.map((item, index)=>(
            <Square item={item} bg='turquoise' key={index}/>
          ))
        }
      </div> */}
    </div>
  )
}

export default Matrix