# emoji-dlp
Example of Google DLP api to remove emoji(s) from a string 

## Getting Started
### Requirements
1. Node.js 10+
2. A valide GCP project with billing enable
3. DLP Api enabled in your project

### Installation
1. Clone this repo `https://github.com/ybellerose/emoji-dlp.git`
2. Install node dependencies with `npm install`
3. In index.js, change the projectId variable to your GCP projectId 
4. Enable DLP API for your project in GCP: Enable the API :  https://console.cloud.google.com/flows/enableapi?apiid=dlp.googleapis.com

N.B.: If you run this demo on your own computer instead of GCP shell console, use an authentication method: https://cloud.google.com/dlp/docs/auth. However, if you run this demo in GCP shell console of your project, only the projectId is required as mention above, in step 3.


### Usage
1. npm start -> Will lauch the script to de-identify emojis
2. text-example.txt is the string example
3. deidentify-config.js containt the replacement character used by dlp (const replacement = '*')
4. Banned emojis are listed in BannedEmojis variable in index.js. | is used between emojis in the variable.


### To know more about Google DLP
https://cloud.google.com/dlp/docs
