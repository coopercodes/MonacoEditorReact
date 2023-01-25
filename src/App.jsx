import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import Editor from "@monaco-editor/react"
import './App.css'

const files = {
  "script.py": {
    name: "script.py",
    language: "python",
    value: "Here is some python text"
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<div> </div>"
  }
}

function App() {
  const [fileName, setFileName] = useState("script.py"); // change to "index.html"
  const editorRef = useRef(null);
  const file = files[fileName];
  // files["script.py"] -> file -> name, language, value -> pass those to the editor

  // it will take up the full width / height of its container (width: 100%, height: 100%)
  // editors of any size
  // full screen, embed type size

  // 1. Be able to change from 1 file to the next
  // 2. Get the value of the Monaco editor

  // a file path (name), a language, a default value

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function getEditorValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <div className="App">
      <button onClick={() => setFileName("index.html")}>
        Switch to index.html
      </button>
      <button onClick={() => setFileName("script.py")}>
        Switch to script.py
      </button>
      <button onClick={() => getEditorValue()}>
        Get Editor Value
      </button>
      <Editor
        height="100vh"
        width="100%"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </div>
  )
}

export default App
