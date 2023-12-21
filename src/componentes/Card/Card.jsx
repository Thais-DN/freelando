import styled from '@emotion/styled'

const DivEstilizada = styled.div`
    padding: ${props => props.theme.espacamento.l};
    background: ${props => props.theme.cores.secundarias.a};
    border: 1px solid;
    border-color: ${props => props.theme.cores.primarias.a};
    border-radius: ${props => props.theme.espacamento.s};

`

export const Card = ({ children }) => {
    return (<DivEstilizada>
        {children}
    </DivEstilizada>)
}