import safe from "@/components/dusty-base/DustyResult"



export class GoapAction {
    async execute(agent: GoapAgent) {
        return agent
    }
}

export class GoapPlaner {
    plan(agent: GoapAgent) {
        return [] as GoapAction[]
    }
}

export class GoapAgent {
    planer: GoapPlaner = new GoapPlaner()
    async run() {
        const plan = this.planer.plan(this)
        for (let action of plan) {
            const [err] = await safe(action.execute(this))
            if (!err) continue
            break
        }
        await this.run()
    }
}