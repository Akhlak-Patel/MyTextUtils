// import React,{useState} from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 76 104)':'white',
        // border:'2px solid'
    }
    
     
    return (
        <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h2 >About us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or many more
                        </div>
                    </div>
                </div>
                <div className="accordion-item " style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong> Free to use </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that instatnt character count and word count statics for a given text.Textutls reports the number of world and character. Thus is is suitable for wrinting text with word / character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong> Browser Compatible </strong>                       </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This world counter software works in any web browser such as a Chrome, Firebox, Interner Explorer, Safari, Opera. It suits to count character in facebook, blog, books,excel document,pdf document, essays, etc.</strong>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button onClick={toggleStyle}  type="button" className="btn btn-primary">{btntext}</button>
            </div> */}
        </div>
    
    )
}
