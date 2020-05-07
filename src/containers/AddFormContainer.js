import React, { Component } from 'react'
import * as actions from "../actions"
import { connect } from 'react-redux';
import DefaultAddForm from './../components/AddForm';

class AddFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: {}
        }
    }
    
    componentWillUpdate(nextProps, nextState) {
        if(nextProps.currentWord !== this.state.word ||
            nextProps.isOpenAddForm !== this.state.isOpenAddForm){               
            this.setState({
                word: nextProps.currentWord,
                isOpenAddForm: nextProps.isOpenAddForm
            }) 
            return true
        }
        return false
    }

    onGetMeaningAutomatically = (word) => {
        this.props.onGetMeaningAutomatically(word)
    }

    onSubmit = (wordInfo) => {      
        if(this.state.word.id) {
            wordInfo.id = this.state.word.id
            this.props.onUpdateWord(wordInfo)
        }
        else
            this.props.onAddWord(wordInfo)
    }

    onSearchWord = (word) => {
        this.props.onSearchWord(word)
    }
    
    render() {
        var {isOpenAddForm} = this.state    
        return (
            isOpenAddForm?
            (<DefaultAddForm 
                word={this.props.currentWord}
                onCloseForm={this.props.onCloseAddForm}
                onGetMeaningAutomatically={this.onGetMeaningAutomatically}
                onSubmit={this.onSubmit}>
            </DefaultAddForm>):null
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentWord: state.currentWord,
        isOpenAddForm: state.isOpenAddForm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {  
    return {
        onCloseAddForm: () => dispatch(actions.handleWhenClosingAddForm()),
        onAddWord: (wordInfo) => dispatch(actions.addWordRequest(wordInfo)),
        onUpdateWord: (wordInfo) => dispatch(actions.updateWordRequest(wordInfo)),
		onGetMeaningAutomatically: (word) => dispatch(actions.onGetMeaningRequest(word))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddFormContainer)
