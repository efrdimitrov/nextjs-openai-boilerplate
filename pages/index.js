import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import TextInput from '@/components/TextInput';
import SubmitButton from '@/components/SubmitButton';
import ResponseDisplay from '@/components/ResponseDisplay';
import useApi from '@/hooks/useApi';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [submitValue, setSubmitValue] = useState('');
  const { data, error, loading } = useApi('/api/openai', 'POST', submitValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitValue(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Head>
        <title>NextJS OpenAI Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1 className={inter.className}>NextJS OpenAI Boilerplate</h1>
        <p className={inter.className}> Test this boilerplate with a prompt such as a request for a pet name.
        </p>
        <form>
          <ResponseDisplay data={data} error={error} loading={loading} />
          <TextInput value={inputValue} onChange={handleInputChange} />
          <SubmitButton onClick={handleSubmit} disabled={loading} />
        </form>
      </main>
    </>
  );
}
