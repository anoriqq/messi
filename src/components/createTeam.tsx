import React, { useState } from 'react';
import styled from 'styled-components'
import {Members} from './memberList'
import Teams from './teams'

const Wrapper = styled.div`
  display: flex;
`;
const NumberOfMembers = styled.div`
  margin-right: 20px;
`
const NumberOfTeamMembers = styled.div`
  margin-right: 20px;
`

type Props = {
  members: Members
}

const CreateTeam = (props: Props) => {
  const [numberOfTeamMembers, setNumberOfTeamMembers] = useState(4)
  const [teams, setTeams] = useState < Members[]>()
  return (
    <>
    <Wrapper>
      <NumberOfMembers>参加者 {props.members.length}人</NumberOfMembers>
      <NumberOfTeamMembers>チームあたり <input type="number" value={numberOfTeamMembers} onChange={e => { setNumberOfTeamMembers(parseInt(e.target.value)) }}/>人</NumberOfTeamMembers>
      <button type='button' onClick={e => { setTeams(arrayChunk(shuffle(props.members), numberOfTeamMembers))}}>チーム作成</button>
    </Wrapper>
    {teams ?
      <Teams
        teams={teams}
      />
    : <></>}
    </>
  )
}

export default CreateTeam

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const arrayChunk = ([...array], size = 1) => {
  return array.reduce((acc, value, index) => index % size ? acc : [...acc, array.slice(index, index + size)], []);
}