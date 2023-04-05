import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title'
import List from '../ui/components/List/List'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { useIndex } from '../data/hooks/pages/useIndex'
import { ADDRGETNETWORKPARAMS } from 'dns'

const Home: NextPage = () => {
  const {
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
  } = useIndex();

  return (
    <div>
      <Title
        title=""
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        } />
      <List
        pets={listaPets}
        onSelect={(pet) => setPetSelecionado(pet)} />

      <Dialog
        open={petSelecionado !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setPetSelecionado(null)}>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              label={'E-mail'}
              fullWidth
              type={'email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              label={'Valor Mensal'}
              fullWidth
              type={'number'}
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button
            onClick={() => setPetSelecionado(null)}
            color={'secondary'}
          >Cancelar
          </Button>
          <Button
            variant={'contained'}
            onClick={() => adotar()}
          >Confirmar Adoção
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={msg.length > 0}
        message={msg}
        autoHideDuration={2500}
        onClose={() => setMsg('')} />

    </div>
  )
}

export default Home
