"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Left from './Left'
import Center from './Center'
import Right from './Right'
import style from '../styles/Home.module.scss'
import dataJson from './data/data.json'
import userJson from './data/user.json'

function getLoginUser(_userId) {
  const _users = userJson;
  const _loginUser = _users.find((user) => user.userId = _userId);
  return _loginUser;
}

export default function Home() {
  const loginUser = getLoginUser("hanako_yamada");
  //loginUser = {userName: 'yamada hanako', userId: 'hanako_yamada'}
  return (
    <main className={style.Home}>
      <div className={style.left}>
        <Left {...loginUser} />
      </div>
      <div className={style.center}>
        <Center _contents={dataJson} />
      </div>
      <div className={style.right}>
        <Right />
      </div>
    </main >
  );
}
