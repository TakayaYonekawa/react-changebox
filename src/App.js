// import { css }  from '@emotion/react';
import styled, { css } from 'styled-components';
import { useEffect, useState } from "react";
import "./App.css";

// 20:00

function App() {
  var [rangeVals, setRangeVals] = useState('500');
  var [rangeVals02, setRangeVals02] = useState('500');
  var [rangeVals03, setRangeVals03] = useState('00ff7f');
  var [rangeVals04, setRangeVals04] = useState('333333');
  var [rangeVals05, setRangeVals05] = useState('テキストを変更しよう');

  const handleChange = (e) => {
    const rangeVal = e.target.value;
    setRangeVals(rangeVal);
  }
  
  const handleChange02 = (e) => {
    const rangeVal02 = e.target.value;
    setRangeVals02(rangeVal02);
  }

  const handleChange03 = (e) => {
    const rangeVal03 = e.target.value;
    if(rangeVal03.length > 6){
      return;
    }
    setRangeVals03(rangeVal03);
  }

  const handleChange04 = (e) => {
    const rangeVal04 = e.target.value;
    if(rangeVal04.length > 6){
      return;
    }
    setRangeVals04(rangeVal04);
  }

  const handleChange05 = (e) => {
    const rangeVal05 = e.target.value;
    if(rangeVal05.length > 30){
      return;
    }
    setRangeVals05(rangeVal05);
  }
  
  const Box = styled.div`
  width:${rangeVals}px;
  height:${rangeVals02}px;
  background-color: #${rangeVals03};
  display: flex;
  align-items: center;
  justify-content:center;
  `
  const BoxText = styled.p`
  font-size: 16px;
  color: #${rangeVals04};
  `

  // loadingのStateがTrueのときに表示するコンテンツ
function Content() {
  return (
    <h1>Hello World!!</h1>
  )
}

// loadingのStateがFalseのときに表示するコンテンツ
function Spinner() {
  return (
    <div className="sk-plane sk-center"></div>
  )
}

  return (

    <>
    <section className="jsArea">

    
<div className="inputArea">
  <div>
    Width:<input type="range" name="width" onChange={(e)=> handleChange(e)} className="rangeWidth" min='0' max='500' value={rangeVals}/>  <span className="rangeNo">{rangeVals}</span>px<br/>
  </div>
  <div>
    Height:<input type="range" name="height" onChange={(e)=> handleChange02(e)} className="rangeHeight" min='0' max='500' value={rangeVals02}/>  <span className="rangeNo">{rangeVals02}</span>px<br/>
  </div>
  <div>
    背景色（16進）:#<input type="text" className="rangeBgColor" onInput={(e)=> handleChange03(e)}  value={rangeVals03}/> (enterで変更されます)
  </div>
  <div>
    文字の色（16進）:#<input type="text" className="rangeTextColor" onInput={(e)=> handleChange04(e)}  value={rangeVals04}/> (enterで変更されます)
  </div>
  <div>
    テキスト（30字以内）:<br/><br/><textarea className="rangeText" onInput={(e)=> handleChange05(e)}  value={rangeVals05}></textarea>
  </div>
</div>


<div>
  <Box>
    <BoxText>
        {rangeVals05}
    </BoxText>
  </Box>
</div>

</section>


<section className=" previewCodeArea">

    <div className="previewCodeContent">
      <p>HTMLプリビュー</p>
      <div className="previewHtml">

        &lt;div className="box"&gt;<br/>
        &lt;p className="innerText"&gt;<br/>
          <span className="previewHtmlText">テキストを変更しよう</span><br/>
        &lt;/p&gt;<br/>
        &lt;/div&gt;<br/>

      </div>
    </div>
    <br/>

    <div className="previewCodeContent">
      <p>CSSプリビュー</p>
      <div className="previewCss">

        .box{'{'}<br/>
          width: {rangeVals}px;<br/>
          height: {rangeVals02}px;<br/>
          background-color: #{rangeVals03};<br/>
          display: flex;<br/>
          align-items: center;<br/>
          justify-content:center;<br/>
    
          {'}'}<br/>
          <br/>
        .box .innerText{'{'}<br/>
          font-size: 16px;<br/>
          color: #{rangeVals04};<br/>
          {'}'}<br/>

      </div>
    </div>
</section>

    </>
    
    );
}

// https://tarovlog.com/2021/03/09/react-page-loading/

export default App;