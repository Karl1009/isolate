
const tick = Date.now()
export const log = (v: string | string[]) => {
  console.log(`${v} \n Elapsed - ${Date.now() - tick} ms`)
}
