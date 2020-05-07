import React, { Component } from 'react'
import styled from 'styled-components'
import {StyledButton} from '../Button'
import {NavLink, Route} from 'react-router-dom'
import menus from '../../menus'

const MenuLink = ({name, to, exact}) => {
	return (
		<Route path={to} exact={exact} children={({match}) => {
			var active = match?"active":""
			return (<li className={`nav-item ${active}`}>
				<NavLink to={to} className="nav-link" exact={exact}>{name}</NavLink>
				<div className="indicator"></div>
			</li>)
		}}>
		</Route>
	)
}

class NavBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			filter: ""
		}	
	}

	onChange = (event) => {
		event.preventDefault()
		var { target } = event
		this.setState({
			filter: target.value
		})
	}

	onChangeFilter = (event) => {
		event.preventDefault()
		this.props.onChangeFilter(this.state.filter)
	}

	renderMenu = () => {
		return menus.map((item, index) => {
			return <MenuLink key={index} name={item.name} to={item.to} exact={item.exact}></MenuLink>
		})
	}
	render() {
		return (
			<nav className={`navbar navbar-expand-sm navbar-light ${this.props.className}`}>
				<button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
						aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="collapsibleNavId">
					<form className="form-inline my-2 my-lg-0" onSubmit={this.onChangeFilter}>
						<div className="input-group">
							<input className="form-control" type="text" placeholder="Tìm kiếm" onChange={this.onChange}></input>
							<div className="input-group-append">
								<StyledButton className="btn btn-outline-success my-sm-0" type="submit">
									<i className="fa fa-search"></i>
								</StyledButton>
							</div>
						</div>
					</form>
					<ul className="navbar-nav">
						{this.renderMenu()}
					</ul>
				</div>
			</nav>
		)
	}
}

const DefaultNavBar = styled(NavBar)`
	background-color: #ffffff !important;
	box-shadow: 0px -2px 5px grey;
	z-index: 1000;
	border-radius: 0px 0px 10px 10px;

	.nav-item {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		border-radius: 10px;
		margin: 0px 2px;
	}
	
	.nav-item:hover {
		background-color: #f0f0f0 !important;
	}
	
	.nav-link {
		color: black;
		font-weight: bold;
	}
	
	.active .nav-link {
		color: #c5299b !important;
	}

	.input-group input{
		background-color: #f0f0f0;
		border: 0px !important;
	}
	
	.input-group input:focus{
		box-shadow: 0 0 0 0 black;
		background-color: #f0f0f0;
		border: 0px !important
	}
	
	.input-group input:first-child {
		border-radius: 20px 0px 0px 20px;
	}
	
	.input-group button:last-child {
		border-radius: 0px 20px 20px 0px;
	}

	.form-control {
		width: 100px;
	}

	@media (min-width: 576px){
		.navbar-nav {
				position: absolute !important;
				left: 50%;
				transform: translate(-50%, 0);
		}
		.active .indicator {
			position: absolute;
			width: 40px;
			height: 4px;
			background-color: #c5299b;
			border-radius: 2px;
		}
		.nav-item {
			width: 80px;
		}
	}

	@media (min-width: 992px){
		.form-control {
			width: auto;
		}
	}
`

export default DefaultNavBar
