"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Left from './Left'
import Center from './Center'
import Right from './Right'
import style from '../styles/Home.module.scss'
import postsJson from './data/posts.json'
import commentsJson from './data/comments.json'
import userJson from './data/user.json'
import { useState } from 'react';


function getLoginUser(_userId) {
  const _users = userJson;
  const _loginUser = _users.find((user) => user.userId = _userId);
  return _loginUser;
}

export default function Home() {
  const loginUser = getLoginUser("hanako_yamada");
  //loginUser = {userName: 'yamada hanako', userId: 'hanako_yamada'}

  // 検索窓のワード
  const [searchWord, setSearchWord] = useState('');
  // searchWordの変更
  const searchWordChange = (newValue) => {
    setSearchWord(newValue);
  };

  // 表示する投稿
  function searchPosts(_postsData, _commentsData, _word) {
    let postsArray = [];
    if (_word == null || _word == undefined) {
      _postsData.forEach(_post => {
        const postComments = countComments(_post.id, _commentsData);
        const obj = { ..._post, "comments": postComments }
        postsArray.push(obj);
      });
    } else {
      _postsData.forEach(_post => {
        if (_post.userName.includes(_word) || _post.content.includes(_word)) {
          const postComments = countComments(_post.id, _commentsData);
          const obj = { ..._post, "comments": postComments }
          postsArray.push(obj);
        }
      });
    }
    return postsArray;
  }
  // 投稿に対するコメントの取得
  function countComments(_parentId, _comments) {
    const commentArray = _comments.filter(_comment => _comment.parentId == _parentId);
    return commentArray;
  }

  const posts = searchPosts(postsJson, commentsJson, searchWord);
  //[ {
  //   "id": 1,
  //   "userName": "suzu hirose",
  //   "content": "こんにちは、投稿です",
  //   "date": "2024-04-23 12:00:00",
  //   "like": 3,
  //   "comments": []
  // },...]


  return (
    <main className={style.Home}>
      <div className={style.left}>
        <Left {...loginUser} />
      </div>
      <div className={style.center}>
        <Center _contents={posts} />
      </div>
      <div className={style.right}>
        <Right searchWordChange={searchWordChange} />
      </div>
    </main >
  );
}
