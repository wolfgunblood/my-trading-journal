import React, { useState } from 'react';
import styles from './App.module.scss';
import Preview from './containers/Preview/Preview';
import Form from './containers/Form/Form';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import uniqid from 'uniqid';
import MobileToggle from './components/MobileToggle/MobileToggle';



const App = () => {

  const [userInfo, setUserInfo] = useState(
    {
      firstName: "",
      lastName: "",
      address: "",
      website: "",
      email: "",
      phone: "",
      description: "",
    }
  );

  const [educationInfo, setEducationInfo] = useState(
    {
      uniName: "",
      uniDegree: "",
      uniDate: "",
      schoolName: "",
      schoolDegree: "",
      schoolDate: "",
    }
  );

  const [experience, setExperience] = useState([

    {
      isHover: false,
      id: uniqid(),
      company: "",
      position: "",
      task: "",
      start: "",
      end: "",

    },
  ]
  );

  const [newExperience, setNewExperience] = useState(

    {
      isHover: false,
      id: uniqid(),
      company: "",
      position: "",
      task: "",
      start: "",
      end: "",
    },

  );
  const [tradeData, setTradeData] = useState([

    {
      isHover: false,
      id: uniqid(),
      trade1: "",
      sl1: "",
      target1: "",
      exit1: "",
      entry1: "",
      qty1:"",
      description: "",
      trade2: "",
      sl2: "",
      target2: "",
      exit2: "",
      entry2: "",
      qty2:"",
      
    },
  ]
  );
  const [equityData, setEquityData] = useState([

    {
      isHover: false,
      id: uniqid(),
      tradeName: "",
      sl: "",
      target: "",
      exit: "",
      entry: "",
      qty: "",
      description: "",


    },
  ]
  );

  const [newTradeData, setnewTradeData] = useState(

    {
      isHover: false,
      id: uniqid(),
      trade1: "",
      sl1: "",
      target1: "",
      exit1: "",
      entry1: "",
      qty1: "",
      trade2: "",
      sl2: "",
      target2: "",
      exit2: "",
      entry2: "",
      qty2: "",
      
    },

  );
  const [newEquityData, setnewEquityData] = useState(

    {
      isHover: false,
      id: uniqid(),
      tradeName: "",
      sl: "",
      target: "",
      exit: "",
      entry: "",
      qty: "",
      description: "",
    },

  );

  const [skills, setSkills] = useState([

    {
      isHover: false,
      id: uniqid(),
      skill: "",
    },
    {
      isHover: false,
      id: uniqid(),
      skill: "",

    },
    {
      isHover: false,
      id: uniqid(),
      skill: "",

    },
  ]
  );

  const [newSkill, setNewSkill] = useState(

    {
      isHover: false,
      id: uniqid(),
      skill: "",

    },

  );

  const [mobile, setMobile] = useState(true);
  const [tdate, setTdate] = useState("");
  const [isEquity, setIsEquity] = useState(true);
  const [isTarget, setIsTarget] = useState(false);
  const [isSl, setIsSL] = useState(false);
  const [isExit, setIsExit] = useState(false);

  const handleToggle = (e) => {
    const newMobile = mobile;
    setMobile(!newMobile)

  }

  const changeUserInfo = (e) => {
    const id = e.target.id
    const value = e.target.value
    const userInfoCopy = { ...userInfo }
    userInfoCopy[id] = value
    setUserInfo(userInfoCopy)
    console.log(userInfo)

  }
  const changeEducationInfo = (e) => {
    const id = e.target.id
    const value = e.target.value
    const educationInfoCopy = { ...educationInfo }
    educationInfoCopy[id] = value
    setEducationInfo(educationInfoCopy)
    console.log(educationInfo)

  }

  const changeExperience = (e, id) => {
    const i = id;
    const exp = experience.map((work) => {
      if (work.id === i) {

        work[e.target.name] = e.target.value;
        return work;
      } else {
        return work;
      }
    })
    setExperience(exp);
    console.log(experience);
  }
  const changeTradeData = (e, id) => {
    const i = id;
    const trd = tradeData.map((t) => {
      if (t.id === i) {

        t[e.target.name] = e.target.value;
        return t;
      } else {
        return t;
      }
    })
    setTradeData(trd);
    console.log(tradeData);
  }



  const changeEquityData = (e, id) => {
    const i = id;
    const trd = equityData.map((t) => {
      if (t.id === i) {

        t[e.target.name] = e.target.value;
        return t;
      } else {
        return t;
      }
    })
    setEquityData(trd);
    console.log(tradeData);
  }

  const addExperience = (e) => {
    e.preventDefault();
    // const experienceCopy = experience.push(newExperience);

    // console.log(experienceCopy);
    // console.log([...experience,newExperience]);
    setExperience([...experience, newExperience]);
    setNewExperience({ ...newExperience, id: uniqid() });
    console.log(experience);

  }
  const addTradeData = (e) => {
    // e.preventDefault();
    // const experienceCopy = experience.push(newExperience);

    // console.log(experienceCopy);
    // console.log([...experience,newExperience]);
    setTradeData([...tradeData, newTradeData]);
    setnewTradeData({ ...newTradeData, id: uniqid() });

    console.log(tradeData);

  }
  const addEquityData = (e) => {
    // e.preventDefault();
    // const experienceCopy = experience.push(newExperience);

    // console.log(experienceCopy);
    // console.log([...experience,newExperience]);
    setEquityData([...equityData, newEquityData]);
    setnewEquityData({ ...newEquityData, id: uniqid() });

    console.log(tradeData);

  }

  const removeTrade = (index) => {
    const list = [...tradeData]
    list.splice(index, 1);
    // console.log(list)
    setTradeData(list);
  }
  const removeEquity = (index) => {
    const list = [...equityData]
    list.splice(index, 1);
    // console.log(list)
    setEquityData(list);
  }

  const removeExp = (e, index) => {
    const list = [...experience]
    list.splice(index, 1);
    console.log(list)
    setExperience(list);
  }

  const changeSkill = (e, id) => {
    const i = id;
    const skl = skills.map((skill) => {
      if (skill.id === i) {

        skill[e.target.name] = e.target.value;
        return skill;
      } else {
        return skill;
      }
    })
    console.log(skl)
    setSkills(skl)
    console.log(skills)
  }

  const addSkill = (e) => {
    e.preventDefault()
    setSkills([...skills, newSkill])
    setNewSkill({ ...newSkill, id: uniqid() })
    console.log(skills)
  }

  const removeSkill = (index) => {
    const list = [...skills]
    list.splice(index, 1)
    console.log(list)
    setSkills(list)
  }


  const printDoc = () => {
    const input = document.getElementById('preview');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        console.log(imgData);
        const pdf = new jsPDF();

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        // Download PDF to user
        pdf.save("Tradingdata.pdf");
      });
  }

  return (
    <div className={styles.body}>
      <div className={styles.App}>
        <Form
          printDoc={printDoc}
          mobile={mobile}
          handleToggle={handleToggle}
          tradeData={tradeData}
          setTradeData={setTradeData}
          changeTradeData={changeTradeData}
          addTradeData={addTradeData}
          removeTrade={removeTrade}
          tdate={tdate}
          setTdate={setTdate}
          isEquity={isEquity}
          setIsEquity={setIsEquity}
          equityData={equityData}
          setEquityData={setEquityData}
          changeEquityData={changeEquityData}
          addEquityData={addEquityData}
          removeEquity={removeEquity}
          isTarget={isTarget}
          setIsTarget={setIsTarget}
          isSl={isSl}
          setIsSL={setIsSL}
          isExit={isExit}
          setIsExit={setIsExit}
          
        />
        <Preview
          mobile={mobile}
          handleToggle={handleToggle}
          tradeData={tradeData}
          tdate={tdate}
          setTdate={setTdate}
          isEquity={isEquity}
          equityData={equityData}
        />
        <MobileToggle
          mobile={mobile}
          handleToggle={handleToggle}
        />
        {/* {console.log(value)} */}
      </div>
    </div>
  )
}

export default App