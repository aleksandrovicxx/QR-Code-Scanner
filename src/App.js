import './App.css';
import React, {useEffect} from 'react'
import Instascan from 'instascan'

function App() {
  useEffect(() => {
    const scanner = new Instascan.Scanner({ video: document.getElementById('preview')})
    scanner.addListener('scan', function (content) {
      alert('Skenirani sadrzaj: ' + content)
    });
    Instascan.Camera.getCameras().then(cameras => {
      if(cameras.length > 0) {
        scanner.start(cameras[0])
      } else {
        console.log('Nema podataka sa kamera.');
      }
    }).catch(e => {
      console.log(`Greska ${e}`);
    })
  }, [])


  return (
    <div className="App">
      <video id='preview'></video>
    </div>
  );
}

export default App;
