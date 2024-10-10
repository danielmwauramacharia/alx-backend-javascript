function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    Object.prototype.hasOwnProperty.call(trueOrFalse, task, task2);
  }
  return [task, task2];
}
