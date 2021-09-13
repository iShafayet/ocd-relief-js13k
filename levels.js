scope.levelList = [];

// level 1
scope.levelList.push({
  time: 100,
  input: [
    "Documents",
    "Music",
    "Documents/Story.docx",
    "Never before.mp3",
    "Lady in red.mp3",
    "Recording 1.wav",
    "Thriller.docx",
    "Transactions Q4.pdf",
    "~Thriller.tmp",
  ],
  objectives: [
    {
      text: "Put all music in the Music folder",
      testFn: (files) => {
        {
          let subFiles = files.find((f) => f.name === "Music").files;
          let list = subFiles.filter((file) => {
            return ["wav", "mp3"].indexOf(file.extension) > -1;
          });
          if (list.length !== 3) return false;
        }
        return true;
      },
    },
    {
      text: "Put all docs in the Documents folder",
      testFn: (files) => {
        {
          let subFiles = files.find((f) => f.name === "Documents").files;
          let list = subFiles.filter((file) => {
            return ["docx", "doc", "pdf"].indexOf(file.extension) > -1;
          });
          if (list.length !== 3) return false;
        }
        return true;
      },
    },
    {
      text: "Remove all Temporary files",
      testFn: (files) => {
        {
          let subFiles = files.find((f) => f.name === "Recycle Bin").files;
          let list = subFiles.filter((file) => {
            return ["tmp"].indexOf(file.extension) > -1;
          });
          if (list.length !== 1) return false;
        }
        return true;
      },
    },
  ],
});
