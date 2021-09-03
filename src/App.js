import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { BsPlusSquare } from "react-icons/bs";
import { RiDeviceRecoverLine, RiSurgicalMaskLine } from "react-icons/ri";
import { GiDeathSkull } from "react-icons/gi";
function App() {
	// Using Axios to pull the JSON data
	const axios = require("axios").default;
	// Aisa
	const [asiaTotalCases, setAsiaTotalCases] = useState(0);
	const [asiaDeathCases, setAsiaDeathCases] = useState(0);
	const [asiaRecoverCases, setAsiaRecoverCases] = useState(0);
	// North America
	const [northAmericaTotalCases, setNorthAmericaTotalCases] = useState(0);
	const [northAmericaDeathCases, setNorthAmericaTotalDeathCases] = useState(0);
	const [northAmericaRecoverCases, setNorthAmericaRecoverCases] = useState(0);
	// South America
	const [southAmericaTotalCases, setSouthAmericaTotalCases] = useState(0);
	const [southAmericaDeathCases, setSouthAmericaDeath] = useState(0);
	const [southAmericaRecoverCases, setSouthAmericaRecoverCases] = useState(0);
	// Europe
	const [europTotalCases, setEuropeTotalCases] = useState(0);
	const [europeDeathCases, setEuropeDeathCases] = useState(0);
	const [europeRecoverCases, setEuropeRecoverCases] = useState(0);
	// Africa
	const [africaTotalCases, setAfricaTotalCases] = useState(0);
	const [africaDeathCases, setAfricaDeathCases] = useState(0);
	const [africaRecoverCases, setAfricaRecoverCases] = useState(0);
	// Australia-Oceania
	const [aoTotalCases, setAototalCases] = useState(0);
	const [aoTotalDeathCases, setAototalDeathCases] = useState(0);
	const [aoRecoverCases, setAototalRecoverCases] = useState(0);
	axios
		.get("https://corona.lmao.ninja/v2/continents?yesterday=true&sort")
		.then(function (response) {
			// Asia
			setAsiaTotalCases(response.data[0].todayCases);
			setAsiaDeathCases(response.data[0].todayDeaths);
			setAsiaRecoverCases(response.data[0].todayRecovered);
			// North America
			setNorthAmericaTotalCases(response.data[1].todayCases);
			setNorthAmericaTotalDeathCases(response.data[1].todayDeaths);
			setNorthAmericaRecoverCases(response.data[1].todayRecovered);
			// South America
			setSouthAmericaTotalCases(response.data[2].todayCases);
			setSouthAmericaDeath(response.data[2].todayDeaths);
			setSouthAmericaRecoverCases(response.data[2].todayRecovered);
			// Europe
			setEuropeTotalCases(response.data[3].todayCases);
			setEuropeDeathCases(response.data[3].todayDeaths);
			setEuropeRecoverCases(response.data[3].todayRecovered);
			// Africa
			setAfricaTotalCases(response.data[4].todayCases);
			setAfricaDeathCases(response.data[4].todayDeaths);
			setAfricaRecoverCases(response.data[4].todayRecovered);
			// Australia-Oceania
			setAototalCases(response.data[5].todayCases);
			setAototalDeathCases(response.data[5].todayDeaths);
			setAototalRecoverCases(response.data[5].todayRecovered);
		});
	return (
		<div className="bg-gray-700 h-full">
			<p className="text-2xl pt-10 text-center text-gray-100 font-extrabold">
				COVID-19 CASES TRACKER
			</p>
			<p className="text-center flex items-center justify-center text-gray-100 opacity-75 gap-2 text-lg">
				Please take your vaccine and keep your <RiSurgicalMaskLine />
				on
			</p>
			<div>
				<div className="p-10 grid grid-rows-3 p-5 gap-2">
					{/* Asia Display */}
					<div className="p-10 bg-gray-800 w-full rounded flex flex-col justify-center items-center ml-auto mr-auto gap-2">
						<p className="text-lg font-bold text-gray-300">
							Asia COVID-19 Status
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Today's Total Cases:
							<NumberFormat
								value={asiaTotalCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Deaths:
							<NumberFormat
								value={asiaDeathCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Recovered:
							<NumberFormat
								value={asiaRecoverCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
					</div>
					{/* North America */}
					<div className="p-10 bg-gray-800 w-full rounded flex flex-col justify-center items-center ml-auto mr-auto gap-2">
						<p className="text-lg font-bold text-gray-300">
							North America COVID-19 Status
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Today's Total Cases:
							<NumberFormat
								value={northAmericaTotalCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Deaths:
							<NumberFormat
								value={northAmericaDeathCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Recovered:
							<NumberFormat
								value={northAmericaRecoverCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
					</div>
					{/* South America */}
					<div className="p-10 bg-gray-800 w-full rounded flex flex-col justify-center items-center ml-auto mr-auto gap-2">
						<p className="text-lg font-bold text-gray-300">
							South America COVID-19 Status
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Today's Total Cases:
							<NumberFormat
								value={southAmericaTotalCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Deaths:
							<NumberFormat
								value={southAmericaDeathCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Recovered:
							<NumberFormat
								value={southAmericaRecoverCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
					</div>
					{/* Europe */}
					<div className="p-10 bg-gray-800 w-full rounded flex flex-col justify-center items-center ml-auto mr-auto gap-2">
						<p className="text-lg font-bold text-gray-300">
							Europe COVID-19 Status
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Today's Total Cases:
							<NumberFormat
								value={europTotalCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Deaths:
							<NumberFormat
								value={europeDeathCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Recovered:
							<NumberFormat
								value={europeRecoverCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
					</div>
					{/* Africa */}
					<div className="p-10 bg-gray-800 w-full rounded flex flex-col justify-center items-center ml-auto mr-auto gap-2">
						<p className="text-lg font-bold text-gray-300">
							Africa COVID-19 Status
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Today's Total Cases:
							<NumberFormat
								value={africaTotalCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Deaths:
							<NumberFormat
								value={africaDeathCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Recovered:
							<NumberFormat
								value={africaRecoverCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
					</div>
					{/* Australia and Oceania */}
					<div className="p-10 bg-gray-800 w-full rounded flex flex-col justify-center items-center ml-auto mr-auto gap-2">
						<p className="text-lg font-bold text-gray-300">
							Australia and COVID-19 Status
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Today's Total Cases:
							<NumberFormat
								value={aoTotalCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Deaths:
							<NumberFormat
								value={aoTotalDeathCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
						<p className="flex items-center gap-2 text-lg text-gray-300">
							Recovered:
							<NumberFormat
								value={aoRecoverCases}
								displayType={"text"}
								thousandSeparator={true}
							/>
						</p>
					</div>
				</div>
				<p className="flex items-center justify-center text-gray-400 gap-2 pb-10">
					Coded by{" "}
					<a className="text-blue-400 opacity-75" href="">
						Mohamad Badawa
					</a>
				</p>
			</div>
		</div>
	);
}

export default App;
