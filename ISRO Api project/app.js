const stateName = document.querySelector("#stateName");
const isroCenterSearchBtn = document.querySelector("#isroCenterSearchBtn");
const isroCenterResult = document.querySelector("#isroCenterResult");

const countryName = document.getElementById("customerSatellites");
const customerSatellitesDetailBtn = document.getElementById(
  "customerSatellitesDetailBtn"
);
const customerSatellitesResult = document.getElementById(
  "customerSatellitesResult"
);


const spacecraftList = document.getElementById("spacecraftList");

// ---------------getting data of ISRO Centres from API-----------------
const getData = async (event) => {
  event.preventDefault();
  if (!stateName.value) {
    alert("Enter a state name : ");
    return;
  }

  const name = stateName.value.toLowerCase().trim();
  console.log(name);

  const fetchData = await fetch(`https://isro.vercel.app/api/centres`);

  let data = await fetchData.json();
  console.log(data);

  let centre = data.centres?.filter((ele) => {
    if (ele.State.toLowerCase() === name) {
      return ele.State;
    }
  });

  console.log(centre);

  const centreName = document.createElement("p");
  const centerPlace = document.createElement("p");
  const centerState = document.createElement("p");

  const div = document.createElement("div");

  if (centre.length > 1) {
    centre.map((ele) => {
      centreName.innerText = `Name : ${ele.name}`;
      centerPlace.innerText = `Place : ${ele.Place}`;
      centerState.innerText = `State : ${ele.State}`;

      div
        .appendChild(centreName)
        .appendChild(centerState)
        .appendChild(centerPlace);

      div.classList.add("isroCenterResult");
      isroCenterResult.appendChild(div);
    });
    // isroCenterResult.appendChild(div);
  } else {
    centreName.innerText = `Name : ${centre.name}`;
    centerPlace.innerText = `Place : ${centre.Place}`;
    centerState.innerText = `State : ${centre.State}`;

    div
      .appendChild(centreName)
      .appendChild(centerState)
      .appendChild(centerPlace);
    div.classList.add("isroCenterResult");
    isroCenterResult.append(div);
    console.log(`run eles case`);
  }
};

isroCenterSearchBtn.addEventListener("click", getData);


//-------------geting  data of customer satellites from API-----------------
const getSatelliteData = async (event) => {
  event.preventDefault();
  if (!countryName.value) {
    alert("Enter a state name : ");
    return;
  }

  const name = countryName.value.toLowerCase().trim();
  // console.log(name);

  const fetchSatData = await fetch(
    `https://isro.vercel.app/api/customer_satellites`
  );

  const data = await fetchSatData.json();
  console.log(data);

  let satellite = data.customer_satellites?.filter(
    (ele) => ele.country.toLowerCase() === name
  );

  console.log(satellite);

  const satCountryName = document.createElement("p");
  const launchDate = document.createElement("p");
  const mass = document.createElement("p");
  const launcher = document.createElement("p");

  const div = document.createElement("p");

  if (satellite.length > 1) {
    satellite.map((ele) => {
      satCountryName.innerText = `Country Name : ${ele.country}`;
      launchDate.innerText = `Launch Data : ${ele.launch_date}`;
      mass.innerText = `Mass : ${ele.mass}`;
      launcher.innerText = `Launcher : ${ele.launcher}`;

      div
        .appendChild(satCountryName)
        .appendChild(launchDate)
        .appendChild(mass)
        .appendChild(launcher);
      div.classList.add("isroCenterResult");
      customerSatellitesResult.appendChild(div);
    });
  } else {
    satCountryName.innerText = `Country Name : ${satellite.country}`;
    launchDate.innerText = `Launch Data : ${satellite.launch_date}`;
    mass.innerText = `Mass : ${satellite.mass}`;
    launcher.innerText = `Launcher : ${satellite.launcher}`;

    div
      .appendChild(satCountryName)
      .appendChild(launchDate)
      .appendChild(mass)
      .appendChild(launcher);
    div.classList.add("isroCenterResult");
    customerSatellitesResult.appendChild(div);

    console.log(`run eles case`);
  }
};

customerSatellitesDetailBtn.addEventListener("click", getSatelliteData);

//-----------------getting data of ISRO Spacecrafts from Api----------------
const getDataOfSpaceCraft = async () => {
  const fetchData = await fetch(`https://isro.vercel.app/api/spacecrafts`);
  const data = await fetchData.json();

  // console.log(data);

  data.spacecrafts?.map((craft) => {
    const li = document.createElement("option");

    li.innerText = craft.name;
    spacecraftList.appendChild(li);
  });
};
getDataOfSpaceCraft();


//----------------getting data of Rockets from api----------------------
const rocketList = document.getElementById("rocketList");


const getDataOfRockets = async () => {
  const fetchData = await fetch(`https://isro.vercel.app/api/launchers`);
  const data = await fetchData.json();
  console.log(data);

  data.launchers?.map((launch)=>{
    const option = document.createElement('option');
    option.innerText = launch.id;

    rocketList.appendChild(option);
  })
   

};

getDataOfRockets();