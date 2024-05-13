"use client";
import GPTLogo from "./gptLogo"
import Pencil from "./pencil"
import ThumbsUp from "./thumbsup"
import ThumbsDown from "./thumbsDown"
import ImageSet from "./imageSet"
import React, { FC, useState } from 'react';

interface Todo {
  id: number;
  completed: boolean;
  text: string;
}

interface TodoListProps {
  filteredTodos: Todo[];
  actions: {
    [key: string]: () => void;
  };
}



export default function ChatItem({item} : {item:any}) {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  return (
    <>
      <div className="py-2" key={item.key}>
      <div className="bg-item rounded-md flex p-2">
        <div className="shrink-0 w-12">
          <div className="w-11 h-11 grid place-items-center">
            {item.isUser ? (
              <div
                className="w-10 h-10 rounded-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    'url("https://assets.codepen.io/3685267/gpt-redesign-avatar.png")',
                }}
              ></div>
            ) : (
              <div className="w-9 h-9 grid place-items-center bg-brandGreen rounded-full">
                <GPTLogo className="w-6 h-6 text-blue-900" />
              </div>
            )}
          </div>
        </div>
        <div className=" w-full">
          <div className="px-3 h-10 flex items-center justify-between grow text-brandGray ">
            <div className="text-sm"> {formattedDate}</div>
            {item.isUser ? (
              <div className="inline-flex items-center">
                <button className="w-7 h-7 rounded-md grid place-items-center">
                  <Pencil className="w-5 h-5 " />
                </button>
              </div>
            ) : ( 
              <div className="inline-flex items-center space-x-2">
                <button className="w-7 h-7 rounded-md grid place-items-center">
                  <ThumbsUp className="w-5 h-5 " />
                </button>
                <button className="w-7 h-7 rounded-md grid place-items-center">
                  <ThumbsDown className="w-5 h-5 " />
                </button>
              </div>
            )}
          </div>
          <div
            className={`px-3 pb-3 ${
              item.isUser ? "text-white" : "text-brandGray"
            }`}
          >
            {item.content}
          </div>
          {item.images && <ImageSet images={item.images} />}
        </div>
        
      </div>
    </div>
    </>
  
  );
}
