const Editor = ({ value, setValue, onInput }) => {
    return (
        <div className='block'>
            <h4 className='block__header'>Editor</h4>
            <div className='line' />
            <textarea id='editor' onChange={onInput} value={value} />
        </div>
    )
}

export default Editor