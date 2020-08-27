export const genId = (id='id') => `${id}_${(~~(Math.random()*1e8)).toString(16)}`;
