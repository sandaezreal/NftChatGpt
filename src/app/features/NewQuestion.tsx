import { el } from '@faker-js/faker';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface Question {
  key: number;
  content: string;
  isUser: boolean;
  title: string;
  images?: { key: number; url: string }[];
}

interface QuestionsState {
  Questions: Question[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState: QuestionsState = {
  Questions: [
    {
      key: 0,
      title: "How to invest in crypto.",
      content: "How to invest in crypto.",
      isUser: true,
    },
    {
      key: 1,
      title: "How to invest in crypto.",
      content: "Investing in cryptocurrency can be exciting, but it's important to approach it with caution and a solid understanding of the risks involved. Here's a basic guide to get started: Research: Before investing, educate yourself about cryptocurrencies. Understand how they work, their underlying technology (like blockchain), and the different types of cryptocurrencies available. Choose a Reliable Exchange: Select a reputable cryptocurrency exchange to buy and sell cryptocurrencies. Popular exchanges include Coinbase, Binance, and Kraken. Make sure the exchange you choose has strong security measures in place.",
      isUser: false,
    },
    {
      key: 2,
      title: "What NFTs are popular now.",
      content: "What NFTs are popular now",
      isUser: true,
    },
    {
      key: 3,
      title: "What NFTs are popular now.",
      content: "As of my last update, the popularity of specific NFTs can fluctuate rapidly due to trends, celebrity endorsements, and various other factors. However, certain types of NFTs have consistently garnered attention, such as digital art by renowned artists, collectibles tied to gaming or entertainment franchises, and tokens representing ownership of virtual real estate in blockchain-based worlds. Platforms like OpenSea, Rarible, and Foundation are popular marketplaces for buying and selling NFTs. To get the most up-to-date information on currently trending NFTs, it's advisable to check these platforms or follow NFT-related news sources and social media channels. ",
      isUser: false,
      images:  [
        { key: 0, url: "https://assets.codepen.io/3685267/gpt-redesign-0.png" },
        { key: 1, url: "https://assets.codepen.io/3685267/gpt-redesign-1.png" },
        { key: 2, url: "https://assets.codepen.io/3685267/gpt-redesign-2.png" },
        { key: 3, url: "https://assets.codepen.io/3685267/gpt-redesign-3.png" },
        { key: 4, url: "https://assets.codepen.io/3685267/gpt-redesign-4.png" },
      ],
    },
    {
      key: 4,
      title: "Can you save the conversation.",
      content: "Can you save the conversation.",
      isUser: true,
    },
    {
      key: 5,
      title: "Can you save the conversation.",
      content: "Conversation will be saved on Chats Tab tagged as Pinned",
      isUser: false,
    },
    {
      key: 6,
      title: "Can you give me an example of NFTs",
      content: "Can you give me an example of NFTs",
      isUser: true,
    },
    {
      key: 7,
      title: "Can you give me an example of NFTs",
      content: "Sure, here is an example of NFTs",
      isUser: false,
      images: [
        { key: 0, url: "https://assets.codepen.io/3685267/gpt-redesign-5.png" },
        { key: 1, url: "https://assets.codepen.io/3685267/gpt-redesign-6.png" },
        { key: 2, url: "https://assets.codepen.io/3685267/gpt-redesign-7.png" },
        { key: 3, url: "https://assets.codepen.io/3685267/gpt-redesign-8.png" },
        { key: 4, url: "https://assets.codepen.io/3685267/gpt-redesign-9.png" },
      ],
    },
  ],
  status: 'idle',
  error: null,
}


const QuestionsSlice = createSlice({
  name: 'Questions',
  initialState,
  reducers: { 
    AddNewQuestion(state, action){
      var string = action.payload.title;
      var title = action.payload.title;
      console.log(string,'aa');
      if (string.includes("invest")) {
        state.Questions.push(action.payload);
        state.Questions.push({
          title: title,
          content: "Investing in cryptocurrency can be exciting, but it's important to approach it with caution and a solid understanding of the risks involved. Here's a basic guide to get started: Research: Before investing, educate yourself about cryptocurrencies. Understand how they work, their underlying technology (like blockchain), and the different types of cryptocurrencies available. Choose a Reliable Exchange: Select a reputable cryptocurrency exchange to buy and sell cryptocurrencies. Popular exchanges include Coinbase, Binance, and Kraken. Make sure the exchange you choose has strong security measures in place.",
          isUser: false
      } as Question);
      } else if (string.includes("nft")){
        state.Questions.push(action.payload);
        state.Questions.push({
          title: title,
          content: "As of my last update, the popularity of specific NFTs can fluctuate rapidly due to trends, celebrity endorsements, and various other factors. However, certain types of NFTs have consistently garnered attention, such as digital art by renowned artists, collectibles tied to gaming or entertainment franchises, and tokens representing ownership of virtual real estate in blockchain-based worlds. Platforms like OpenSea, Rarible, and Foundation are popular marketplaces for buying and selling NFTs. To get the most up-to-date information on currently trending NFTs, it's advisable to check these platforms or follow NFT-related news sources and social media channels.",
          isUser: false,
          images:  [
            { key: 0, url: "https://assets.codepen.io/3685267/gpt-redesign-0.png" },
            { key: 1, url: "https://assets.codepen.io/3685267/gpt-redesign-1.png" },
            { key: 2, url: "https://assets.codepen.io/3685267/gpt-redesign-2.png" },
            { key: 3, url: "https://assets.codepen.io/3685267/gpt-redesign-3.png" },
            { key: 4, url: "https://assets.codepen.io/3685267/gpt-redesign-4.png" },
          ],
      } as Question);
      } else if (string.includes("Gainer")) {
        
        state.Questions.push(action.payload);
        state.Questions.push({
          title: title,
          content: "Sure! As of the last update, the top gainer in the last 24 hours in the cryptocurrency market can vary depending on market conditions and fluctuations. To find the most current information, you can check popular cryptocurrency tracking websites like CoinMarketCap, CoinGecko, or CoinDesk. These platforms provide real-time data on cryptocurrency prices, market capitalization, volume, and top gainers within specific time frames.",
          isUser: false,
      } as Question);
      }  else if (string.includes("Loser")) {
        state.Questions.push(action.payload);
        state.Questions.push({
          title: title,
          content: "Sure! As of the last update, the top gainer in the last 24 hours in the cryptocurrency market can vary depending on market conditions and fluctuations. To find the most current information, you can check popular cryptocurrency tracking websites like CoinMarketCap, CoinGecko, or CoinDesk. These platforms provide real-time data on cryptocurrency prices, market capitalization, volume, and top gainers within specific time frames.",
          isUser: false,
      } as Question);
      } else
      {
        state.Questions.push(action.payload);
        state.Questions.push({
         title: title,
         content: 'It seems like your input was truncated or incomplete. Could you please provide more context or clarify your question? Im here to help!',
         isUser: false
     } as Question);
       }
     
    },
     ClearQuestion(state){
       state.Questions = [];
    },
  },
})

export const { AddNewQuestion , ClearQuestion } = QuestionsSlice.actions

export default QuestionsSlice.reducer

export const selectAllQuestions = (state: { Questions: QuestionsState }) => state.Questions.Questions

export const selectQuestionById = (state: { Questions: QuestionsState }) =>
  state.Questions.Questions.filter((Question) => Question.isUser === false)
// export const selectQuestionById = (state: { Questions: QuestionsState }, QuestionId: string) =>
//   state.Questions.Questions.find((Question) => Question.id === QuestionId)