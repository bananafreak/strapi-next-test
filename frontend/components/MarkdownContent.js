import React from 'react';
import Markdown from 'markdown-to-jsx';
import Potato from './Potato';
import Button from './Button';

const MarkdownContent = ({ children }) => {
  const options = {
    overrides: {
      potato: { component: Potato },
      button: { component: Button },
    },
  };

  return <Markdown options={options}>{children}</Markdown>;
};

export default MarkdownContent;
