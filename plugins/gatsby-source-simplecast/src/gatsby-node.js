const createNodeHelpers = require('gatsby-node-helpers').default;
const { createRemoteFileNode } = require('gatsby-source-filesystem')
const Simplecast = require('./lib/Simplecast');
const { createNodeFactory } = createNodeHelpers({ typePrefix: `Simplecast` });
const PodcastEpisodeNode = createNodeFactory('PodcastEpisode', node => {
  return node;
});

const PLUGIN_NAME = 'gatsby-source-simplecast';
const DEFAULTS = {
  fetchLimit: 1000
};


exports.sourceNodes = async (
  { actions: { createNode, setPluginStatus } },
  { token, podcastId, fetchLimit = DEFAULTS.fetchLimit }
) => {
  const errorAboutGatsbyPlugins =
    'To learn more about configuring Gatsby plugins, visit at https://www.gatsbyjs.org/docs/using-a-plugin-in-your-site/.';
  const errorAboutSimplecastAuth =
    'To learn more about Simplecast authentication, visit https://help.simplecast.com/en/articles/2724796-simplecast-2-0-api.';
  const errorAboutPodcastId = `To get your podcast ID, login to Simplecast, click 'Show Settings' from your account dashboard.`;

  if (!token)
    throw new Error(
      `It looks like you forgot your Simplecast Auth token! Make sure to pass your token into '${PLUGIN_NAME}' options in 'gatsby-config.js'. \n${errorAboutSimplecastAuth} \n${errorAboutGatsbyPlugins}`
    );
  if (!podcastId)
    throw new Error(
      `It looks like you forgot your Simplecast Podcast ID! Make sure to pass the ID into '${PLUGIN_NAME}' options in 'gatsby-config.js'. \n${errorAboutPodcastId} \n${errorAboutGatsbyPlugins}`
    );

  try {
    const sc = new Simplecast({ token, podcastId });
    const episodes = await sc.getEpisodes(fetchLimit);
    const episodesWithKeywords = await Promise.all(episodes.map(async episode => {
        const keywordNodes = await sc.getEpisodeKeywords(episode.id);
        const keyWordNodeValues = keywordNodes.collection.map(keyword => keyword.value);
        episode.keywords = keyWordNodeValues;
        return episode;
    }));
    const episodesWithSearchData = await Promise.all(episodesWithKeywords.map(async episode => {
      const episodeNode = await sc.getEpisodeSearchData(episode.slug);
      episode.longDescription = episodeNode.longDescription;
      episode.authors = episodeNode.authors?.collection?.map(author => author.name);
      return episode;
    }));
    
    await Promise.all(
      episodesWithSearchData
        .map(episode => PodcastEpisodeNode(episode))
        .forEach(node => createNode(node))
    );

    setPluginStatus({ lastFetched: Date.now() });
  } catch (err) {
    console.error('FAIL:', err);
  }
};
