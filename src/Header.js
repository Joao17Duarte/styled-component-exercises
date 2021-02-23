import styled from 'styled-components/macro'

export default function Header({title, subtitle}){
    return (
        <HeaderEl>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </HeaderEl>
    )
}

const HeaderEl = styled.header`
    background: #eee;
    color: darkorange;
`