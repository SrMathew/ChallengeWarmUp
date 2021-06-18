import posts from '../models/posts';

//Create new post
export async function createPost(req, res) {
    const { title, content, picture, category} = req.body;
    try {
        let newPost = await posts.create({
            title,
            content,
            picture,
            category
        }, {
            fields: ['title', 'content', 'pciture', 'category']
        });
        if(newPost) {
            return res.json({
                messsage: 'Post created successfully',
                data: newPost
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong',
            data: {}
        });
    }
};

//Update a post by id
export async function updatePost(req, res) {
    try {
        const { id } = req.params;
        const { title, content, picture, category } = req.body;

        const post = await posts.update({
            title,
            content,
            picture,
            category
        },
        {
            where: { id }
        });
            return res.json({
                message: 'Updated post which id is: '+ id,
                data: post
            });
        
    } catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        });
    }
};

//Delete a post by id
export async function deletePost(req, res) {
    try {
        const { id } = req.params;
        const countDeletedRows = await posts.destroy(
        {
            where: { id }
        });
            return res.json({
                message: 'Deleted post which id is: '+ id,
                data: countDeletedRows
            });
        
    } catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        });
    }
};

//Return all the posts
export async function getPosts(req, res) {
    try {
        const allPosts = await posts.findAll({
            attributes: ['title', 'content', 'picture', 'category']
        });
        return res.json({
            data: allPosts
        });
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        });
    }
};

//Return one post by id
export async function getOnePost(req, res) {
    try {
        const { id } = req.params;
        const post = await posts.findOne({
            where: {
                id
            }
        });
        if(post){
            return res.json({
                data: post
            });
        } else {
            return res.json({
                message: 'Given id may not exist',
                data: {}
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong'
        });
    }
};