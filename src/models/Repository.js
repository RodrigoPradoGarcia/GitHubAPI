class Repository
{
    #id;
    #name;
    #description;
    #htmlUrl;
    #createdAt;
    #updatedAt;
    #pushedAt;
    #language;
    #stargazersCount;
    #watchersCount;
    #forksCount;

    getId(){return this.#id}
    getName(){return this.#name}
    getDescription(){return this.#description}
    getHtmlUrl(){return this.#htmlUrl}
    getCreatedAt(){return this.#createdAt}
    getUpdatedAt(){return this.#updatedAt}
    getPushedAt(){return this.#pushedAt}
    getLanguage(){return this.#language}
    getStargazersCount(){return this.#stargazersCount}
    getWatchersCount(){return this.#watchersCount}
    getForksCount(){return this.#forksCount}

    static #initialize(json)
    {
        return json.map((rep)=>{
            const repos = new Repository();
            repos.#id = rep.id;
            repos.#name = rep.name;
            repos.#description = rep.description;
            repos.#htmlUrl = rep.html_url;
            repos.#createdAt = rep.created_at;
            repos.#updatedAt = rep.updated_at;
            repos.#pushedAt = rep.pushed_at;
            repos.#language = rep.language;
            repos.#stargazersCount = rep.stargazers_count;
            repos.#watchersCount = rep.watchers_count;
            repos.#forksCount = rep.forks_count;
            return repos;
        });
    }

    static async getRepositoriesFromUser(userLogin)
    {
        const response = await fetch(`https://api.github.com/users/${userLogin}/repos`);
        let json;
        if(response.ok)
        {
            json = await response.json();
            return Repository.#initialize(json);
        }
        else
        {
            return response.status;
        }
    }

    static async getStarredRepositoriesFromUser(userLogin)
    {
        const response = await fetch(`https://api.github.com/users/${userLogin}/starred`);
        let json;
        if(response.ok)
        {
            json = await response.json();
            return Repository.#initialize(json);
        }
        else
        {
            return response.status;
        }
    }
}

export default Repository;