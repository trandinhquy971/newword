import React, { Component } from 'react'
import styled from 'styled-components'
import { PillButton, CardButton } from '../Button'

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            word: "",
            pronunciation: "",
            meaning: []
        }
    }

    componentWillReceiveProps(nextProps) {
        var { word } = nextProps

        if(word){
            let stringMeaning = ""
            word.meaning.forEach((item, index) => {
                stringMeaning += index !== 0?"\n" + item:item
            })

            this.setState({
                word: word.word,
                pronunciation: word.pronunciation,
                meaning: stringMeaning
            })
        }
    }

    onChangeValue = (event) => {
        var { target } = event
        var name = target.name
        var value = target.value

        this.setState({
            [name]: value
        })
    }

    onGetMeaningAutomatically = (event) => {
        event.preventDefault()
        
        let { word } = this.state
        this.props.onGetMeaningAutomatically(word)
    }

    onSubmit = (event) => {
        event.preventDefault()
        let {id, word, pronunciation, meaning} = this.state        

        this.props.onSubmit({
            id,
            word,
            pronunciation,
            meaning
        })
        
        this.props.onCloseForm()
    }
    
    
    render() {
        return (
            <div className={this.props.className}>
                <div className="ctn">
                    <form className="add-form">
                        <div className="form-group">
                        <label>Từ mới</label>
                        <input type="text"
                            className="form-control" name="word" value={this.state.word} onChange={this.onChangeValue}/>
                        </div>
                        <div className="form-group">
                        <label>Phiên âm</label>
                        <input type="text"
                            className="form-control" name="pronunciation" id="" aria-describedby="helpId" placeholder="" value={this.state.pronunciation} onChange={this.onChangeValue}/>
                        </div>
                        <div className="form-group">
                            <div className="form-group">
                            <label>Nghĩa</label>
                            <textarea className="form-control" name="meaning" id="" rows="3" value={this.state.meaning} onChange={this.onChangeValue}></textarea>
                            </div>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                <PillButton onClick={this.onGetMeaningAutomatically}>Lấy tự động</PillButton>
                            </span>
                            <span className="input-group-btn">
                                <PillButton onClick={this.onSubmit}>OK</PillButton>
                            </span>
                        </div>
                    </form>
                    <CardButton className="btn btn-secondary btn-close" onClick={this.props.onCloseForm}>
                        <i className="fa fa-times"></i>
                    </CardButton>
                </div>
            </div>
        )
    }
}

const DefaultAddForm = styled(AddForm)`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #80808080;
    z-index: 1000;
    top: 0px;
    left: 0px;

    .ctn {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        height: auto;
        background-color: white;
        border-radius: 10px;
        padding: 15px;
    }
    
    .ctn label {
        font-weight: bold;
    }
    
    .ctn {
        position: relative;
    }
    
    .btn-close {
        position: absolute;
        top: -20px;
        right: -20px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default DefaultAddForm
