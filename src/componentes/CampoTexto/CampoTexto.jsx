import styled from "@emotion/styled"

const LabelEstilizada = styled.label`
    display:block;
    width: 100%;
    box-sizing: border-box;
`

const InputEstilizada = styled.input`
    display:block;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${props => props.theme.espacamento.xs}
`

export const CampoTexto = ({ titulo }) => {
    return (<LabelEstilizada>
        {titulo}
        <InputEstilizada />
    </LabelEstilizada>)
}