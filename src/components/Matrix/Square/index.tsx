import { generateClasses } from '../../../utils/generatedClasses';

import s from './Square.module.scss'

const Square = ({element, key, item, bg, onClick, onMouseEnter, onMouseLeave}: {element?: itemSquare, key: number, item?: any, bg?: string, onClick?: any, onMouseEnter?: any, onMouseLeave?: any}) => {
   
   const increase = (item: itemSquare | any) => {
      onClick(item);
      console.log('item', item);
      
   }

   return (
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={() => onClick && increase(element)} className={bg === 'turquoise' ? generateClasses(s.square, s.turquoise) : s.square} key={key}>
         <span>{element ? element.amount : item}</span>
      </div>      
   )
}

export default Square