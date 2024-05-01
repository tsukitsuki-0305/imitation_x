import React, { useState } from "react";
import style from '../styles/Modal.module.scss';
import AddPostPanel from './AddPostPanel';
import DisplayPostPanel from "./DisplayPostPanel";

export default function Modal(props) {
    const [isMouseDown, setIsMouseDown] = useState(false);

    const onMouseDown = (e) => {
        if (e.target === e.currentTarget) {
            setIsMouseDown(true);
        }
    };
    const onMouseUp = (e) => {
        if (isMouseDown) {
            props.close(e);
        }
        setIsMouseDown(false);
    };

    return (
        <div className={style.modal} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
            {props.type === "AddPostPanel" && (
                <AddPostPanel close={props.close} saveNewPost={props.saveNewPost} />
            )}
            {props.type === "DisplayPostPanel" && (
                <DisplayPostPanel close={props.close} {...props}/>
            )}
        </div>
    );
}