import React , {useState} from 'react';
import QRCode from "react-qr-code";
import './App.css';

function App() {

  const [url,setUrl] = useState("");
  const [visible,setVisible] = useState(false);
  const [fullUrl,setFullUrl] = useState("");
  const handleGenerator = () => {
    if(!url){
      return;
    }
    setVisible(true);
    setFullUrl(url);
  }

  return (
    <div className="App">
       <h1>QR Code Generator</h1>
       <div className = "container">
        <div className="parent">
        <div className = "box">
          <input type="text" placeholder="Enter a URL"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value)
            }}
          />

          <button onClick={handleGenerator}>Generate QR Code</button>
        </div>
        {visible && (
          <div className="image">
            <QRCode value={fullUrl} size={250}/>
          </div>
        ) }
       </div>
        </div>
    </div>
  );
}

export default App;
