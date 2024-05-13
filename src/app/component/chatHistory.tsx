
import React, { useEffect } from 'react'
import Options from "../../app/component/options"
import SearchIcon from "../../app/component/searchIcon"
import PencilSquareIcon from "../../app/component/pencilSquareIcon"
import ListAllIcon from "../../app/component/listallicon"
import { pinned, all } from '../../utils/constant';
import PinnedIcon from "../../app/component/pinnedicon"
import Item from "../../app/component/Item"
import Times from "../../app/component/times"
import { useSelector, useDispatch } from 'react-redux'
import { selectQuestionById, ClearQuestion } from '../features/NewQuestion'

export default  function ChatHistory() {
  const posts = useSelector(selectQuestionById);
  let content;
  if (posts) {
    content =  posts.map((item : any) => (
      <Item item={item} key={item.key} />
    ))
  }

  const dispatch = useDispatch();
  
  const onClickClearAll = async (): Promise<void> => {
      dispatch(ClearQuestion())
  }
  
  return (
    <div className="fixed left-16 top-0 h-screen w-80 border-r-2 border-r-line bg-body z-10 flex flex-col px-2">
      <div className="shrink-0 px-3 flex items-center py-3">
        <h2 className="shrink-0 text-lg font-semibold ">Chats</h2>
        <div className="shrink-0 w-8 h-8 rounded-full bg-brandBlue ml-2 grid place-items-center text-sm font-semibold">
          24
        </div>
        <div className="grow"> </div>
        <button className="">
          <Options className="w-7 h-7" />
        </button>
      </div>
      <div className="shrink-0 flex px-3 space-x-2">
        <div className="h-10 grow rounded-md bg-card relative">
          <input className="h-10 w-full rounded-md bg-card pl-4 pr-10" />
          <div className="absolute right-0 w-10 inset-y-0 grid place-items-center">
            <SearchIcon className="w-5 h-5 text-brandGray" />
          </div>
        </div>
        <div className="h-10 w-10 rounded-md bg-brandOrange grid  place-items-center shrink-0">
          <PencilSquareIcon className="w-5 h-5 text-brandBlue" />
        </div>
      </div>
      <div className="shrink-0 uppercase px-3 mt-4 mb-1 flex items-center">
        <PinnedIcon className="w-5 h-5" />
        <span className="ml-2 text-sm font-semibold">pinned</span>
      </div>
      <div className="shrink-0">
        {pinned.map((item) => (
          <Item item={item} key={item.key} />
        ))}
      </div>
      <div className="shrink-0 uppercase px-3 mt-4 mb-1 flex items-center">
        <ListAllIcon className="w-5 h-5" />
        <span className="ml-2 text-sm font-semibold">all</span>
      </div>
      <div className="grow overflow-x-hidden overflow-y-auto">
        {content}

        
      </div>
      <div className="shrink-0 px-2 py-3">
        <button
          className="w-full py-2 text-sm rounded-md font-semibold bg-card flex justify-center items-center"
          onClick={onClickClearAll}
        > 
          <Times className="w-5 h-5" />
          <span className="ml-2">Clear All Chats</span>
        </button>
      </div>
    </div>
  );
}
