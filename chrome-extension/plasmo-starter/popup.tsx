import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

import { HexToRGB } from "./utils"

import "./popup.less"

const HEX_CHAR = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
]

function IndexPopup() {
  const [data, setData] = useState("")
  const [result, setResult] = useState("")

  const onColorChange = (e) => {
    let colorValue = e.target.value
    const result = ["#"]
    colorValue = colorValue.replaceAll("#", "")
    colorValue.split("").forEach((i) => {
      if (HEX_CHAR.includes(i)) {
        result.push(i.toUpperCase())
      }
    })
    // const reg = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")
    // if (colorValue.indexOf("#") !== 0) {
    //   colorValue = `#${colorValue}`
    // }
    // if (!reg.test(colorValue)) {
    //   // alert("色值格式错误")
    //   console.log("色值格式错误")
    // }
    if (result.length > 7) {
      result.pop()
    }
    setData(result.join(""))
  }

  const onTransfer = () => {
    console.log(61, data.slice(1, 7))
    const result = HexToRGB(data.slice(1, 7))
    const { r, g, b, a } = result
    setResult(`rgba(${r}, ${g}, ${b}, ${a})`)
  }

  return (
    <div className="content">
      <h2>Color Transfer</h2>
      <input className="colorInput" onChange={onColorChange} value={data} />
      <div className="result">
        <span>{result}</span>
        <CopyToClipboard
          text={result}
          onCopy={() => {
            alert("已复制")
          }}>
          <span className="copyIcon">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 26 26"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <title>Group</title>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round">
                <g
                  id="Group"
                  transform="translate(1.000000, 1.000000)"
                  stroke="currentColor"
                  strokeWidth="2">
                  <rect
                    id="Rectangle"
                    x="8"
                    y="8"
                    width="16"
                    height="16"
                    rx="2"></rect>
                  <path
                    d="M3.69230769,16 L2.46153846,16 C1.10206769,16 0,14.8979692 0,13.5384615 L0,2.46153846 C0,1.10206769 1.10206769,0 2.46153846,0 L13.5384615,0 C14.8979692,0 16,1.10206769 16,2.46153846 L16,3.69230769"
                    id="Path"></path>
                </g>
              </g>
            </svg>
          </span>
        </CopyToClipboard>
      </div>
      <div className="footer">
        <div className="transfer" onClick={onTransfer}>
          转换
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
