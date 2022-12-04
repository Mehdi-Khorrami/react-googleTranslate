import React from "react";
import { error, success } from "../js/master";
import { useEffect } from "react";
import axios from "axios";
import SlelectBox from "./SlelectBox ";
import { AiFillCopy } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import Animation from "./Animation";
import { useState } from "react";
import copy from 'copy-to-clipboard';
const TranslatBox = () => {
    const [q,setq] = useState("")
    const [source , setsource]= useState("")
    const [target , settarget]= useState("")
    const [output , setoutput]= useState("")
    const handleSelectChange = ({target:{value,id}}) =>{
       id == 'source' && setsource(value)
       id == 'target' && settarget(value)
    }
    const Para = async () =>{
        if( q.length < 1 ){
            setoutput("")
            return false
        }
        if( source == "" || target == "" ){
            return error("Please select language");
        }
        try{
            let res = await axios.post("",{q , source , target , format : "text" })
            res= res.data.translatedText
            setoutput(res)
        }catch(err){
            console.log(err)
        }
    }
    const copyToClipboard = (text) =>{
        copy(text)
        success(("Copied to clipboard!"))
    }
    const resetText = () =>{
        if (q === "" && output === "") {
            Error("Textbox is already empty!")
        } else {
            success("Text removed!")
            setq("");
            setoutput("");
        }
    }
    useEffect(() =>{
       let x = setTimeout(() => {
            Para() 
        },1000);
        return () => {
            clearTimeout(x)
        }
    },[q])
    return (
        <>
        <div className="mainbox">
            <div className="col-5">
                  <SlelectBox id={'source'} select={handleSelectChange}/>
                  <div className="box">
                    <textarea onChange={(e) => {setq(e.target.value)}} value={q} className="outputResult"></textarea>
                  </div>
                  <div className="iconBox">
                        <p>{q.length}/250</p>
                       <AiFillCopy className="icon" onClick={() =>{copyToClipboard(q)}}  />
                       <MdClear className="icon" onClick={resetText}  />
                  </div>
            </div>
            <div className="col-5">
                <SlelectBox id={'target'} select={handleSelectChange}/>
                <div className="outputResult box">
                    <p id="output">{output}</p>
                </div>
                <div className="iconBox">
                        <p>{output.length}/250</p>
                       <AiFillCopy className="icon" onClick={() =>{copyToClipboard(output)}} />
                  </div>
            </div>
        </div>
        <Animation />
        <div className="tagLine">
            <p id="madeByMohit">Made with ❤️ by Mehdi khorrami</p>
        </div>
    </>
    )
}
export default TranslatBox;