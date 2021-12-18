import React, { useEffect, useState } from 'react';
import { ContainerMain } from 'components/UI/ContainerMain';
import { Checkbox } from 'components/UI/Checkbox';
import useSelect from 'hooks/useSelect';

const App: React.FC = () => {
  const [result, setResult] = useState<number>();
  const { selected, handleSelect, handleUnselect } = useSelect<number | string>([]);
  const handleToggle = (id: string | number) => () => {
    if (selected.includes(id)) handleUnselect(id);
    else handleSelect(id);
  };
  const updateResult = () => {
    setResult(() => +selected[Math.floor(Math.random() * selected.length)] + 1);
  };
  useEffect(() => updateResult(), [selected]);
  return (
    <ContainerMain>
      <h1>Результат</h1>
      {Array.from(Array(8)).map((_, index) => (
        <Checkbox key={index} name={index.toString()} checked={selected.includes(index)} onChange={handleToggle(index)}>{index + 1}</Checkbox>
      ))}
      <h2>{result ? result : '😉'}</h2>
      <button onClick={updateResult}>Обновить</button>
    </ContainerMain>
  );
};

export default App;
