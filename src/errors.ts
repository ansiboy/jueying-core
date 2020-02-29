export let errors = {
    pathFieldRequired(name: string) {
        let msg = `Path field of '${name}' component config can not be null or empty.`;
        return new Error(msg);
    },
    canntFindModule(name: string, path: string) {
        let msg = `Can not find component '${name}' in the module, module path is: '${path}'.`;
        return new Error(msg);
    },
    componentNotExists(name: string) {
        let msg = `Component '${name}' not exists.`;
        return new Error(msg);
    }
}
