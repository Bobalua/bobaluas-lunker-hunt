export default class PlayerInventory {
    inventoryContents = [];
    
    constructor(){
        this.inventoryContents = [];
    }

    add(item) {
        let limit = 5
        if (this.inventoryContents.length > limit) {
            return false;
        }
        this.inventoryContents.push(item);
        return true;
    }

    remove(item) {
        const userAskedToRemove = item;
        let itemRemoved = false;
        for (let i=0; i < this.inventoryContents.length; i++) {
            const currentItem = this.inventoryContents[i];
            if (userAskedToRemove == currentItem) {
                this.inventoryContents.splice(i,1);
                itemRemoved = true;
                break;
            }
        }
        return itemRemoved;
    }
    
    has(item) {
        for (let i=0; i < this.inventoryContents.length; i++) {
            const currentItem = this.inventoryContents[i];
            if (item == currentItem) {
                return true;
            }
        }
        return false;
    }

    list() {
        return this.inventoryContents;
    }

    empty() {
        this.inventoryContents = [];
    }
}
