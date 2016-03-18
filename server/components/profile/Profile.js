import mongoose from 'mongoose';

const Profile = mongoose. Schema({
	name: {type: String, required: true },
	age: { type: Number, required: true },
	profileImage: { type: String, default: `http://i.imgur.com/mO6d21x.jpg`},
	skills: { type: [String], required: true},
	lovesJavascript: { type: Boolean, default: true}

});

export default mongoose. model('Profile', Profile)