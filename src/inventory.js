export default class PlayerInventory {
    inventoryContents = [];
    
    constructor(){
        this.inventoryContents = [];
    }

    add(item) {
        this.inventoryContents.push(item);
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
    
    list() {
        return this.inventoryContents;
    }
}
