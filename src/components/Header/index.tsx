import { Container, Content } from './styles';
import logo from '../../assets/Logo.png' ;

type Props = {
    onOpenModalTransaction: () => void;
}

export const Header = ({onOpenModalTransaction}: Props) => {
    
    return (
        <>
            <Container>
                <Content>
                    <img src={logo} alt='logo' />
                    <button
                     type='button'
                     onClick={onOpenModalTransaction}
                    >
                        Nova transição
                    </button>
                </Content>
            </Container>
        </>
    )
}