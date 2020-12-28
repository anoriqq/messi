import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const MemberIcon = styled.img`
  width: 40px;
  vertical-align: middle;
`
const MemberName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  font-size: 2em
`

type Props = {
  name: string
  icon: string
}

const Member = (props: Props) => {
  return (
    <Wrapper>
      <MemberIcon src={props.icon} alt={props.name}/>
      <MemberName>{props.name}</MemberName>
    </Wrapper>
  )
}

export default Member