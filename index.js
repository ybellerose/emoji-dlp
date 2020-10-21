// Imports libraries
const deidentify= require("./deidentify-config");
const DLP = require('@google-cloud/dlp');
const fs = require('fs');

// Instantiates a client
const dlp = new DLP.DlpServiceClient();

// The project ID to run the API call under
const projectId = '[your-gcp-projectid]';

//load example file content
const filepath = './text-example.txt';

const fileBytes = Buffer.from(fs.readFileSync(filepath)).toString();

const BannedEmojis = '\u{1F4A9}|\u{1F346}|\u{1F351}|\u{1F4A6}' //💩 🍆 🍑 💦

//Buidl CustomInfoType
const customInfoTypesEmoji = [
    {
        infoType: {"name": "emojis"},
        regex: {"pattern": BannedEmojis}
    }];


deidentifyEmojis()   


async function deidentifyEmojis() {
    // Construct deidentification request for emojis
    let item = {value: fileBytes};
    let request = {
      parent: `projects/${projectId}/locations/global`,
      deidentifyConfig: deidentify.config,
      inspectConfig: {
        customInfoTypes: customInfoTypesEmoji,
      },
      item: item,
    };

    // Run deidentification request
    let [response] = await dlp.deidentifyContent(request);
    let deidentifiedItem = response.item;
    console.log("DLP emojis")
    console.log("Raw file: " + fileBytes)
    console.log("DLP file: " + deidentifiedItem.value);
}