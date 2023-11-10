import { defineStore } from "pinia"

interface IRepo {
    name: string,
    forks_url: string
}

interface IFork {
    name: string,
    contents_url: string
}

const token = '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'

const useAssignmentStore = defineStore("assignmentstore", {
    state: () => {
        return {
            repos: [] as IRepo[],
            forks: [] as IFork[],
        }
    },
    actions: {
        async getRepos(user: string) {
            console.log('recived')
            //this.repos = []
            const res = await fetch(`https://api.github.com/users/${user}/repos`,
            {   
                headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: `Bearer: ${token}`
                }
            });
            console.log(res)
            const data = await res.json()
            console.log(await data)
            const filtered: IRepo[] = []
            data.forEach((x: IRepo) => filtered.push({name: x.name, forks_url: x.forks_url}))
            this.repos = filtered
        },

        async getForks(userLink: string) {
            const res = await fetch(userLink,
            {
                headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: `Bearer: ${token}`
                }
            });
            const data = await res.json()
            const filtered: IFork[] = []
            data.forEach((x: IFork) => filtered.push({name: x.name, contents_url: x.contents_url}))
        }
    },

    getters: {
        repos(): IRepo[] {
            console.log('sent')
            return this.repos
        }
    }
})
export default useAssignmentStore