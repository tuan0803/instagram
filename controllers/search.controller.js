const searchService = require('../services/search.service');

class SearchController {
    async SearchUser(req, res){
        const {query} = req.query;
        if(!query){
            return res.status(400).json({message : 'Query required'});
        }
        try {
            const user = await searchService.SearchUser(query);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({message : error.message});
        }
    }
    async searchPost(req, res) {
        const { query } = req.query;
        if (!query) {
          return res.status(400).json({ message: 'Query parameter is required' });
        }
    
        try {
          const posts = await searchService.searchPosts(query);
          return res.status(200).json(posts);
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      }
    }
    
    module.exports = new SearchController();