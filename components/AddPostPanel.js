import React, { useState } from "react";
import style from '../styles/AddPostPanel.module.scss';

export default function AddPostPanel(props) {
    const [text, setText] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const submit = (e) => {
        e.preventDefault();
        props.saveNewPost(text);
        if (props.close) {
            props.close(e);
        }
    }

    const changeText = (event) => {
        const newVal = event.target.value;
        setText(newVal);
        newVal.length ? setIsDisabled(false) : setIsDisabled(true);
    };

    return (
        <div className={style.addPostPanel}>
            <div className={style.addPostPanel__container}>
                <button className={style.addPostPanel__cancelButton} type="button" onClick={props.close}>
                    ×
                </button>

                <textarea
                    className={style.addPostPanel__textArea}
                    rows={10}
                    placeholder={"いまどうしてる？"}
                    maxLength={200}
                    minLength={1}
                    value={text}
                    autoFocus
                    onChange={changeText}
                />

                <div className={style.addPostPanel__footer}>
                    <button
                        className={style.addPostPanel__postButton}
                        type="submit"
                        onClick={submit}
                        disabled={isDisabled}
                    >
                        ポストする
                    </button>
                </div>
            </div>
        </div>
    );
}