export default function pxToRemHelper(px: number) : string {

    const pxToRem = px / 16

    return `${pxToRem}rem`
}