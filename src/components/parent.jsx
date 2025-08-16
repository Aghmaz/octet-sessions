import React, { useCallback, useState, useMemo, useRef } from "react";
import Child from "./Child";
import PrintableSection from "./PrintableSection";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
function expensiveDouble(n) {
  let x = 0;
  for (let i = 0; i < 5000000; i++) {
    x += i % 3;
  }
  return n * 2 + (x % 7);
}
const Parent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("click_me");
  const [childState, setChildState] = useState(null);
  const handleClick = useCallback(() => {
    console.log("child button clicked");
  }, []);
  const printRef = useRef(null);

  const handlePrint = async () => {
    debugger;
    const el = printRef.current;
    if (!el) return;

    // canvas capture
    const canvas = await html2canvas(el, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");
    console.log(imgData);

    // A4
    const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    // multiple page suppor
    let y = 0;
    let remaining = imgHeight;

    while (remaining > 0) {
      pdf.addImage(
        imgData,
        "PNG",
        0,
        y === 0 ? 0 : 0,
        imgWidth,
        Math.min(remaining, pageHeight)
      );
      remaining -= pageHeight;
      if (remaining > 0) {
        pdf.addPage();
        y = 0;
      }
    }
    pdf.save("section.pdf");
  };

  // = useCallback(()=>{},[])
  const incrementalFucn = () => {
    setCount(count + 1);
    let temp = count;
    console.log(count);
    setChildState(count);
  };
  console.log(printRef, "printRef");
  // const double = expensiveDouble(count);
  const double = useMemo(() => {
    console.log("unnecessary re-rendered for function");
    expensiveDouble(count);
  }, [count]);

  console.log("parent rendered (memo + useCallback)");
  return (
    <div ref={printRef}>
      <button onClick={handlePrint}>Download PDF</button>
      <div>
        <PrintableSection />
      </div>
      <h1>parent component</h1>
      <h2>{count}</h2>
      <h2>{text}</h2>
      <h3>{double}</h3>
      <br />
      <button onClick={incrementalFucn}> Increment count</button> <br />
      <br />
      <br />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h2>Child component</h2>
      <Child
        label={`value: ${double}`}
        onClick={handleClick}
        childState={childState}
      />
    </div>
  );
};

export default Parent;
