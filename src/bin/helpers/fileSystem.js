const fs    = require('fs')
const createCsvWriter = require('csv-writer').createObjectCsvWriter

const createFolder = (folderName) => {
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName, { recursive: true })
    }
  } catch (err) {
    console.log(err);
    return false
  }
  return folderName
}

const createCsv = (filename, data, folderPath='./') => {
  const csvWriter = createCsvWriter({
    path: `${folderPath}/${filename}`,
    header: [
      {id: 'created_at', title: 'Created Date'},
      {id: 'tag_name', title: 'Tag Name'},
      {id: 'zipball_url', title: 'URL of Dist. Zip'}
    ]
  });

  csvWriter.writeRecords(data)
    .then(() => {
      console.log('...Done');
    })
    .catch((err) => {
      console.log(err);
      return false
    });
    return `${folderPath}/${filename}`
}

module.exports = {
  createFolder, createCsv
}