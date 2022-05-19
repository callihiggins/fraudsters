const fetch = require('node-fetch');

const {
  unSlashIt,
  camelCaseKeys
} = require('./utils');

class Simplecast {
  constructor({
    token,
    podcastId
  }) {
    this.token = token;
    this.podcastId = podcastId;
    this.headers = {
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
    this.baseUrl = `https://api.simplecast.com`;
  }

  setHeaders = (headers = {}) => {
    // extract auth values to avoid potential bugs
    const {
      Authorization,
      authorization,
      ...newHeaders
    } = headers;
    const {
      headers: currentHeaders
    } = this;
    this.headers = { ...currentHeaders,
      ...newHeaders
    };
  };
  request = (path = '', params = {}, method = 'GET') => {
    // TODO: let query = qs.stringify(params) || '';
    const url = this.baseUrl + '/' + unSlashIt(path);
    return fetch(url, {
      method,
      headers: this.headers,
      cache: 'default'
    });
  };
  getEpisode = episodeId => {
    if (!episodeId) {
      throw Error('No episode ID provided.');
    }

    return this.request(`episodes/${this.podcastId}/episodes`).then(res => res.json()).then(data => camelCaseKeys(data, {
      deep: true
    })).catch(console.error);
  };
  getEpisodeKeywords = episodeId => {
    if (!episodeId) {
      throw Error('No episode ID provided.');
    }

    return this.request(`episodes/${episodeId}/keywords`).then(res => res.json()).then(data => camelCaseKeys(data, {
      deep: true
    })).catch(console.error);
  };
  getEpisodeSearchData = slug => {
    if (!slug) {
      throw Error('No episode slug provided.');
    }

    const payload = {
      url: `https://fraudsters.simplecast.com/episodes/${slug}`
    };
    return fetch(`https://api.simplecast.com/episodes/search`, {
      method: 'POST',
      headers: this.headers,
      cache: 'default',
      body: JSON.stringify(payload)
    }).then(res => res.json()).then(data => camelCaseKeys(data, {
      deep: true
    })).catch(console.error);
    ;
  };
  getShowInfo = () => {
    return this.request(`podcasts/${this.podcastId}`).then(res => res.json()).then(data => camelCaseKeys(data, {
      deep: true
    })).catch(console.error);
  };
  getEpisodes = (limit = 10) => {
    return this.request(`podcasts/${this.podcastId}/episodes?limit=${typeof limit === 'number' ? limit : 10}`).then(res => res.json()).then(info => info.collection).then(data => camelCaseKeys(data, {
      deep: true
    })).catch(console.error);
  };
}

module.exports = Simplecast;