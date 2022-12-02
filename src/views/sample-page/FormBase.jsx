import { useForm,Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button, CircularProgress, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useQuery, useQueryClient } from 'react-query';
import { getContratos, getEmpresas } from 'helpers/general';
import { useState,useEffect } from 'react';




const validar = yup.object().shape({
    nombre:yup.string().required('Nombre requerido'),  
    empresa:yup.string().required('Nombre requerido'),  
    ctto:yup.string().required('Nombre requerido'),  
  })
  


export const FormBase = () => {
  const queryClient = useQueryClient()

  const {data:empresasData, isLoading}=useQuery('getEmpresas',()=>getEmpresas())
  const [rutEmpre, setRutEmpre] = useState('')

  const {data:contratos, isLoading:isLoadingCttos}=useQuery(['getCttos',rutEmpre],()=>getContratos(rutEmpre))

 

useEffect(() => {
  queryClient.invalidateQueries('getCttos') 
}, [rutEmpre,queryClient])


    const {handleSubmit,control, formState:{errors},setValue} = useForm({
        defaultValues:{
            nombre:'',           
            ape:'',
            empresa:'',
            ctto:''
        },
        resolver: yupResolver(validar)
        
    })

    const functionSubmit=(values)=>{
        console.log(values)
    }

  return (
    <form onSubmit={handleSubmit(functionSubmit)}>
        <Grid container>
          <Grid item md={4} xs={12}>
            <Controller
               name='nombre'
               control={control}
               render={({field})=>(
                <FormControl fullWidth>
                    <TextField 
                    {...field}
                    autoComplete='off'
                    onChangeCapture={(e)=>{                       
                        setValue('ape',e.target.value)
                    }}
                    label='Nombre'
                    size='small'
                    error={Boolean(errors.nombre)}
                    helperText={errors.nombre && errors.nombre.message}
                    />
                </FormControl >
               )}            
            />          
          </Grid>


          <Grid item md={3}> 
                   <Controller 
                    name='empresa'
                    control={control}
                    render={({field})=>(
                        <FormControl fullWidth
                        size="small"
                        error={ Boolean(errors.empresa)}
                        > 
                            <InputLabel>Empresa</InputLabel>
                            <Select
                            {...field}  
                            onChange={(res)=>{
                              setValue('empresa',res.target.value)
                              setValue('ctto','')
                              setRutEmpre(res.target.value)
                            }}
                             size='small'         
                             label='Empresa'
                            >
                              { 
                              isLoading ? <CircularProgress/>:
                                empresasData.data.result.map((select) => (
                                    <MenuItem key={select.rut_empre} value={select.rut_empre}>
                                    {select.nom_empre}
                                    </MenuItem>
                                ))
                                
                              }   
                            </Select>
                            <FormHelperText>
                      {errors.empresa && errors.empresa.message}       
                      </FormHelperText>
                      </FormControl>
                      )
                    }                 
                   />
                   </Grid>



                   <Grid item md={3}> 
                   <Controller 
                    name='ctto'
                    control={control}
                    render={({field})=>(
                        <FormControl fullWidth
                        size="small"
                        error={ Boolean(errors.ctto)}
                        > 
                            <InputLabel>Contrato</InputLabel>
                            <Select
                            {...field}  
                             size='small'         
                             label='Contrato'
                            >
                              {
                              isLoadingCttos ? <CircularProgress/>:
                              contratos.data.result.map((select) => (
                                    <MenuItem key={select.num_ctto} value={select.num_ctto}>
                                    {select.num_ctto}
                                    </MenuItem>
                                ))
                               
                              }     
                            </Select>
                            <FormHelperText>
                      {errors.ctto && errors.ctto.message}       
                      </FormHelperText>
                      </FormControl>
                      )
                    }                 
                   />
                   </Grid>





    
        </Grid>
        <Grid container mt={2} >
             <Grid item md={12}>
                  <Button type='submit' variant='contained'>Enviar Button</Button>
             </Grid>
        </Grid>

    </form>
  )
}
