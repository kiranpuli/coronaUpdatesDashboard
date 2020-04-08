import React from "react";
export default function Foot() {
  return(
    <footer className="mt-5 text-light text-center btn-block">
      <div className="bg-dark text-light text-left">
      <h5><u>About this data</u></h5>
      <p>
        <strong>It changes rapidly</strong>
        <br/>
        This data changes rapidly and might not reflect some cases still being reported.
      </p>
      <p>
        <strong>It only includes people tested</strong>
        <br/>
        Cases only include people who were tested and confirmed positive. Testing rules and availability vary by country. Some areas may not have data because they haven’t published their data or haven’t done so recently.
      </p>
      <p>
        <strong>It comes from CSSE</strong>
        <br/>
        Data comes from Coronavirus COVID-19 Global Cases by the Center for Systems Science and Engineering <a href="https://coronavirus.jhu.edu/map.html">(CSSE)</a> at Johns Hopkins University (JHU), and cases are constantly updated from resources around the world. Daily situation reports are also available on the <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports">World Health Organization site.</a>
      </p>
      </div>
      <h6>Made by Kiran Puli  </h6>
          <a href="https://www.linkedin.com/in/kiran-p-40260b15b/">
            <i class="fab fa-linkedin-in  btn btn-outline-info"></i>
          </a>
          <a href="https://github.com/kiranpuli">
            <i class="fab fa-github  btn btn-outline-info"></i>
          </a><br/>
      <p><a href="https://github.com/kiranpuli/coronaUpdatesDashboard" className="text-info"><u>Code</u></a>available on Github</p>
    </footer>
  );
}
