import React, { ChangeEvent, useState } from 'react';
import './App.css';
import InputFile from './components/inputFile'
import MemberList, {Members} from './components/memberList'
import CreateTeam from './components/createTeam'

function App() {
  const [members, setMembers] = useState<Members>([])
  return (
    <div className="App">
      <InputFile
        type='file'
        onChange={e => onFileChange(e, setMembers)}
      />
      <MemberList
        members={members}
      />
      <CreateTeam
        members={members}
      />
    </div>
  );
}

const onFileChange= async (e: ChangeEvent<HTMLInputElement>, setMembers: React.Dispatch<React.SetStateAction<Members>>) => {
  let text = await e.target.files?.item(0)?.text()
  if (!text) return
  const json: {members: Members} = JSON.parse(text)
  setMembers(json.members)
}

export default App;
