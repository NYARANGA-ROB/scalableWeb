import React, { useState, useEffect } from "react";

interface CodeTextareaProps {
  code: string;
  updateCode: (code: string) => void;
}

const CodeTextarea: React.FC<CodeTextareaProps> = ({ code, updateCode }) => {
  
  const [text, setCode] = useState("");
  useEffect(()=>{
    updateCode(text);
  },[text])
  

  return (
    <textarea
      id="code-textarea"
      className="w-full outline-none h-56 p-4 bg-systembgDark-100 text-white font-mono text-lg rounded-md resize-none overflow-y-auto overflow-x-auto"
      value={code}
      title="code"
      aria-label="code"
      placeholder="code ? code : '' "
      onChange={e => setCode(e.target.value)}
    ></textarea>
  );
};

export default CodeTextarea;
