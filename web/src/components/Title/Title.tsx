import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './Title.css';

interface TitleProps {
  title: string;
  body: string;
  searchedAuthor: string;
}

function Title(props: TitleProps) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
  }, [props.searchedAuthor]);

  return (
    <>
      <h1 className="title-heading" onClick={() => setToggle((prev) => !prev)}>
        {props.title}
      </h1>
      {toggle && (
        <section>
          <ReactMarkdown>{props.body}</ReactMarkdown>
        </section>
      )}
    </>
  );
}

export default Title;
