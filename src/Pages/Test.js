import React, { PureComponent } from 'react'

class Test extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name:"",
            text:"",
            secand:"",
            thired:""
        }
    }

    input1=React.createRef()
    input2=React.createRef()
    input3=React.createRef()
    input4=React.createRef()

Clicks=()=>{
    this.divfRef.current.focus()
}
handleInputChange = (id) => {
    // const target = e.target;
    // const value = target.value;
    // const name = target.name;
    // this.setState({
    //     [name]: value
    // });

    this["input" +id].current.focus()
    // if(this.divfRef1.current.value!==""){
    //     this.divfRef2.current.focus()
    // }
    // else if(this.divfRef2.current.value!=="" || this.divfRef1.current.value!==""){
    //     this.divfRef3.current.focus()

    // }
    // else if(this.divfRef3.current.value!==""){
    //     this.divfRef4.current.focus()

    // }
    // else{
    //     this.divfRef4.current.focus()

    // }


};

    render() {
        return (
            <>
            <input onChange={()=>this.handleInputChange(2)}  ref={this.input1}/>
            <br></br>
            <input onChange={()=>this.handleInputChange(3)} ref={this.input2}/>
            <br></br>

            <input onChange={()=>this.handleInputChange(4)}  ref={this.input3}/>
            <br></br>
            <input onChange={()=>this.handleInputChange(1)}  ref={this.input4}/>
<button onClick={this.Clicks}>Click</button>
            </>
        )
    }
}

export default Test