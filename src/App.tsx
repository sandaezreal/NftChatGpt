import React, { FC, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Options from "./app/component/options"
import Times from "./app/component/times"
import StarIcon from "./app/component/starIcon"
import WarningIcon from "./app/component/warningIcon"
import ChatHeader from "./app/component/chatHeader"
import ChatIcon from "./app/component/chatIcon"
import ChatInput from "./app/component/chatInput"
import Chat from "./app/component/chat"
import GPTLogo from "./app/component/gptLogo"
import Main from "./app/component/dashboard"
import { store } from './app/store/store'
import { Provider, connect } from 'react-redux'
import ChatHistory  from "./app/component/chatHistory"

import { AddNewQuestion } from './app/features/NewQuestion'

const ADD = 'ADD';
const EDIT = 'EDIT';
const DELETE = 'DELETE';



interface AddMessageAction {
  type: typeof ADD;
  message: string;
}

interface EditMessageAction {
  type: typeof EDIT;
  index: number;
  message: string;
}

interface DeleteMessageAction {
  type: typeof DELETE;
  index: number;
}

type MessageAction = AddMessageAction | EditMessageAction | DeleteMessageAction;

const addMessage = (message: string): AddMessageAction => {
  return {
    type: ADD,
    message: message
  }
};

const editMessage = (index: number, message: string): EditMessageAction => {
  return {
    type: EDIT,
    index: index,
    message: message
  }
};

const deleteMessage = (index: number): DeleteMessageAction => {
  return {
    type: DELETE,
    index: index
  }
};

interface MessageState {
  messages: string[];
}

//const store = Redux.createStore(messageReducer);



function LogoutIcon({className} : {className:any}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      />
    </svg>
  );
}

function ThemeIcon({className} : {className:any}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
}



function UsersIcon({className} : {className:any}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  );
}

function DashboardIcon({className} : {className:any}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      />
    </svg>
  );
}

function SettingsIcon({className} : {className:any}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}


interface Image {
  key: string;
  url: string; // Assuming 'url' is a string
}



