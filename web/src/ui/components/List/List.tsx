import { Button } from '@mui/material';
import {
    ListStyled,
    ListItem,
    Foto,
    DescriptionContainer,
    Description,
    Name
} from './List.style';
import { Pet } from '../../../data/@types/Pets';
import { TextService } from '../../../data/services/TextService';

interface ListProps {
    pets: Pet[];
    onSelect: (pet:Pet) => void;
}

export default function List(props: ListProps) {
    const maxLength = 200;
    return (
        <>
            <ListStyled>
                {props.pets.map(pet => ( 
                    <ListItem key={pet.id}>
                        <Foto src={pet.foto} alt={pet.name}/>
                        <DescriptionContainer>
                            <Name>{pet.name}</Name>
                            <Description>{TextService.limitText(pet.text,maxLength)}</Description>
                            <Button onClick={() =>props.onSelect(pet)} fullWidth variant={'contained'}>Adotar {pet.name}</Button>
                        </DescriptionContainer>
                    </ListItem>
                ))}
            </ListStyled>
        </>
    );
}