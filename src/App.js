import React, { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { RiDeviceRecoverLine } from "react-icons/ri";
import { GiDeathSkull } from "react-icons/gi";
function App() {
	const axios = require("axios").default;
	const [confirmedCases, setConfirmedCases] = useState(0);
	const [recoveredCases, setRecoveredCases] = useState(0);
	const [deaths, setDeaths] = useState(0);
	const [lastUpdate, setLastUpdate] = useState(0);
	axios.get("https://covid19.mathdro.id/api").then(function (response) {
		// Confiremd Cases
		setConfirmedCases(response.data.confirmed.value);
		// Recovered Cases
		setRecoveredCases(response.data.recovered.value);
		// Deaths
		setDeaths(response.data.deaths.value);
		// Last Updated
		setLastUpdate(response.data.lastUpdate);
	});
	return (
		<div className="bg-gray-700 h-screen grid grid-rows-4 p-5 gap-2">
			<div className="bg-gray-600 w-1/2 shadow-inner rounded-lg flex flex-col justify-center items-center ml-auto mr-auto gap-2">
				<p className="text-lg font-bold text-gray-300">Confirmed Cases</p>
				<p className="flex items-center gap-2 text-lg text-gray-300">
					<BsPlusSquare />
					{confirmedCases}
				</p>
			</div>
			<div className="bg-gray-600 w-1/2 shadow-inner rounded-lg flex flex-col justify-center items-center ml-auto mr-auto gap-2">
				<p className="text-lg font-bold text-gray-300">Recovered</p>
				<p className="flex items-center gap-2 text-lg text-gray-400">
					<RiDeviceRecoverLine />
					{recoveredCases}
				</p>
			</div>
			<div className="bg-gray-600 w-1/2 shadow-inner rounded-lg flex flex-col justify-center items-center ml-auto mr-auto gap-2">
				<p className="text-lg font-bold text-gray-300">Deaths</p>
				<p className="flex items-center gap-2 text-lg text-gray-400">
					<GiDeathSkull />
					{deaths}
				</p>
			</div>
			<p className="flex items-center justify-center text-gray-400">
				Last Updated : {lastUpdate}
			</p>
		</div>
	);
}

export default App;
