import React, { Component } from 'react'
import styled from 'styled-components'
import { PillButton, CardButton } from '../Button'

class ConfirmBox extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="ctn">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <PillButton onClick={this.props.onOk}>OK</PillButton>
                        </span>
                    </div>
                    <CardButton className="btn btn-secondary btn-close" onClick={this.props.onClose}>
                        <i className="fa fa-times"></i>
                    </CardButton>
                </div>
            </div>
        )
    }
}

const DefaultConfirmBox = styled(ConfirmBox)`
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

export default DefaultConfirmBox
