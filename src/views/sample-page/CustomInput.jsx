// import { FormControl, TextField } from '@mui/material';
// import { Controller } from 'react-hook-form';

// export const CustomInput = ({control,errors,nombre}) => {
//     console.log('first')
//     return (
//         <Controller
//             name={nombre}
//             control={control}
//             render={({field}) => (
//                 <FormControl>
//                     <TextField
//                         {...field}
//                         autoComplete="off"                     
//                         label="Nombre"
//                         onChangeCapture={(e)=>{                       
//                          console.log(control)
//                         }}
//                         size="small"
//                           error={Boolean(errors.nombre2)}
//                           helperText={errors.nombre2 && errors.nombre2.message}
//                     />
//                 </FormControl>
//             )}
//         />
//     );
// };
