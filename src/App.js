import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes'
import NavBarContainer from './containers/NavBarContainer'

class App extends Component {
	renderRoute = () => {
		return routes.map((item, index) => {
			return <Route key={index} exact={item.exact} path={item.path} component={item.component} />
		})
	}
	render() {
		return (
			<Router>
				<div className={this.props.className} style={{
					background:  `url(${"https://thietbiketnoi.com/wp-content/uploads/2020/01/tong-hop-hinh-nen-background-vector-designer-dep-do-phan-giai-fhd-2k-4k-moi-nhat-16.jpg"})`,
					backgroundSize: "cover",
				}}>
					<NavBarContainer></NavBarContainer>
					<Switch>
						{this.renderRoute()}
					</Switch>
				</div>
			</Router>
		)
	}
}

export default styled(App)`
	background-color: #F0F2F5;
	min-height: 100vh;
	height: 100%;
`
