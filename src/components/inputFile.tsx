import React, { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;
const Label = styled.label`
`;
const Input = styled.input`
  display: none;
`;
const FileName = styled.div`
  margin: 0 20px;
`;

const onChange = (e: React.ChangeEvent<HTMLInputElement>, cb: ChangeEventHandler<HTMLInputElement>, setFileName:React.Dispatch<React.SetStateAction<string>>) => {
  const targetName = e?.target?.files?.item(0)?.name
  if (!targetName) return;
  cb(e);
  setFileName(targetName);
};

type Props = {
  type: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const InputFile = (props: Props) => {
  const [filename, setFileName] = useState('選択されていません');
  if (props.type !== 'file') return <p>typeの指定、間違ってるよ</p>;
  return (
    <Wrapper>
      <Label>
        ファイルを選択
        <Input
          {...props}
          onChange={e => onChange(e, props.onChange, setFileName)}
        />
      </Label>
      <FileName>{filename}</FileName>
    </Wrapper>
  );
};

export default InputFile;
