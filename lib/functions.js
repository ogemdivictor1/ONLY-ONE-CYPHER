const axios = require('axios');

async function getBuffer(url, options = {}) {
  const res = await axios.get(url, { ...options, responseType: 'arraybuffer' });
  return res.data;
}

function getGroupAdmins(participants) {
  let admins = [];
  for (let i of participants) {
    if (i.admin === "admin" || i.admin === "superadmin") admins.push(i.id);
  }
  return admins;
}

function getRandom(ext) {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
}

function h2k(num) {
  return num > 999 ? (num / 1000).toFixed(1) + 'K' : num;
}

function isUrl(url) {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,})'+ // domain name
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i');
  return !!pattern.test(url);
}

function Json(obj) {
  return JSON.stringify(obj, null, 2);
}

function runtime(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor(seconds % (3600 * 24) / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  const s = Math.floor(seconds % 60);
  return `${d}d ${h}h ${m}m ${s}s`;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchJson(url, options = {}) {
  const res = await axios.get(url, options);
  return res.data;
}

module.exports = { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson };
