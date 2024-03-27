import React, { useState, useRef, } from 'react';
import QrReader from 'react-qr-reader'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function VotingLogin() {
    const navigate = useNavigate()
    const qrRef = useRef(null);
   
   
    const [fileResult, setFileResult] = useState("");
    const [camerascan, setCameraScan] = useState(false);

    const handleScan = (result) => {
      
        if (result) {
            console.log('Scan result:', result);
            const val = new Array(result)
            setFileResult(val);
            
      
        }
    };
    const handleError = (error) => {
        console.error('QR scan error:', error);
    };

    const handleQRButtonClick = () => {
      console.log("scan click",camerascan,qrRef);
        qrRef.current.openImageDialog();
    };
    let valid = "";


  const handleVotingLogin = async()=>{
    
    if(fileResult[0].split(",")[3].split("]")[0].length===333){
        valid = "allowed"
        console.log(" if equal",valid);
    }
    else {
        valid = "not allowed"
        console.log(" if not",valid);
    }
    console.log(" check before going in backend",valid);
     const login = await fetch("/v1/voting/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
            
        },
        body:JSON.stringify({adhar:fileResult[0].split(",")[3].split("]")[0],
        validUser:valid
    })
     })
       const data = await login.json()
     console.log(" login response",data.sucess);
     if(data.sucess){
      navigate("/vote/voting")
        console.log(" valid user");
     }

  }
    
  if(fileResult){
    handleVotingLogin()
    const check = Array.isArray(fileResult)
    // console.log(" check before going",check,fileResult[0].split(",")[3].split("]")[0]);
    console.log(" check ", check,fileResult[0].split(",")[3].split("]")[0].length);
        
    }
    
    return (
        <div className="w-80">
         
            <h2>Voting App</h2>
            <button className='bg-cyan-500 p-3 m-2 rounded-md ' onClick={handleQRButtonClick}>Scan</button>
            <button className='bg-cyan-500 p-3 m-2 rounded-md ' onClick={() => setCameraScan(!camerascan)}>{camerascan ? "Scan using camera" : "Scan using photo"}</button>
                <QrReader
            
                ref={qrRef}
                delay={300}
                onError={handleError}
                onScan={handleScan}
                legacyMode={camerascan}
            />
            <h2>{fileResult}</h2>
        </div>
    );
}

export default VotingLogin;
