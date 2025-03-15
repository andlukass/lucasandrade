import axios from 'axios';
import { load } from 'cheerio';
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { initializeApp } from "firebase-admin/app";
import {onSchedule} from "firebase-functions/v2/scheduler";

initializeApp();

const sendEmail = async (newJobs: {url: string, name: string}[]) => {
  let tempEmail = {
    to: [ "lopess.andrade@gmail.com" ],
    message: {
      subject: "New job opportunities found at Critical TechWorks!",
      text: "",
      html: `
      <p>Hello! Here are the list of the opportunities found:</p>
        ${newJobs.map((job) => {
            return `<a href="${job.url}"><span>${job.name}</span></a> <br/>`;
        }).join().replace(/,/g, '')}`,
    },
  };
  console.log("email sent!")
  await getFirestore().collection("mail").add(tempEmail);
}

const getJobsFromUrl = async (url: string, newJobs: {url: string, name: string}[], knownJobs: {name: string, url: string, date: Timestamp}[]) => {
  const { data: html } = await axios.get(url);
  const $ = load(html);

  const jobElements = $(
  '.flex.flex-col.py-6.text-center.sm\\:px-6.hover\\:bg-gradient-block-base-bg.focus-visible-company.focus-visible\\:rounded'
  );

  jobElements.each((index, element) => {
    void index;
    const jobTitle = $(element).find('span').first().text().trim();
    const jobLink = $(element).attr('href') || "url error";

    const existingJob = knownJobs.find((item) => item.url === jobLink);
    if (jobTitle.includes("Wannabe") && !existingJob) {
        newJobs.push({url: jobLink, name: jobTitle});
    }
  });
}

export const getCriticalJobs = onSchedule("0 0 * * *", async (event) => {
  void event;
  const knownJobsRef = getFirestore().collection("logs").doc("criticalJobs");
  const knownJobs = ((await knownJobsRef.get()).data()?.jobs || []) as {name: string, url: string, date: Timestamp}[] ;

  let newJobs: {url: string, name: string}[]= [];
  for (let i = 1; i <= 3; i++) {
    const url = `https://join.criticaltechworks.com/jobs?page=${i}`;
    try {
      await getJobsFromUrl(url, newJobs, knownJobs);
    } catch (error) {
      if (error instanceof Error)console.log('Error getting url:' +  url);
    }
  }
  newJobs.forEach((item)=>{knownJobs.push({name: item.name, url: item.url, date: Timestamp.now()})})
  await knownJobsRef.update({jobs: knownJobs});
  console.log("newJobs: ", newJobs);

  if (newJobs.length) {
    await sendEmail(newJobs);
  }
  else console.log("nothing new found :(")
});
