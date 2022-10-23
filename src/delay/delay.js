const delay = (callBack, ms) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(callBack());
		}, ms);
	});
};

// delay(() => 5 + 5, 2000).then((res) => console.log(res));

module.exports = delay;
