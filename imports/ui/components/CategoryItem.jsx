import React from 'react'
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { capitalize } from '../../startup/helpers'


export default ({ category, light }) => {
    return (
        <Wrapper light={light}>
            <div><FontAwesomeIcon icon={category.icon} size='2x' color={category.iconColor} /></div>
            <h3>{capitalize(category.name)}</h3>
            <p>{category.taskCount} Tasks</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 35vw;
    height: 20vh;
    background: ${props => props.light ? 'white' : 'transparent'};
    color: ${props => props.light ? 'black' : 'white'};
    border-radius: 10px;
    padding: .8em;
    margin: .5em 0;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    >div {
        flex-grow: 1;
        ${props => !props.light && css`
            >svg {
                background: white;
                padding: 8px;
                border-radius: 25px;
            }
        `};
    }
    h3,
    p{
        margin: 0;
    }
`;