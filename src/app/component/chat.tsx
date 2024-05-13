"use client";

import React, { useEffect } from 'react'
import { dataMain } from '../../utils/constant';
import ChatItem from "../component/chatitem"
import { useSelector, useDispatch } from 'react-redux'
import { selectAllQuestions } from '../features/NewQuestion'
import { store } from '../store/store'
export default function Chat() {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllQuestions);

  const postStatus = useSelector((state) => (state as any).posts.status);
  const error = useSelector((state) => (state as any).posts.error)


  // useEffect(() => {
  //   if (postStatus === 'idle') {
  //    store.dispatch(fetchPosts())
  //   }
  // }, [postStatus, dispatch]);

  let content;

  if (posts) {
    var Questions = posts;
    content = Questions.map((post : any) => (
      <ChatItem item={post} key={post.id} />
    ))
  }
  // if (postStatus === 'loading') {
  //   content = <div>Loading...</div>
  // } else if (postStatus === 'succeeded') {
  //   // Sort posts in reverse chronological order by datetime string
  //   const orderedPosts = posts
  //     .slice()
  //     .sort((a : any, b: any) => b.date.localeCompare(a.date))

  //   content = orderedPosts.map((post : any) => (
  //     <ChatItem item={post} key={post.id} />
  //   ))
  // } else if (postStatus === 'failed') {
  //   content = <div>{error}</div>
  // }
    return (
      <div className=" " >
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-48">
       {content} 
       {/* {dataMain.map((i : any) => (
          <ChatItem item={i} key={i.key} />
        ))} */}
      </div>
    </div>
    );
  }