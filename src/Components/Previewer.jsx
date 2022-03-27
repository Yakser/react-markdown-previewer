import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

const Preview = ({ value }) => {
    return (
        <div className='block'>
            <h4 className='block__header'>Preview</h4>
            <div className='line' />
            <div id='preview'>
                <ReactMarkdown children={value} remarkPlugins={[remarkGfm, remarkBreaks]} />
            </div>
        </div>
    )
}

export default Preview