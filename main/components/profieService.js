export default function profileService( $http ) {
	return {

		getProfiles() {
			return $http.get(`/api/profile`)
				.then( profiles => profiles.data );
		}

		, postProfile( name, age, url, skills ) {
			console.log('posting from service...');
			return $http.post(`/api/profile`, {
				name
				, age
				, url
				, skills
			});
		}

	}
}

profileService.$inject = [`$http`];