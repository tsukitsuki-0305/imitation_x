import style from '../styles/Left.module.scss'
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBell, faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons'
import Modal from '../components/Modal'
import AddPostPanel from '../components/AddPostPanel'


function buttonClick() {
  console.log('クリックしました');
  return;
}

export default function Left(props) {
  // props = {userName: 'yamada hanako', userId: 'hanako_yamada'}

  // モーダルの状態
  const [isOpenModal, setIsOpenModal] = useState(false);
  // モーダルの開閉処理
  const toggleModal = e => {
    if (e.target === e.currentTarget) {
      setIsOpenModal(!isOpenModal);
    }
  };
  // モーダルを開く　e.target !== e.currentTargetになるため
  const openModal = (e) => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <main className={style.left__main}>
      <div className={style.left__body}>
        <div className={style.left__menuArea}>
          <button className={style.left__button} type="button" onClick={buttonClick}>
            <span className={style.left__buttonText}>
              <FontAwesomeIcon icon={faHouse} size="1x" />
              <span className={style.left__buttonSpanText}>ホーム</span>
            </span>
          </button>
          {/* <button className={style.left__button} type="button" onClick={buttonClick}>
            <span className={style.left__buttonText}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
              話題を検索
            </span>
          </button> */}
          {/* <button className={style.left__button} type="button" onClick={buttonClick}>
            <span className={style.left__buttonText}>
              <FontAwesomeIcon icon={faBell} size="1x" />
              通知
            </span>
          </button> */}
          {/* <button className={style.left__button} type="button" onClick={buttonClick}>
            <span className={style.left__buttonText}>
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
              メッセージ
            </span>
          </button> */}
        </div>

        <button className={style.left__blueButton} type="button" onClick={openModal}>
          <span className={style.left__blueButtonPcText}>
            ポストする
          </span>
          <span className={style.left__blueButtonSpText}>
            +
          </span>
        </button>

        {isOpenModal && (
          <Modal close={toggleModal} saveNewPost={props.saveNewPost} type={'AddPostPanel'}>
            {/* <AddPostPanel close={toggleModal} saveNewPost={props.saveNewPost} /> */}
          </Modal>
        )}

        <div className={style.userArea}>
          <span className={style.userArea__userName}>
            {props.userName}
          </span>
          <span className={style.userArea__userId}>
            {props.userId}
          </span>
        </div>

      </div>
    </main>
  )
}