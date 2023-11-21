import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  function home(){
    var element = document.getElementById("home");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  function education(){
    var element = document.getElementById("education");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }
  function project(){
    var element = document.getElementById("education");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }
  
  function about(){
    var element = document.getElementById("about");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }  
  function contact(){
    var element = document.getElementById("about");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }  

  return (
    <div className="layout" style={{ background: '#C8C8C8', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
      <div className="menu-bar" style={{ alignSelf: 'stretch', background: 'white', flexDirection: 'column', justifyContent: 'space-between', display: 'flex' }}>
        <div id="home" className="menu-items">
          <button className="menu-items-0" style={{ width: 160, flexDirection: 'column' }} onClick={home}>
            <img className="Screenshot20231121At11161" style={{ width: 100, height: 38.87 }} src={require("./images/mainlogo.png")} />
          </button>
          <button className="menu-items-0" style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '200' }} onClick={home}>Home</button>
          <button className="menu-items-0" style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '200' }} onClick={education}>Education</button>
          <button className="menu-items-0" style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '200' }} onClick={project}>Project</button>
          <button className="menu-items-0" style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '200' }} onClick={about}>About</button>
          <div className="Fill" style={{ flex: '1 1 0', height: 75, padding: 10 }} />
          <button className="menu-items-0" style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '200' }} onClick={contact}>Contact</button>
        </div>
      </div>

      <div id="about" className="content-layout" style={{ alignSelf: 'stretch', height: 726, background: '#B8C0DB', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <div className="content-greet" style={{ width: 1000, height: 726, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
          <div className="greeting" style={{ width: 466, alignSelf: 'stretch', padding: 20, background: 'rgba(251.12, 167.43, 167.43, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 30, display: 'inline-flex' }}>
            <div className="content" style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '800', wordWrap: 'break-word' }}>👋 Hey there,It’s Duc Viet Nguyen<br /><br />I’m looking forward learning new things and hope to work with everyone for a better result.</div>
            <div className="contact-layout" style={{ background: 'rgba(104.57, 116.12, 176.73, 0)', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div className="contact-figure" style={{ textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Connect</div>
            </div>
            <div className="ButtonsItems" style={{ alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
              <a className="icon-button-0" href="https://github.com/deannguyen1910">
                <img style={{ width: 40, height: 40 }} src={require("./images/github.png")}></img>
              </a>
              <a className="icon-button-0" href="https://www.linkedin.com/in/viet-nguyen-2487a7237/">
                <img className="LinkedinButton1" style={{ width: 40, height: 40 }} src={require("./images/linkedin_button.png")} />
              </a>
              <a href="mailto: deannguyen1910@gmail.com">
                <img className="GoogleLogoIconPngTransparentBackgroundOsteopathy161" style={{ width: 40, height: 40 }} src={require("./images/google-logo-icon-png-transparent-background-osteopathy-16.png")} />
              </a>
              <a href="https://www.instagram.com/deanyyyy_/">
              <img className="InstagramLogo20221" style={{ width: 40, height: 40 }} src={require("./images/Instagram_logo_2022.svg.png")} />
              </a>

            </div>
          </div>
          <div className="bio-pic" style={{ flex: '1 1 0', alignSelf: 'stretch', background: 'rgba(251.12, 167.43, 167.43, 0)', borderRadius: 20, overflow: 'hidden', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
            <img className="mypic" style={{ height: 30, flex: '1 1 0', }} src={require("./images/my_pic.jpeg")} />
          </div>
        </div>
      </div>
      <div className="gap" style={{ position: 'relative' }} />


      <div className="Resume" style={{ padding: 40, background: 'white', borderRadius: 15, overflow: 'hidden', backdropFilter: 'blur(4px)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
        <div className="Header" style={{ alignSelf: 'stretch', height: 99, padding: 20, borderBottom: '1px rgba(0, 0, 0, 0.10) dotted', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
          <div className="Resume" style={{ textAlign: 'center', color: 'black', fontSize: 50, fontFamily: 'Maven Pro', fontWeight: '600', wordWrap: 'break-word' }}>Resume</div>
        </div>
        <div className="InfoDoubleColumn" style={{ width: 920, padding: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
          <div className="Experience" style={{ flex: '1 1 0', height: 115, paddingLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
            <div className="Header" style={{ width: 395, height: 39, position: 'relative', borderBottom: '1px rgba(0, 0, 0, 0.10) solid' }}>
              <div className="header-double-content" style={{ left: 16, top: 4, position: 'absolute', color: 'black', fontSize: 25, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Experience</div>
            </div>
            <div className="Frame3" style={{ alignSelf: 'stretch', height: 58, padding: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
              <div className="TakenBasicCoursesForOperatingSystemSoftwareDeveloper" style={{ alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Taken basic courses for operating system, Software developer. </div>
            </div>
          </div>
          <div id="education" className="Education" style={{ flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
            <div className="Header" style={{ width: 395, height: 40, position: 'relative', borderBottom: '1px rgba(0, 0, 0, 0.10) solid' }}>
              <div className="header-double-content" style={{ left: 20, top: 5, position: 'absolute', color: 'black', fontSize: 25, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Education</div>
            </div>
            <div className="ResumeItem0" style={{ alignSelf: 'stretch', padding: 10, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
              <img className="SimonFraserUniversityLogo1" style={{ width: 50, height: 50 }} src={require("./images/simon_fraser_university_logo.jpeg")} />
              <div className="SimonFraserUniversityBachelorOfAppliedScienceBascComputerScience2023Present" style={{ flex: '1 1 0', alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Simon Fraser University<br />Bachelor of Applied Science - BASc, Computer Science<br />2023 - present</div>
            </div>
            <div className="ResumeItem" style={{ alignSelf: 'stretch', padding: 10, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
              <img className="1" style={{ width: 50, height: 50 }} src={require("./images/fic.jpeg")} />
              <div className="FraserInternationalCollegeJan2022Dec2022" style={{ flex: '1 1 0', alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Fraser International College<br />Jan 2022 - Dec 2022</div>
            </div>
          </div>
        </div>
        <div className="InfoSingleColumn" style={{ width: 920, padding: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
          <div className="Experience" style={{ flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
            <div className="Header" style={{ width: 840, height: 39, position: 'relative', borderBottom: '1px rgba(0, 0, 0, 0.10) solid' }}>
              <div className="FreelanceClients" style={{ left: 16, top: 4, position: 'absolute', color: 'black', fontSize: 25, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Freelance Clients</div>
            </div>
            <div className="ResumeItem1" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 35, display: 'inline-flex' }}>
              <img className="SlackLogo1" style={{ width: 150, height: 84.50 }} src={require("./images/slack-logo.webp")} />
              <img className="DiscordLogo1" style={{ width: 150, height: 84.38 }} src={require("./images/Discord-logo.png")} />
              <img className="SitepointLogo1" style={{ width: 150, height: 150 }} src={require("./images/sitepoint-logo.png")} />
            </div>
          </div>
        </div>
        <div className="InfoDoubleColumn" style={{ width: 920, padding: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
          <div className="Experience" style={{ flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
            <div className="Header" style={{ width: 395, height: 39, position: 'relative', borderBottom: '1px rgba(0, 0, 0, 0.10) solid' }}>
              <div className="Skill" style={{ left: 16, top: 4, position: 'absolute', color: 'black', fontSize: 25, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Skills</div>
            </div>
            <div className="Frame3" style={{ alignSelf: 'stretch', height: 96, padding: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
              <div className="CCJavaPythonRJavascriptFrontendDevelopmentCiCdPipelineDevops" style={{ alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>💻 C | C++ | Java | Python | R | Javascript<br />Frontend-Development<br />CI/CD Pipeline<br />Devops </div>
            </div>
          </div>
          <div className="Education" style={{ flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
            <div className="Header" style={{ width: 395, height: 40, position: 'relative', borderBottom: '1px rgba(0, 0, 0, 0.10) solid' }}>
              <div className="Tools" style={{ left: 20, top: 5, position: 'absolute', color: 'black', fontSize: 25, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Tools</div>
            </div>
            <div className="Frame3" style={{ alignSelf: 'stretch', padding: 10, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
              <img className="VisualStudioCode135Icon1" style={{ width: 50, height: 50 }} src={require("./images/Visual_Studio_Code_1.35_icon.svg.png")} />
              <img className="IntellijIdeaIcon1" style={{ width: 50, height: 50 }} src={require("./images/IntelliJ_IDEA_Icon.svg.png")} />
              <img className="NotionAppLogo1" style={{ width: 50, height: 50 }} src={require("./images/Notion_app_logo.png")} />
              <img className="Github1" style={{ width: 50, height: 50 }} src={require("./images/github.png")} />
              <img className="AdobeAcrobatDcLogo20201" style={{ width: 50, height: 50 }} src={require("./images/Adobe_Acrobat_DC_logo_2020.svg.png")} />
            </div>
          </div>
        </div>
      </div>
      <div className="Gap" style={{ width: 1728, height: 30, position: 'relative' }} />
      <div className="EndingContent" style={{ width: 1000, height: 452, padding: 20, background: 'white', borderRadius: 15, overflow: 'hidden', backdropFilter: 'blur(4px)', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
        <div className="Greeting" style={{ flex: '1 1 0', alignSelf: 'stretch', padding: 20, background: 'white', backdropFilter: 'blur(4px)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'inline-flex' }}>
          <div className="HaveAProjectInMindLetSGetToWork" style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Have a project in mind?<br />Let’s get to work.👋📫</div>
          <div className="contact-item-0" style={{ width: 117, height: 33, background: 'black', borderRadius: 7, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
            <button className="contact-item-1" style={{ flex: '1 1 0', alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }} onClick={contact}>Contact</button>
          </div>
        </div>
      </div>
      <div className="Gap" style={{ width: 1728, height: 30, position: 'relative' }} />
      <div className="bottom-bar" style={{background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px rgba(0, 0, 0, 0.10) solid', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
        <div className="MenuItems" style={{ width: 1400, height: 107, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
          <div className="Logo" style={{ width: 136, alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
            <img className="Screenshot20231121At11161" style={{ width: 100, height: 38.87 }} src={require("./images/mainlogo.png")} />
          </div>
          <div className="GapFrame" style={{ width: 50, height: 107, position: 'relative' }} />
          <a href="https://github.com/deannguyen1910" style={{ padding: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                <img style={{ width: 40, height: 40 }} src={require("./images/github.png")}></img>
              </a>
              <a href="https://www.linkedin.com/in/viet-nguyen-2487a7237/"style={{ padding: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                <img className="LinkedinButton1" style={{ width: 40, height: 40 }} src={require("./images/linkedin_button.png")} />
              </a>
              <a href="mailto: deannguyen1910@gmail.com"style={{ padding: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                <img className="GoogleLogoIconPngTransparentBackgroundOsteopathy161" style={{ width: 40, height: 40 }} src={require("./images/google-logo-icon-png-transparent-background-osteopathy-16.png")} />
              </a>
              <a href="https://www.instagram.com/deanyyyy_/"style={{ padding: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
              <img className="InstagramLogo20221" style={{ width: 40, height: 40 }} src={require("./images/Instagram_logo_2022.svg.png")} />
              </a>

          <div className="pad" style={{ flex: '1 1 0', height: 75, padding: 10 }} />
          <button className="menu-items-1" style={{ width: 120, height: 75, textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '200', wordWrap: 'break-word' }} onClick={home}>Home</button>
          <button className="menu-items-1" style={{ width: 120, height: 75, textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '200', wordWrap: 'break-word' }} onClick={education}>Education</button>
          <button className="menu-items-1" style={{ width: 120, height: 75, textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '200', wordWrap: 'break-word' }} onClick={project}>Project</button>
          <button className="menu-items-1" style={{ width: 120, height: 75, textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '200', wordWrap: 'break-word' }} onClick={about} >About</button>
        </div>
      </div>
    </div>

  );
}

export default App;
