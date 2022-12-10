import React, { useEffect, useState }from'react';
import'./App.css';

function Call() {
  let[htmlFileString, setHtmlFileString] = useState();

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`./index.html`)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);

  return(
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
}

export default Call;