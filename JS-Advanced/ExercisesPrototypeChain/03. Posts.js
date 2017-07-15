function solve() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `“Post: ${this.title}”\n“Content: ${this.content}”`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            return this.comments.push(comment);
        }

        toString() {
            let result =`Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                result += '\nComments:\n';
                for (let oneComment of this.comments) {
                    result += ` * ${oneComment}\n`;
                }
            }

            return result.trim();
        }

    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };
}