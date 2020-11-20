import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";

export const CodeBlock  = ({ children, className }: { className: string; children: string }): React.ReactNode => {
  const language: Language = className?.replace(/language-/, "") as Language

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
