import './App.scss';
import React from 'react';
import Editor from './Components/Editor';
import Preview from './Components/Previewer';

function App() {
  const PLACEHOLDER =  `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo](https://camo.githubusercontent.com/7d8819bb9d6033fc7d311189d26030780ddd7b7e67df350d55065ad72cf32445/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d52656163742d3230323032303f7374796c653d666c61742d737175617265266c6f676f3d7265616374)
`;
  
  const [editorValue, setEditorValue] = React.useState(PLACEHOLDER);
  
  const onEditorInput = (event) => {
    setEditorValue(event.target.value)
  }
  
  return (
    <div className='wrapper'>
      <Editor value={editorValue} setValue={setEditorValue} onInput={onEditorInput} />
      <Preview value={editorValue}/>
    </div>
  );
}

export default App;
