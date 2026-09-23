import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import TalentGrid from "../components/TalentGrid";
import ExecTeam from "../components/ExecTeam";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import { useState } from "react";
import ExecutiveModal from "../components/ExecutiveModal";
import Impact from "../components/Impact";

export default function Home() {
  const [openExecModal, setOpenExecModal] = useState(false);
  const [currentExec, setCurrentExec] = useState({});

  return (
    <>
      <Hero />
      <About />
      <Stats />
      <TalentGrid />
      <ExecTeam
        setOpenExecModal={setOpenExecModal}
        setCurrentExec={setCurrentExec}
      />
      <Services />
      <ExecutiveModal
        openExecModal={openExecModal}
        setOpenExecModal={setOpenExecModal}
        currentExec={currentExec}
      />
      <Impact />
      <ContactUs />
    </>
  );
}
