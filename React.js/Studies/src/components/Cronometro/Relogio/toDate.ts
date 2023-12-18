function toMinutes (tempo: string = '00:00:00') {
  const [h, min, seg] = tempo.split(':');
  const minConvertido = (Number(h)*60) + Number(min);

  return `${minConvertido ? minConvertido : '00'}:${seg ? seg : '00'}`;
}

export function converteTempo (tempo: string) {
  return toMinutes(tempo);
}