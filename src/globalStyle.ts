import { CSSProperties } from "react";
import styled from "styled-components";


export const  bg = {
    primary: '#253859',
    secondary: '#57d9a3',
    tertiary: '#00b8d9',
    quaternary: '#f4e78b',
    grey: '#f4f4f4',
    white: '#ffffff',
    black: '#1f1f1f',

}

export const MainContainer  = styled.div`
    min-height: 100vh;
    background: ${bg.white};
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    height: 90vh;
`

export const createTodoContainer: CSSProperties = {
    backgroundColor: bg.primary,
    width: '100%',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '10px'
}   

export const createTodoCta: CSSProperties = {
    cursor: 'pointer',
    backgroundColor: bg.quaternary,
    borderStyle: 'none',
    padding: '10px 20px',
    outlineStyle: 'none',
    borderRadius: '6px',
    color: bg.black,
    fontSize: '12px'
}