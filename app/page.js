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
  const users = userJson;
  // ログインユーザー　 {userName: 'yamada hanako', userId: 'hanako_yamada'}
  const loginUser = getLoginUser("hanako_yamada");

  // 検索窓のワード
  const [searchWord, setSearchWord] = useState('');
  // searchWordの変更
  const searchWordChange = (newValue) => {
    setSearchWord(newValue);
    setAllPosts(searchPosts(posts, comments, newValue));
  };

  const [posts, setPosts] = useState(postsJson); //投稿
  const [comments, setComments] = useState(commentsJson); //返信

  // 投稿　[ { "id": 1,  userId: "suzu_hirose" "userName": "suzu hirose", "content": "こんにちは、投稿です", "date": "2024-04-23 12:00:00", "like": 3, "comments": [] },...]
  const [allPosts, setAllPosts] = useState(searchPosts(posts, comments, searchWord));

  // 次の投稿ID（JSONを使用しているため変数として保持する必要あり）
  const [nextPostId, setNextPostId] = useState(21);

  // 表示する投稿
  function searchPosts(_postsData, _commentsData, _word) {
    let postsArray = [];
    if (_word == null || _word == undefined) {
      // 検索ワードがない場合
      _postsData.forEach(_post => {
        const postComments = getComments(_post.id, _commentsData);
        const userName = getUserName(_post.userId);
        const obj = { ..._post, "comments": postComments, "userName": userName }
        postsArray.push(obj);
      });
    } else {
      // 検索ワードがある場合
      _postsData.forEach(_post => {
        if (_post.content.includes(_word)) {
          const postComments = getComments(_post.id, _commentsData);
          const userName = getUserName(_post.userId);
          const obj = { ..._post, "comments": postComments, "userName": userName }
          postsArray.push(obj);
        }
      });
    }
    return postsArray;
  }
  // 投稿に対するコメントの取得
  function getComments(_parentId, _comments) {
    const commentArray = [];
    for (const _comment of _comments) {
      if (_comment.parentId == _parentId) {
        const obj = { ..._comment, 'userName': getUserName(_comment.userId) };
        commentArray.push(obj);
      }
    }
    return commentArray;
  }

  // ユーザー名の取得
  function getUserName(_userId) {
    let postUser;
    for (const user of users) {
      if (user.userId == _userId) {
        postUser = user;
        break;
      }
    };
    return postUser.userName;
  }

  // 新規投稿保存
  const saveNewPost = (_value) => {
    _saveNewPost(nextPostId, _value, loginUser);
  }
  const _saveNewPost = (_postId, value, _loginUser) => {
    const obj = {
      id: _postId,
      content: value,
      date: new Date().toJSON(),
      like: 0,
    }
    const newPost = { ..._loginUser, ...obj };
    setPosts([newPost, ...posts]);
    setAllPosts(searchPosts([newPost, ...posts], comments, searchWord));
    setNextPostId(_postId + 1);
  }

  // 新規コメント保存
  const saveNewComment = (_value, _parentId) => {
    _saveNewComment(nextPostId, _value, _parentId, loginUser);
  };
  const _saveNewComment = (_postId, value, _parentId, _loginUser) => {
    const obj = {
      id: _postId,
      parentId: _parentId,
      content: value,
      date: new Date().toJSON()
    }
    const newComment = { ..._loginUser, ...obj };
    setComments([...comments, newComment]);
    setAllPosts(searchPosts(posts, [...comments, newComment], searchWord));
    setNextPostId(_postId + 1);
  };
  //    {"id": 2, "parentId": 1, "userId": "arisu_hirose", "userName": "arisu hirose", "content": "やっほーコメントです", "date": "2024-04-23T03:00:00.000Z"},


  return (
    <div className={style.body}>
      <div className={style.menu}>
        <a className={style.menu__backButton} href='https://tsukitsuki-0305.github.io/'>
          ← ポートフォリオへ戻る
        </a>
      </div>
      <main className={style.Home}>
        <div className={style.left}>
          <Left {...loginUser} saveNewPost={saveNewPost} />
        </div>
        <div className={style.center}>
          <Center _contents={allPosts} saveNewComment={saveNewComment} />
        </div>
        <div className={style.right}>
          <Right searchWordChange={searchWordChange} />
        </div>
      </main >
    </div>
  );
}
