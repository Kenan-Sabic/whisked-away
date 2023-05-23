import React from 'react';
import FollowerBox from './FollowerBox';
import LoadMoreButton from './LoadMoreButton';
import { useEffect, useState } from 'react';
import axios from 'axios';
const UserPageFollowersTab = () => {
	const [followers, setFollowers] = useState([]);
	const user = JSON.parse(sessionStorage.getItem('user'));
	const userId = user.id;
	useEffect(() => {
		axios.get(`http://localhost:4000/api/user/${userId}/following`).then(res => {
			setFollowers(res.data);
			console.log(res.data);
		});
	}, []);

	return (
		<div>
			<div className='ml-4 mr-4 grid w-auto grid-cols-1 rounded-md md:grid-cols-2 md:gap-x-4'>
				{followers.map(follower => (
					<FollowerBox user={follower} />
				))}
			</div>
			<LoadMoreButton />
		</div>
	);
};

export default UserPageFollowersTab;
