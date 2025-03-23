import { CSSProperties } from "react";
import { bg, createTodoCta } from "../globalStyle";

export const createTodoMainContainer: CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: '15px',
    border: `1px solid ${bg.quaternary}`,
    padding: '10px',
    borderRadius: '6px'
}

export const inputLabel: CSSProperties = {
    fontSize: '10px'
}

export const createTodoContainer:CSSProperties = {
    display : 'flex',
    flexDirection: 'column',
    width: '20%',
    color: bg.quaternary
}

export const inputTextBox: CSSProperties = {
    borderStyle: 'none',
    borderRadius: '6px',
    padding: '8px',
    outlineStyle: 'none',
}

export const submitTodoCta: CSSProperties = {
    ...createTodoCta,
}

export const dragTodoMainContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '15px',
    height: '85%',
    width: '90%'
    
}

export const dragTodoContainer : CSSProperties = {
    width: '30%',
    borderRadius: '10px',
    flexGrow: 1,
    overflow: "hidden",
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    backgroundColor: bg.grey,
}

export const dragLaneContainer = ($color : string) : CSSProperties =>{
    return {
        backgroundColor : $color,
        color : $color == bg.quaternary ? bg.black : bg.white,
        padding: '10px',
    }
}


export const todoTextContainer :CSSProperties = {
    display: 'flex',
    flexDirection : 'column',
    gap: '5px',
    alignItems: 'center',
    overflowY: 'auto',
    flexGrow: '1'
}

export const todoCard : CSSProperties = {
    width: '98%',
    height: 'max-content',
    minHeight: '90px',
    fontSize: '12px',
    padding: '8px',
    backgroundColor: bg.white,
    cursor: 'pointer',
    flexShrink: '0', 
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}

export const todoCardIconContainer: CSSProperties = {
    textAlign: 'right',
    color: bg.black,
    fontSize: '14px',
    padding: '0px 10px',
    fontWeight: '600',
    display: 'flex',
    gap: '5px',
    flexDirection: "row-reverse"
}

export const todoCardIcon : CSSProperties = {
    width: '10px'
}

export const editableContainer : CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    marginBottom: '10px'
}

export const editTodoCta : CSSProperties = {
    width: '30%',
    cursor: 'pointer',
    backgroundColor: "#b9375e",
    borderStyle: 'none',
    padding: '5px 20px',
    outlineStyle: 'none',
    borderRadius: '6px',
    color: bg.white,
    fontSize: '12px'
}

export const editableInput : CSSProperties = {
    outlineStyle: 'none',
    borderStyle: 'none',
    backgroundColor: bg.grey,
    borderRadius: '6px',
    padding: '5px',
    fontSize: '12px',
    color: bg.black
}