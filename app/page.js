"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Left from './Left'
import Center from './Center'
import Right from './Right'
import style from '../styles/Home.module.scss'
import json from './data/data.json'

export default function Home() {
  return (
    <main className={style.Home}>
      <div className={style.left}>
        <Left />
      </div>
      <div className={style.center}>
        <Center _contents={json} />
      </div>
      <div className={style.right}>
        <Right />
      </div>
    </main >
  );
}
