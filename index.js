const { CronJob } = require("cron");
const { status } = require("express/lib/response");
const rwClient = require("./twitterClient.js");
const cronJob = require('cron').CronJob;

const tweet = async()=>{
    try{
        await rwClient.v1.tweet("Buenos días!")
    }catch(e){
        console.error(e);
    }
}


const job = new CronJob("0 8 * * *", ()=>{
    console.log("Se va a decir buenos días");
    tweet();
})

job.start();
