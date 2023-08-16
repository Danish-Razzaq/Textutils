import React from "react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Textarea(props) {
  const notify = (msg) => toast.success(msg);
  
  
  const ConToUpper = () => {

    if (Text.length>0) {
    
      let newText = Text.toUpperCase();
      setTest(newText);
    notify("Successfully Convert To UpperCase");
  }
  };
  const ConToLower = () => {
    if (Text.length>0) {
    let newText = Text.toLowerCase();
    setTest(newText);
    notify("Successfully Convert To LowerCase");
  }};
  const Clear = () => {
    if (Text.length>0) {
    let newText = "";
    setTest(newText);
    notify("Successfully Removed");
  }};

  const Copy = () => {
    if (Text.length>0) {
    let text = document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    notify("Successfully Copied");
  }};

  const onchangeText = (event) => {
    setTest(event.target.value);
  };

  const RemoveSpaces = () => {
    if (Text.length>0) {
    let newText = Text.split(/[ ]+/);

    setTest(newText.join(" "));
    notify("Remove Spaces");
  }} ;

  const [Text, setTest] = useState("");
  return (
    <>
      <div className="  my-3  ">
        <div className={`text-${props.mood === "dark" ? "white" : "dark"}`}>
          <h1>Enter The Text</h1>{" "}
        </div>
        <textarea
          className={`p-3  form-control mb-3  text-${props.mood === "dark" ? "white" : "dark"} `}
          style={{ background: props.mood === "dark" ? "#343a40" : "white" }}
          name="textArea"
          placeholder="Enter Text..."
          id="textArea"
          onChange={onchangeText}
          value={Text}
          cols="30"
          rows="10"
        ></textarea>
        <Toaster />
        <button className="btn btn-primary m-1 " onClick={ConToUpper}>
          {" "}
          ConvertTOUpper{" "}
        </button>
        <button className="btn btn-info m-1 " onClick={ConToLower}>
          {" "}
          ConvertToLower{" "}
        </button>
        <button className="btn btn-secondary m-1" onClick={RemoveSpaces}>
          {" "}
          Remove Spaces{" "}
        </button>
        <button className="btn btn-warning m-1" onClick={Copy}>
          Copy
        </button>
        <button className="btn btn-danger m-1" onClick={Clear}>
          {" "}
          Clear{" "}
        </button>
      </div>
      <h2 className={`text-${props.mood === "dark" ? "white" : "black"}`}>
        Your Text Sumer{" "}
      </h2>
      <p className={`text-${props.mood === "dark" ? "white" : "black"}`}>
        {Text.split(" ").length -1} Worlds & {Text.length} Characters{" "}
      </p>
      <p className={`text-${props.mood === "dark" ? "white" : "black"}`}>
        {0.008 * Text.split(" ").length} Minutes Time TO Read
      </p>
      <p className={`text-${props.mood === "dark" ? "white" : "black"}`}>
        {Text.split(".").length - 1} Sentence{" "}
      </p>

      <h2 className={`text-${props.mood === "dark" ? "white" : "black"}`}>
        Preview
      </h2>
      <p className={`text-${props.mood === "dark" ? "white" : "black"} pb-3  `}>
        {" "}
        {Text.length > 0 ? Text : "Enter Something to Preview"}
      </p>
    </>
  );
}
