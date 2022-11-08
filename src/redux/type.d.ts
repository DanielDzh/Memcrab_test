interface IMatrix {
   m: string,
   n: string,
   x: string,
   items: itemSquare[],
   max: string[],
   middle: string[]
 }
 
 interface IForm {
  m: string,
  n: string,
  x: string,
}

 type MatrixState = {
  m: string,
  n: string,
  x: string
  items: itemSquare[]
}
 
 type MatrixAction = {
   type: string
   payload: IArticle
 }
 
 type itemSquare = {
  id: string,
  amount: number,
  profit?: number
 }

 type DispatchType = (args: MatrixAction) => MatrixAction