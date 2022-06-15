import Repository from './Repository';

class User
{
    #id;
    #login;
    #name;
    #bio;
    #email;
    #location;
    #blog;
    #company;
    #avatarUrl;
    #htmlUrl;
    #followers;
    #following;
    #publicRepos;
    #repositories;
    #starredRepositories;

    getId(){return this.#id}
    getLogin(){return this.#login}
    getName(){return this.#name}
    getBio(){return this.#bio}
    getEmail(){return this.#email}
    getLocation(){return this.#location}
    getBlog(){return this.#blog}
    getCompany(){return this.#company}
    getAvatarUrl(){return this.#avatarUrl}
    getHtmlUrl(){return this.#htmlUrl}
    getFollowers(){return this.#followers}
    getFollowing(){return this.#following}
    getPublicRepos(){return this.#publicRepos}
    getRepositories(){return this.#repositories}
    getStarredRepositories(){return this.#starredRepositories}

    static async #initialize(json)
    {
        const user = new User();
        user.#id = json.id;
        user.#login = json.login;
        user.#name = json.name;
        user.#bio = json.bio;
        user.#email = json.email;
        user.#location = json.location;
        user.#blog = json.blog;
        user.#company = json.company;
        user.#avatarUrl = json.avatar_url;
        user.#htmlUrl = json.html_url;
        user.#followers = json.followers;
        user.#following = json.following;
        user.#publicRepos = json.public_repos;
        const repos = await Repository.getRepositoriesFromUser(user.#login);
        if(typeof repos === 'number')
        {
            return repos;
        }
        user.#repositories = repos;
        const starred = await Repository.getStarredRepositoriesFromUser(user.#login);
        if(typeof starred === 'number')
        {
            return starred;
        }
        user.#starredRepositories = starred;
        return user;
    }

    static async get(userLogin)
    {
        const response = await fetch(`https://api.github.com/users/${userLogin}`);
        let json;
        if(response.ok)
        {
            json = await response.json();
            return await User.#initialize(json);
        }
        else
        {
            return response.status;
        }
    }
}

export default User;