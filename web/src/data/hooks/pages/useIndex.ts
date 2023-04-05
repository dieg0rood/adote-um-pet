import { useState } from 'react';
import { useEffect } from 'react';
import { Pet } from '../../@types/Pets';
import { ApiService } from '../../services/ApiService';
import { AxiosError } from 'axios';

export function useIndex() {
   const [listaPets, setListaPets] = useState<Pet[]>(
      []
   ),
      [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
      [email, setEmail] = useState(''),
      [valor, setValor] = useState(''),
      [msg, setMsg] = useState('');

   useEffect(() => {
      ApiService.get('/pets').then((response) => {
         setListaPets(response.data);
      })
   }, [])

   function adotar() {
      if (petSelecionado !== null) {
         if (validate()) {
            ApiService.post('/adocoes', {
               pet_id: petSelecionado.id,
               email,
               valor
            }).then(() => {
               setPetSelecionado(null);
               setMsg('Pet adotado com sucesso');
               clearForm();
            }).catch((error: AxiosError) => {
               setMsg(error.response?.data.message);
            })
         }
      } else {
         setMsg('Preencha todos os campos corretamente!');
      }
   }

   function clearForm(){
      setEmail('');
      setValor('');
   }

   function validate() {
      return email.length > 0 && valor.length > 0;
   }
}



return {
   listaPets,
   petSelecionado,
   setPetSelecionado,
   valor,
   setValor,
   email,
   setEmail,
   msg,
   setMsg,
   adotar
};
}