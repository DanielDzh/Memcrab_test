import { useCallback, useState } from "react";

type GreetFunction = (form: IMatrix) => void;

type ErrorType = {
   m: string,
   n: string,
   x: string
}

export const useForm = ({initialValues, submit}: {initialValues: IForm | any, submit: GreetFunction, }) => {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState<ErrorType>({m: '', n: '', x: ''});

   const [loading, setLoading] = useState(false);

  const validate = (value: string, name: string) => {
      let max = (Number(form.n)*Number(form.m));
      console.log(max);
      
      if (!value){
         setErrors({...errors, [name]: 'required-field'} );
      }else if(!Number.isInteger(Number(value))){
         setErrors({...errors, [name]: 'enter int integer'} );
      }else{
         if(name === 'n'){
               max = (Number(value)*Number(form.m));
         }
         if(name === 'm'){
               max = (Number(value)*Number(form.n));
         }
         if(name === 'x'){
            if(Number(value) > max || Number(value) < 0){
               setErrors({...errors, x: `enter number to 0-${max}`} )
            }else{
               setErrors({...errors, x: ''} );
            }
         }
         if(name !== 'x'){
            if(Number(value)>100 ||  Number(value)<0){
               setErrors({...errors, [name]: 'enter number to 0-100'} );
            }else{
               if(Number(form.x) > max || Number(form.x) < 0){
                  setErrors({...errors, x: `enter number to 0-${max}`, [name]: ''} )
               }else{
                  setErrors({...errors, x: '', [name]: ''} );
               }
            }
         }

      }
 };

  const handleField = useCallback(
    (e: any) => {
      const { value, name } = e.target;      
      setForm({ ...form, [name]: value });
      setLoading(false);
      validate(value, name)
      
    },
    [form, errors, initialValues]
  );

  const handleSubmit = useCallback(
   (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);

      if (submit) {
         submit(form);
        setLoading(false);
      }
   },
    [form, submit]
  );

  return {
   form,
   errors,
   loading,
   handleField,
   handleSubmit,
  };
};
