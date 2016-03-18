import Profile from './Profile';

//will export individual functions to handle basic CRUD requests.
export function getProfiles( req, res) {
	Profile.find({}, (err, profiles) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.send(profiles);
	});
}

export function postProfile( req, res ) {
	new Profile.save(req.body, ( err, user ) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.send(profile);
	});
}

export function getProfile( req, res ) {
	Profile.findById( req.params.profileId, ( err, profile ) => {
		if ( err ) {
			return res.status(500).send( err );
		}

		return res.status(200).send( profile );
	});
}

export function updateProfile( req, res ) {
	Profile.findByIdAndUpdate( req.params.profileId, req.body, ( err, updatedProfile ) => {
		if ( err ) {
			return res.status(500).send( err );
		}

		return res.status(200).send( updatedProfile );
	});
}

export function deleteProfile( req, res ) {
	Profile.findByIdAndRemove( req.params.profileId, ( err, deletedProfile ) => {
		if (err) {
			return res.status(500).send(err);
		}
		
		return res.status(200).send( deletedProfile );
	});
}