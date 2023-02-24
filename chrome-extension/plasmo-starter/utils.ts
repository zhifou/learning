export interface Color {
  r: number
  g: number
  b: number
  a?: number
}

export function GetHex(decimal: number) {
  const alpha = "0123456789ABCDEF"
  const out = "" + alpha[decimal]
  return out
}

export function HexToInt(hexChar: string) {
  var hex: String = "" + hexChar
  switch (hex) {
    case "0":
      return 0
    case "1":
      return 1
    case "2":
      return 2
    case "3":
      return 3
    case "4":
      return 4
    case "5":
      return 5
    case "6":
      return 6
    case "7":
      return 7
    case "8":
      return 8
    case "9":
      return 9
    case "A":
      return 10
    case "B":
      return 11
    case "C":
      return 12
    case "D":
      return 13
    case "E":
      return 14
    case "F":
      return 15
  }
}

export function RGBToHex(color: Color) {
  const red = color.r * 255
  const green = color.g * 255
  const blue = color.b * 255

  const a = GetHex(Math.floor(red / 16))
  const b = GetHex(Math.round(red % 16))
  const c = GetHex(Math.floor(green / 16))
  const d = GetHex(Math.round(green % 16))
  const e = GetHex(Math.floor(blue / 16))
  const f = GetHex(Math.round(blue % 16))

  const z = a + b + c + d + e + f

  return z
}

export function HexToRGB(color: string) {
  const red = HexToInt(color[1]) + HexToInt(color[0]) * 16.0
  const green = HexToInt(color[3]) + HexToInt(color[2]) * 16.0
  const blue = HexToInt(color[5]) + HexToInt(color[4]) * 16.0
  const finalColor = {
    r: red,
    g: green,
    b: blue,
    a: 1
  }

  return finalColor
}
