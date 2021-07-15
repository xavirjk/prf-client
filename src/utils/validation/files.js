export const monitorAFileInput = (e, setFile, seed, maxsize) => {
  const Files = e.target.files;
  const name = e.target.name;
  if (Files[0].size > maxsize) {
    alert(
      `You have selected  a big file size exceeding the maximum limit size ${
        maxsize / 1000000
      }MB `
    );
    e.target.value = null;
    name === 'resume'
      ? setFile({ ...seed, resume: [] })
      : setFile({ ...seed, profile: [] });

    return;
  }
  name === 'resume'
    ? setFile({ ...seed, resume: Files })
    : setFile({ ...seed, profile: Files });
};
