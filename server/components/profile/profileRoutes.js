import { getProfiles, postProfile } from './profileCtrl';

//export a set of routes, linked to each function in our profileCtrl, by default.
export default app => {  	//function
	app.route(`/api/profile`)
		.get(getProfiles)
		.post(postProfile);

	app.route(`/api/profile/:profileId`)
		.get( getProfile )
		.put( updateProfile )
		.delete( deleteProfile );	
}


