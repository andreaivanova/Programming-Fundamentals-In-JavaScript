function comments(arr) {
    let obj = {
        users: [],
        articles: [],
        objComments: {},
    }
    for (let element of arr) {
        if (element.includes('user')) {
            let [_, username] = element.split(' ');
            if (!obj[users].includes(username)) {
                obj[users].push(username);
            }
        } else if (element.includes('article')) {
            let [_, article] = element.split('')
            if (!obj[articles].includes(article)) {
                obj[articles].push(article);
            }
        } else if (element.includes('posts on')) {
            element = element.split(' posts on ');
            let [username, commentTokens] = element;
            let [article, comment] = commentTokens.split(': ');
            let [commentTitle, commentContent] = comment.split(', ')
            // console.log(commentTitle, '---', commentContent);
            if (articles.includes(article) && users.includes(username)) {

            }
        }
    }




}
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);
console.log(`-------------`);
comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']);