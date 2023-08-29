import React, { useState } from 'react';
import DataList from 'components/DataList';
import InputForm from 'components/InputForm';

export const App = () => {
  const [happyThoughtsList, setHappyThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');
  const [charCount, setCharCount] = useState(140);
  const [charCountColor, setCharCountColor] = useState('red');

  return (
    <>
      <InputForm
        loading={loading}
        setLoading={setLoading}
        newThought={newThought}
        setNewThought={setNewThought}
        setHappyThoughtsList={setHappyThoughtsList}
        happyThoughtsList={happyThoughtsList}
        charCount={charCount}
        setCharCount={setCharCount}
        charCountColor={charCountColor}
        setCharCountColor={setCharCountColor} />
      <DataList
        loading={loading}
        setLoading={setLoading}
        happyThoughtsList={happyThoughtsList}
        setHappyThoughtsList={setHappyThoughtsList} />
    </>
  )
};