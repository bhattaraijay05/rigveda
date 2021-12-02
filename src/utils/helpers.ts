export function hmsToSecondsOnly(str: string) {
  var p = str.split(":"),
    s = 0,
    m = 1;

  while (p.length > 0) {
    //@ts-ignore
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }

  return s;
}

export function between(x: any, min: number, max: number) {
  return x >= min && x <= max;
}
