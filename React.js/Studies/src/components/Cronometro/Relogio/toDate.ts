function toMinutes (tempo: string = '00:00:00') {
  const [h, min, seg] = tempo.split(':');
  const minConvertido = (Number(h)*60) + Number(min);

  return `${minConvertido ? minConvertido : '00'}:${seg ? seg : '00'}`;
}

export function toSecond (tempo: string = '00:00') {
  const [min, seg] = tempo.split(':');

  return (Number(min)*60) + (Number(seg));
}

export function backToMinute (tempo: number) {
  const min = String(Math.floor(tempo / 60)).padStart(2,'0');
  const seg = String(tempo % 60).padStart(2,'0');

  return `${min}:${seg}`;
}

export function backToHour (tempo: string) {
  const [ min, seg ] = tempo.split(':');

  if (Number(min) >= 60) {
    const hora = String(Math.floor(Number(min) / 60)).padStart(2,'0');
    const minConvertido = String(Number(min) % 60).padStart(2, '0');

    return `${hora}:${minConvertido}:${seg}`;
  }

  return `00:${min}:${seg}`;
}

export function converteTempo (tempo: string) {
  return toMinutes(tempo);
}