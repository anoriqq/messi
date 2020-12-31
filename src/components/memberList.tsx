import React from 'react';
import Member from './member'

type Props = {
  members: Members
}

export type Members = {
  name: string
  icon: string
}[]

const MemberList = (props: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>icon</th>
          <th>name</th>
        </tr>
      </thead>
      {props.members.length ? props.members.map((m) => {
        return (
          <tr key={m.name}>
            <Member name={m.name} icon={m.icon}/>
          </tr>
        )
      }): <></>}
    </table>
  )
}

export default MemberList