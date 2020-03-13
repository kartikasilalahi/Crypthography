import React, { useState } from 'react';
import 'mdbreact/dist/css/mdb.css'
import './App.css';
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact'
function App() {

  const [result, setresult] = useState('Result here');
  const [datainput, setdatainput] = useState([]);
  const [alphabet] = useState('abcdefghijklmnopqrstuvwxyz');
  const [error, seterror] = useState('');

  const btnEncrypt = () => {
    let { teks, key } = datainput
    if (teks && key) {
      var result = ''
      for (var i = 0; i < teks.length; i++) {
        let letter = teks[i].toLowerCase();
        let index = alphabet.indexOf(letter);

        if (index !== -1) {
          index += Number(key)
          index = index % 26
          console.log(index)
          result += alphabet[index]
        } else result += ' '
      }
      setresult(result)
    } else {
      seterror("Ops.. Field can't be empty!")
    }
  }

  const btnDecrypt = () => {
    let { teks, key } = datainput
    if (teks && key) {
      let cipherText = teks.toLowerCase()
      let result = ""
      for (let i = 0; i < cipherText.length; i++) {
        let character = cipherText.charAt(i)
        let index = alphabet.indexOf(character)
        let cipherIndex = index - key

        if (index !== -1) {
          if (cipherIndex < -26) {
            cipherIndex = Math.abs(Math.abs(cipherIndex % 26) - 26)
            if (cipherIndex === 26) cipherIndex = 0
            result += alphabet.charAt(cipherIndex)
          }
          else if (cipherIndex < 0) {
            cipherIndex = cipherIndex + 26
            result += alphabet.charAt(cipherIndex)
          } else if (cipherIndex >= 0) {
            result += alphabet.charAt(cipherIndex)
          }

        } else {
          if (result === " ") result += " "
          else result += character
        }
      }
      setresult(result)
    } else {
      seterror("Ops.. Field can't be empty!")

    }

  }

  // console.log(datainput)
  return (
    <div className="App p-5">
      <div className="mx-auto" style={{ width: '50%' }}>
        <h3 className="mb-4"> CRYPTOGRAPHY </h3>
        <MDBCard className="p-3" style={{ color: 'gray' }}>
          <MDBCardHeader>
            <h5>Plaintext - Ciphertext || Ciphertext - Plaintext</h5>
          </MDBCardHeader>
          <MDBInput size="lg" label="Input Plaintext or Ciphertext here" type="text" onChange={e => { setdatainput({ ...datainput, teks: e.target.value }) }} />
          <MDBInput size="lg" label="Input key" group type="number" onChange={e => { setdatainput({ ...datainput, key: e.target.value }) }} />
          {
            error ?
              <div className="d-flex alert alert-danger ">
                <div className='p-0'>
                  <p >{error}</p>
                </div>
                <div className='p-0 ml-auto'>
                  <p onClick={() => seterror('')} style={{ fontWeight: 'bolder', cursor: 'pointer' }}>x</p>
                </div>
              </div> : null
          }

          <div className="d-flex">
            <MDBBtn className="w-50" onClick={btnEncrypt}>encrypt</MDBBtn>
            <MDBBtn className="w-50" onClick={btnDecrypt} >decrypt</MDBBtn>
          </div>
          <MDBCardBody className="mt-2">
            <h4>{result}</h4>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div >
  );
}

export default App;
