/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import Home from "../pages/Home";

const routes = [{
	path: "/",
	exact: true,
	component: ({match}) => <Home match={match}/>
},{
	path: "/link",
	exact: false,
	component: () => null
}]

export default routes