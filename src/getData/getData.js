const axios = require("axios");
const mapArrToStrings = require("../mapArrToStrings/mapArrToStrings");

const getData = async () => {
	try {
		const res = await axios.get("https://jsonplaceholder.typicode.com/users");
		const userIds = res?.data?.map((user) => user?.id);
		console.log("mapArrToStrings(userIds)", mapArrToStrings(userIds));
		return mapArrToStrings(userIds);
	} catch (error) {
		console.log("error", error);
	}
};

module.exports = getData;
