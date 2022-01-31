import './App.css';
import Store from './Store';
import Layout from './Layout/Layout';
import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyCPdrBZQsKNdWjKXpQo0tVGgkNZJdB4LWs",

  authDomain: "escape-room-e7459.firebaseapp.com",

  projectId: "escape-room-e7459",

  storageBucket: "escape-room-e7459.appspot.com",

  messagingSenderId: "556133562578",

  appId: "1:556133562578:web:21d08578de3f85438bd50b",

  measurementId: "G-ZV2VZM6TQE"

};

const app = initializeApp(firebaseConfig);



function App() {
  return (
    <Store>
    <div className='App'>
      <Layout />
    </div>
    </Store>
  );
}

export default App;
