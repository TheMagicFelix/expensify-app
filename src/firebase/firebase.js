import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';

var firebaseConfig = {
	apiKey: 'AIzaSyBfmyaK5E7gKmmP58se5fd2uodo-_h4nA0',
	authDomain: 'expensify-dcb57.firebaseapp.com',
	databaseURL: 'https://expensify-dcb57.firebaseio.com',
	projectId: 'expensify-dcb57',
	storageBucket: 'expensify-dcb57.appspot.com',
	messagingSenderId: '600285490611',
	appId: '1:600285490611:web:55f44796e60cfae8786fc6',
	measurementId: 'G-ZSML5G1DJM',
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // database
// // 	.ref('expenses')
// // 	.once('value')
// // 	.then((snapshot) => {
// // 		const expenses = [];
// // 		snapshot.forEach((childSnapshot) => {
// // 			expenses.push({
// // 				id: childSnapshot.key,
// // 				...childSnapshot.val(),
// // 			});
// // 		});
// // 		console.log(expenses);
// // 	});

// // database.ref('expenses').on('value', (snapshot) => {
// // 	const expenses = [];

// // 	snapshot.forEach((childSnapshot) => {
// // 		expenses.push({
// // 			id: childSnapshot.key,
// // 			...childSnapshot.val(),
// // 		});
// // 	});
// // 	console.log(expenses);
// // });

// database.ref('expenses').push({
// 	description: 'Rent',
// 	notes: '',
// 	amount: 109500,
// 	createdAt: 94584574586,
// });

// // database.ref('notes/-MIKJ_ufoTiS84_rXd7q').remove();

// // database.ref('notes').push({
// // 	title: 'Course Topics',
// // 	body: 'React Native, Angular, Pyhton',
// // });

// // const firebaseNotes = {
// // 	notes: {
// // 		sxedrcftvgybh: {
// // 			title: 'First note',
// // 			body: 'This is my note',
// // 		},
// // 		zexdrcftvgybh: {
// // 			title: 'Another note',
// // 			body: 'This is my another note',
// // 		},
// // 	},
// // };

// // const notes = [
// // 	{
// // 		id: '12',
// // 		title: 'First note',
// // 		body: 'This is my note',
// // 	},
// // 	{
// // 		id: '76ase',
// // 		title: 'Another note',
// // 		body: 'This is my another note',
// // 	},
// // ];

// // database.ref('notes').set(notes);

// // database.ref().on('value', (snapshot) => {
// // 	const val = snapshot.val();
// // 	console.log(`${val.name} è un ${val.job.title} da ${val.job.company}.`);
// // });

// // database
// // 	.ref('location/city')
// // 	.once('value')
// // 	.then((snapshot) => {
// // 		const val = snapshot.val();
// // 		console.log(val);
// // 	})
// // 	.catch((e) => {
// // 		console.log('Error fetching data.', e);
// //  });

// // database
// // 	.ref()
// // 	.set({
// // 		name: 'Riccardo Felisi',
// // 		age: 19,
// // 		stressLevel: 6,
// // 		job: {
// // 			title: 'Junior Full Stack Developer',
// // 			company: 'Data Synapsi',
// // 		},
// // 		location: {
// // 			city: 'Boston',
// // 			country: 'United States',
// // 		},
// // 	})
// // 	.then(() => {
// // 		console.log('Data is saved.');
// // 	})
// // 	.catch((e) => {
// // 		console.log('This failed.', e);
// // 	});

// // database.ref().update({
// // 	stressLevel: 9,
// // 	'job/company': 'Amazon',
// // 	'location/city': 'Seattle',
// // });

// // database
// // 	.ref()
// // 	.remove()
// // 	.then(() => {
// // 		console.log('Data was removed succesfully.');
// // 	})
// // 	.catch((e) => {
// // 		console.log(`Data wasn't removed due to an issue.`, e);
// // 	});
