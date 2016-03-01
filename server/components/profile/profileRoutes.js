import { getProfiles, postProfile, getProfile, updateProfile, deleteProfile } from './profileCtrl';

export default app => {
	app.route(`/api/profile`)
		.get( getProfiles )
		.post( postProfile );

	app.route(`/api/profile/:profileId`)
		.get( getProfile )
		.put( updateProfile )
		.delete( deleteProfile );
}