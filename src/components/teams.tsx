import React from 'react';
import styled from 'styled-components'
import {Members} from './memberList'
import Member from './member'

const Wrapper = styled.div`
  display: flex;
`;

type Props = {
  teams: Members[]
}

const Teams = (props: Props) => {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>team</th>
            <th>member</th>
          </tr>
        </thead>
      {props.teams?.map((v, i) => {
        return (
          <tr key={i}>
            <td>{i}</td>
            {v.map(m => {
              return (
                <td>
                  <Member name={m.name} icon={m.icon} />
                </td>
              )
            })}
          </tr>
        )
      })}
      </table>
    </Wrapper>
  )
}

export default Teams