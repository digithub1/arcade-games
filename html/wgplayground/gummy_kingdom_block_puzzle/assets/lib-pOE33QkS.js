function n(t){const l=Array.from({length:t[0].length},()=>Array(t.length).fill(0));for(let r=0;r<t.length;r++)for(let e=0;e<t[r].length;e++)l[e][t.length-1-r]=t[r][e];return l}export{n as rotateFig};
