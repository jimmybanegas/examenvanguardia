/**
 * @param  {} './src/AnimeApi'
 * @param  {} ;constrequest=require('request'
 * @param  {} ;constrequestPromise=require('request-promise'
 * @param  {} ;asyncfunctionmain(
 * @param  {} {constapiMasiso=newAnimeApi(request
 * @param  {} requestPromise
 * @param  {} ;try{constanimesPromises=[];for(leti=1;i<=50;i+=1
 * @param  {} {animesPromises.push(apiMasiso.getAnimePromise(i
 * @param  {} ;}console.log('Calma!'
 * @param  {} ;constnewAnimePromise=animesPromises.map(p=>p.catch(e=>e
 * @param  {} ;constanimes=awaitPromise.all(newAnimePromise
 * @param  {} ;console.log(animes.filter(a=>!(ainstanceofError
 * @param  {a.title} .map(a=>(ainstanceofError?'Error'
 */
const AnimeApi = require('./src/AnimeApi');
const request = require('request');
const requestPromise = require('request-promise');

/* const api = new AnimeApi(request, requestPromise);
api.getAnime(1, (error, anime) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(anime);
});
console.log('holis'); */


async function main() {
  const apiMasiso = new AnimeApi(request, requestPromise);
  try {
    const animesPromises = [];
    for (let i = 1; i <= 50; i += 1) {
      animesPromises.push(apiMasiso.getAnimePromise(i));
    }
    console.log('Calma!');
    const newAnimePromise = animesPromises.map(p => p.catch(e => e));
    const animes = await Promise.all(newAnimePromise);
    console.log(animes.filter(a => !(a instanceof Error))
      .map(a => (a instanceof Error ? 'Error' : a.title || 'Calma! No hay Titulo')));
  } catch (error) {
    console.error(error);
  }
}
main();
