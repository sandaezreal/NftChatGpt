import Refresh from "../component/refresh"
import Mic from "../component/mic"
import Send from "../component/send"
import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddNewQuestion } from '../features/NewQuestion'

const ADD = 'ADD';

interface AddMessageAction {
  type: typeof ADD;
  message: string;
}

type MessageAction = AddMessageAction;

const addMessage = (message: string): AddMessageAction => {
  return {
    type: ADD,
    message: message
  }
};

export default  function ChatInput(): JSX.Element {
  const [addRequestStatus, setAddRequestStatus] = useState<string>('idle')
  const [input, setInput] = useState<string>('');


  
  const canSave: boolean =
  [input].every(Boolean) && addRequestStatus === 'idle'

const onSavePostClicked = async (): Promise<void> => {
  if (canSave) {
    try {
      setAddRequestStatus('pending')
      if (input === "") {
        return;
      } 
      await dispatch(AddNewQuestion({ title: input,content: input, isUser: true }))

      setInput('');
    } catch (err) {
      console.error('Failed to save the post: ', err)
    } finally {
      setAddRequestStatus('idle')
    }
  }
}

  const dispatch = useDispatch();


const handleChange = (event : React.ChangeEvent<HTMLTextAreaElement>): void => {
  setInput(event.target.value);
}


const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
  if (event.key === "Enter") {
    submitMessage();
  }
}

const submitMessage = (): void => {
  if (input === "") {
    return;
  }
  setInput('');
}

    return (
      
      <div className="fixed bottom-0 inset-x-0 bg-input pt-8">
        <div className="" >
          <div className="max-w-xl ml-auto px-4 pb-3">
            <div className="flex justify-center py-2">
              <button
                className="py-2.5 px-6 rounded-md bg-card flex items-center"
                onClick={() => {}}
              >
                <Refresh className="w-5 h-5" />
                <span className="ml-2">Regenerate Anwser</span>
              </button>
            </div>
  
            <div className="bg-card rounded-md relative">
              <textarea
                value={input}
                onChange={handleChange}
                
                rows={2}
                className="w-full bg-card rounded-md py-2 px-4 resize-none"
              />
  
              <div
                className="absolute flex items-center space-x-3"
                style={{
                  right: "16px",
                  top: "50%",
                  transform: "translate(0, -50%)",
                }}
              >
                <button 
                  className="w-10 h-10 grid place-items-center rounded-md text-white"
                  onClick={() => {}}
                >
                  <Mic className="w-5 h-5" />
                </button>
                <button onClick={onSavePostClicked} disabled={!canSave}
                  className=" w-10 h-10 grid place-items-center bg-brandBlue text-white rounded-md"
                >
                  <Send className="w-5 h-5" />
                </button>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }