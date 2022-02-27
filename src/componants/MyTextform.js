import React, {useState} from 'react';
import '../styles/MyTextForm.css';

export default function MyTextForm(props) {

    const hanldeOnClear = ()=>{
        let newText = '';
        setText(newText)
    }
    const hanldeOnUpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const hanldeOnLowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const hanldeOnRepeat = ()=>{
        let newText = text.repeat(5);
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState(''); 
    return (
        <div className='MyTextForm'>
            <div className="container my-5">
                <h2>{props.myTitle}</h2>
                <div className="row">
                    <div className="col-12">
                        <textarea value={text} onChange={handleOnChange} className="form-control form-control-lg" rows="8" placeholder="Large textarea"></textarea>
                    </div>
                    <div className="col-12 mb-3">
                        {text.split(' ').length} Words And {text.length} Chatacters
                    </div>
                    <div className="col-12 mb-5">
                        <button onClick={hanldeOnClear} className='btn btn-secondary mx-2'>Clear Text</button>
                        <button onClick={hanldeOnUpperCase} className='btn btn-secondary mx-2'>Uppercase Text</button>
                        <button onClick={hanldeOnLowerCase} className='btn btn-secondary mx-2'>Lowercase Text</button>
                        <button onClick={hanldeOnRepeat} className='btn btn-secondary mx-2'>Repeat Text</button>
                    </div>
                </div>
                <div className="row border border-warning p-2">
                    <h2>{props.myTitlePreview}</h2>
                    <small className='text-success'>
                        {text}
                    </small>
                </div>
                
            </div>
        </div>
    );
}
MyTextForm.defaultProps = {
    myTitle : 'My Form Title',
    myTitlePreview : 'Preview'
}
