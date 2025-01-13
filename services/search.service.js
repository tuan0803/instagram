const {User, Post} = require('../models');
class SearchService {
    async SearchUser(query, page = 1, limit = 10) {
        try {
            const offset = (page -1) * limit;
            const user = await User.findAll({
                where:{
                    [Op.or] : [
                        { username: { [Op.like]: `%${query}%` } },
                        {fullname : { [Op.like]: `%${query}%` } },
                    ],
                },
                limit,
                offset,
                attributes: ['username', 'full_name', 'profile_picture'],
            });
            return user;
        } catch (error) {
            throw new Error('No user' + error.message);            
        }
    }
    async SearchPost(query, page = 1, limit = 10){
        try {
            const offset = (page - 1)
            const post = await Post.findAll({
                where:{
                    caption: { [Op.like]: `%${query}%` },
                     
                },
                include :[
                    {
                        model : User,
                        as : 'author',
                        attributes : ['username', 'profile_picture']
                    },
                    {
                        model: Hashtag,
                        as: 'hashtags',
                        where: { name: { [Op.like]: `%${query}%` } },
                        required: false,
                    },
                ],
                limit,
                offset,
                attributes : ['post_id', 'caption', 'created_at'],
            });
            return post;
        } catch (error) {
            throw new Error('Not found Post' + error.message);
        }
    }
    
}
module.exports = new SearchService();