import React from 'react';
import PropTypes from 'prop-types';


const App = () => {
	const profiles = [
		{name:"Taro",age:10},
		{name:"Hanako",age:5},
		{name:8} //警告が出る
	]
	return (
			<div>
			{
				profiles.map((profile,index) => {
					return <User name={profile.name} age={profile.age} key={index}/>
				})
			}
			</div>
		)
}
const User = (props)=>{
	return <div>Hi ,I am {props.name},and {props.age}years old! </div>
}
User.PropTypes = {
	name: PropTypes.string,
	age: PropTypes.number.isRequired
}

export default App;
