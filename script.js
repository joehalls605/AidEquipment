class AidEquipment {
    constructor(name, description, quantity) {
      this.name = name;
      this.description = description;
      this.quantity = quantity;
    }
  
    getDetails() {
      return `Name: ${this.name}, Description: ${this.description}, Quantity: ${this.quantity}`;
    }
  }
  
  class Inventory {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(name) {
      const index = this.items.findIndex((item) => item.name === name);
      if (index !== -1) {
        return this.items.splice(index, 1)[0];
      }
      return null;
    }
  
    getInventory() {
      return this.items;
    }
  
    renderInventory() {
      const inventoryList = document.getElementById("inventory-list");
      inventoryList.innerHTML = "";
      this.items.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.textContent = item.getDetails();
        inventoryList.appendChild(itemElement);
      });
    }
  }
  
  const inventory = new Inventory();
  const blanket = new AidEquipment('Blanket', 'Warm and cozy blanket', 50);
  const foodKit = new AidEquipment('Food Kit', 'Emergency food rations', 100);
  const medicalKit = new AidEquipment('Medical Kit', 'First aid supplies', 20);
  
  inventory.addItem(blanket);
  inventory.addItem(foodKit);
  inventory.addItem(medicalKit);
  
  inventory.renderInventory();