function Sidebar() {
  return (
    <div className="bg-black fixed left-0 top-0 h-screen w-16 z-10 flex flex-col items-center pt-4">
      <div className="w-10 h-10 bg-brandGreen rounded-full shrink-0 grid place-items-center">
        <GPTLogo className="w-6 h-6 text-blue-900" />
      </div>
      <div className="grow flex flex-col space-y-4 pt-24">
        <button className="w-10 h-10 rounded-md grid place-items-center text-brandGray">
          <DashboardIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-md grid place-items-center text-white bg-brandBlue">
          <ChatIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-md grid place-items-center text-brandGray">
          <UsersIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-md grid place-items-center text-brandGray">
          <SettingsIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="shrink-0 pb-4 flex flex-col space-y-4">
        <button
          className="w-10 h-10 rounded-md grid place-items-center "
          style={{ color: "#b0a569" }}
        >
          <ThemeIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-md grid place-items-center text-white bg-card">
          <LogoutIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function Heading({text} : {text:any}) {
  return (
    <div className="flex items-center justify-between mt-3 mb-1">
      <h3 className="text-md">{text}</h3>
      <Options className="w-7 h-7" />
    </div>
  );
}

// function Info() {
//   return (
//     <div className="border-l-2 border-l-line fixed right-0 top-0 h-screen w-80 bg-body z-10 p-3">
//       <div className="flex justify-end">
//         <Times className="w-5 h-5" />
//       </div>
//       <Heading text="Capabilities" />
//       <div className="flex space-x-2">
//         <div className="w-1/2 bg-card rounded-md p-2">
//           <div className="w-9 h-9 rounded-full bg-brandOrange grid place-items-center">
//             <StarIcon className="w-5 h-5 text-blue-900" />
//           </div>
//           <p className="mt-4 text-sm">
//             Remember what user said earlier in the chat
//           </p>
//         </div>
//         <div className="w-1/2 bg-card rounded-md p-2">
//           <div className="w-9 h-9 rounded-full grid place-items-center bg-[#3a3a3c]">
//             <StarIcon className="w-5 h-5 text-white" />
//           </div>
//           <p className="mt-4 text-sm">
//             Allows users to provide follow-up corrections
//           </p>
//         </div>
//       </div>
//       <Heading text="Limitations" />
//       <div className="flex space-x-2">
//         <div className="w-1/2 bg-card rounded-md p-2">
//           <div className="w-9 h-9 rounded-full bg-brandOrange grid place-items-center">
//             <WarningIcon className="w-5 h-5 text-blue-900" />
//           </div>
//           <p className="mt-4 text-sm">
//             May occasionally provide incorrect information
//           </p>
//         </div>
//         <div className="w-1/2 bg-card rounded-md p-2">
//           <div className="w-9 h-9 rounded-full bg-[#3a3a3c] grid place-items-center">
//             <WarningIcon className="w-5 h-5 text-white" />
//           </div>
//           <p className="mt-4 text-sm">Limited knowledge of world and events</p>
//         </div>
//       </div>
//       <Heading text="Trending Topics" />
//       <div className="flex flex-wrap">
//         {trending.map((i) => (
//           <TrendingItem item={i} key={i.key} />
//         ))}
//       </div>

//       <div className="mt-6 bg-brandBlue rounded-md p-4">
//         <div className="flex items-center justify-center font-semibold">
//           <div className=""> Upgrade to </div>
//           <div className="ml-2 uppercase bg-brandGreen text-blue-900 rounded-md px-2 py-0.5">
//             plus
//           </div>
//         </div>
//         <p className="text-sm px-4 mt-3 text-center text-[#a6aeea]">
//           Get faster response speed, priority access to new features
//         </p>
//         <button className="w-full bg-[#3345c5] rounded-md mt-5 py-3 font-semibold border border-[#4b5cd7]">
//           Buy ChatGPT PLUS
//         </button>
//       </div>
//     </div>
//   );
// }



// ReactDOM.render(
//   <Provider store={store}>
//        <div className='flex'>
//        <Sidebar />
//       <Main/>
//        <ChatHistory />
//        <ChatHeader />
//        <Chat />
//         <ChatInput />
//        </div>
//   </Provider>,
// document.getElementById("root"));

// React:
interface PresentationalProps {
  messages: string[];
  submitNewMessage: (message: string) => void;
  editExistingMessage: (index: number, message: string) => void;
  deleteExistingMessage: (index: number) => void;
}

// React-Redux

const Presentational: FC<PresentationalProps> = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      submitMessage();
    }
  }

  const submitMessage = () => {
    if (input === "") {
      return;
    }
    props.submitNewMessage(input);
    setInput('');
  }

  return (
       <div className='flex'>
       <Sidebar />
      <Main/>
       <ChatHistory />
       <ChatHeader />
       <Chat />
        <ChatInput />
       </div>
  )
};

interface RootState {
  messages: string[];
}

const mapStateToProps = (state: RootState) => {
  let _state = localStorage.state ? localStorage.state : state;
  return { messages: _state.messages }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    submitNewMessage: (message: string) => {
      dispatch(addMessage(message))
    },
    editExistingMessage: (index: number, message: string) => {
      dispatch(editMessage(index, message))
    },
    deleteExistingMessage: (index: number) => {
      dispatch(deleteMessage(index))
    },
  }
};



const ConnectedPresentational = connect(mapStateToProps, mapDispatchToProps)(Presentational);

const Home = () => {
  return (
    <Provider store={store}>
      <ConnectedPresentational />
      asd
    </Provider>
  );
}

const AppWrapper: FC = () => {
  return (

        <Router>
           <Routes>
            <Route path="/" element={<Home />} />
           </Routes>
      </Router>
  );
};

// ReactDOM.render(<AppWrapper />, document.getElementById('root'));
export default AppWrapper;


