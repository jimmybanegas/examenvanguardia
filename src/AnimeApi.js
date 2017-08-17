module.exports = class AnimeApi {
  constructor(request, requestPromise) {
    this.request = request;
    this.requestPromise = requestPromise;
  }

  /**
   * gets an Anime by Id
   * @param {number} id s
   */
  getAnime(id, cb) {
    const options = {
      url: `https://jikan.me/api/anime/${id}`,
      method: 'GET',
      json: true
    };
    this.request(options, (error, response, body) => {
      if (error) {
        cb(error, null);
        return;
      }
      cb(null, body);
    });
  }

  /**
   * gets an Anime by Id but way moar kool
   * @param {number} id Anime id
   * @returns {Promise<any>} Anime Object
   */
  async getAnimePromise(id) {
    const options = {
      url: `https://jikan.me/api/anime/${id}`,
      method: 'GET',
      json: true
    };
    const response = await this.requestPromise(options);
    return response;
  }
};
