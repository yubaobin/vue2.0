const getToDay = num => {
	let n = "";
	console.log(num)
	switch (num) {
		case 1:
			n = "Monday"
			break;
		case 2:
			n = "Tuesday"
			break;
		case 3:
			n = "Wednesday"
			break;
		case 4:
			n = "Thursday"
			break;
		case 5:
			n = "Friday"
			break;
		case 6:
			n = "Saturday"
			break;
		case 0:
			n = "Sunday"
			break;
		default:
			n = 'pull worry num!!'
			break;
	}
	return n;
}

export default getToDay;